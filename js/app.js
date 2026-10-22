/* Noyau : état sauvegardé, utilitaires, routeur, réglages. Tout reste sur l'appareil. */
(function () {
  const CLE = "paperasse.v1";

  const etatInitial = () => ({ faits: {}, situation: null, reglages: { theme: "system", taille: 1 } });

  function charger() {
    try {
      const brut = localStorage.getItem(CLE);
      if (brut) return Object.assign(etatInitial(), JSON.parse(brut));
    } catch (e) { /* stockage indisponible : on garde l'état en mémoire */ }
    return etatInitial();
  }

  P.etat = charger();
  P.sauver = function () { try { localStorage.setItem(CLE, JSON.stringify(P.etat)); } catch (e) { /* idem */ } };
  P.pages = {};
  P.CONFIG = { depot: "" };   // adresse du dépôt GitHub, pour « signaler une erreur » (laisser vide tant qu'il n'existe pas)
  P.VERIFIE = "octobre 2026";

  P.THEMES = [
    { id: "impots", nom: "Impôts", emoji: "🧾", c: "var(--t-impots)", desc: "Ta première déclaration, jobs étudiants, rattachement aux parents, prélèvement à la source." },
    { id: "entreprise", nom: "Créer son entreprise", emoji: "🚀", c: "var(--t-entreprise)", desc: "Micro-entreprise, société, cotisations, Acre, TVA : de l'idée au premier chiffre d'affaires." },
    { id: "logement", nom: "Logement, santé & CAF", emoji: "🏠", c: "var(--t-logement)", desc: "Trouver un logement sans garant, toucher l'APL, ta Sécu, ta mutuelle, les aides pour les jeunes." },
    { id: "papiers", nom: "Papiers & démarches", emoji: "🪪", c: "var(--t-papiers)", desc: "Carte d'identité, passeport, recensement, vote, permis, changement d'adresse, arnaques." }
  ];
  P.themeParId = Object.fromEntries(P.THEMES.map(t => [t.id, t]));
  P.guideParId = Object.fromEntries((P.GUIDES || []).map(g => [g.id, g]));

  /* ——— Utilitaires */
  P.e = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  P.$ = (sel, racine) => (racine || document).querySelector(sel);
  P.$$ = (sel, racine) => Array.from((racine || document).querySelectorAll(sel));
  P.euros = n => Math.round(n).toLocaleString("fr-FR") + " €";
  P.pct = n => (Math.round(n * 10) / 10).toLocaleString("fr-FR") + " %";
  P.norm = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  /* Mini-markdown : **gras**, [texte](https://…), [texte](#page), [[terme|texte]] (glossaire), listes « - », paragraphes séparés par une ligne vide. */
  const glose = (id, txt) => {
    const t = (P.GLOSSAIRE || []).find(x => x.id === id);
    return `<a class="glose" href="#glossaire-${P.e(id)}" title="${P.e(t ? t.def : "")}">${txt}</a>`;
  };
  const inline = s => P.e(s)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\((https:\/\/[^)\s]+)\)/g, '<a class="lien-ext" href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\[([^\]]+)\]\((#[a-z0-9-]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\[\[([a-z0-9-]+)\|([^\]]+)\]\]/g, (_, id, txt) => glose(id, txt));
  P.md = function (texte) {
    return String(texte || "").split(/\n{2,}/).map(bloc => {
      const lignes = bloc.split("\n").filter(Boolean);
      if (lignes.length && lignes.every(l => l.startsWith("- "))) return `<ul>${lignes.map(l => `<li>${inline(l.slice(2))}</li>`).join("")}</ul>`;
      return `<p>${lignes.map(inline).join(" ")}</p>`;
    }).join("");
  };
  P.mdInline = inline;

  P.toast = function (msg) {
    const z = P.$("#toasts"); if (!z) return;
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; z.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  };

  /* ——— Avancement des étapes cochées */
  P.estFait = (gid, i) => !!(P.etat.faits[gid] && P.etat.faits[gid].includes(i));
  P.basculer = function (gid, i) {
    const l = P.etat.faits[gid] = P.etat.faits[gid] || [];
    const k = l.indexOf(i);
    if (k < 0) l.push(i); else l.splice(k, 1);
    if (!l.length) delete P.etat.faits[gid];
    P.sauver();
  };
  P.avancement = function (g) {
    const total = g.etapes.length, fait = ((P.etat.faits[g.id] || []).filter(i => i < total)).length;
    return { fait, total, pct: total ? Math.round(100 * fait / total) : 0 };
  };

  /* ——— Recherche : titre, accroche, mots-clés, points clés, glossaire */
  P.chercher = function (requete) {
    const mots = P.norm(requete).split(/[^a-z0-9]+/).filter(m => m.length > 1);
    if (!mots.length) return { guides: [], termes: [] };
    const score = (txt, poids) => { const n = P.norm(txt); return mots.reduce((s, m) => s + (n.includes(m) ? poids : 0), 0); };
    const guides = (P.GUIDES || []).map(g => ({
      g, s: score(g.titre, 4) + score(g.accroche, 2) + score((g.mots || []).join(" "), 3) + score((g.enBref || []).join(" "), 1)
    })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 8).map(x => x.g);
    const termes = (P.GLOSSAIRE || []).filter(t => mots.every(m => P.norm(t.terme + " " + t.def).includes(m))).slice(0, 4);
    return { guides, termes };
  };

  /* ——— Routeur : #page, #page-paramètre */
  const AVEC_PARAM = ["theme", "guide", "outil", "glossaire"];
  P.lireHash = function () {
    const h = (location.hash || "#accueil").slice(1) || "accueil";
    const i = h.indexOf("-");
    if (i > 0 && AVEC_PARAM.includes(h.slice(0, i))) return { page: h.slice(0, i), param: h.slice(i + 1) };
    return { page: h, param: null };
  };
  P.ongletActif = function ({ page, param }) {
    if (page === "theme") return param;
    if (page === "guide") return P.guideParId[param] ? P.guideParId[param].theme : "accueil";
    if (page === "outil") return "outils";
    if (page === "glossaire") return "glossaire";
    return page;
  };

  let derniere = null;
  P.rendre = function () {
    const r = P.lireHash(), el = P.$("#app");
    const fn = P.pages[r.page] || P.pages.accueil;
    const meme = derniere && derniere.page === r.page && derniere.param === r.param;
    derniere = r;
    el.onclick = el.onchange = el.oninput = null;
    fn(el, r.param);
    el.classList.remove("entree"); void el.offsetWidth; el.classList.add("entree");
    const actif = P.ongletActif(r);
    P.$$("[data-nav]").forEach(a => { const on = a.dataset.nav === actif; a.classList.toggle("actif", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    const h1 = P.$("h1", el);
    document.title = (h1 ? h1.textContent + " · " : "") + "Paperasse";
    if (!meme && !(r.page === "glossaire" && r.param)) { window.scrollTo(0, 0); el.focus({ preventScroll: true }); }
    fermerPlus();
  };

  /* ——— Menu « Plus » et réglages */
  function fermerPlus() {
    const m = P.$("#plus"); if (!m) return;
    m.hidden = true; P.$$("[data-ouvre-plus]").forEach(b => b.setAttribute("aria-expanded", "false"));
  }
  function appliquerReglages() {
    const r = P.etat.reglages, rac = document.documentElement;
    if (r.theme === "system") rac.removeAttribute("data-theme"); else rac.setAttribute("data-theme", r.theme);
    rac.style.setProperty("--zoom", [1, 1.125, 1.25][r.taille] || 1);
    P.$$("[data-reglage]").forEach(b => {
      const [cle, val] = b.dataset.reglage.split(":");
      b.setAttribute("aria-pressed", String(String(r[cle]) === val));
    });
  }

  P.demarrer = function () {
    appliquerReglages();
    document.addEventListener("click", ev => {
      const plus = ev.target.closest("[data-ouvre-plus]");
      if (plus) {
        const m = P.$("#plus"), ouvrir = m.hidden;
        m.hidden = !ouvrir; P.$$("[data-ouvre-plus]").forEach(b => b.setAttribute("aria-expanded", String(ouvrir)));
        return;
      }
      const reg = ev.target.closest("[data-reglage]");
      if (reg) {
        const [cle, val] = reg.dataset.reglage.split(":");
        P.etat.reglages[cle] = cle === "taille" ? Number(val) : val;
        P.sauver(); appliquerReglages(); return;
      }
      if (!ev.target.closest("#plus")) fermerPlus();
    });
    document.addEventListener("keydown", ev => { if (ev.key === "Escape") fermerPlus(); });
    window.addEventListener("hashchange", P.rendre);
    P.rendre();
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && !/claude\.ai|claudeusercontent/.test(location.hostname)) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  };
})();
