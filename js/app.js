/* Noyau : état sauvegardé, utilitaires, rubriques, routeur, recherche, réglages. Tout reste sur l'appareil. */
(function () {
  const CLE = "paperasse.v1";

  const etatInitial = () => ({ faits: {}, todo: null, reglages: { theme: "system", taille: 1 } });

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
  P.CONFIG = {
    depot: "https://github.com/Julomasu/paperasse",   // adresse du dépôt GitHub, pour « signaler une erreur »
    // Identité de l'éditeur, affichée dans les mentions légales. À renseigner avant de communiquer largement sur le site.
    // Un éditeur non professionnel peut rester anonyme (loi du 21 juin 2004, art. 6-III-2) à condition de communiquer son identité à l'hébergeur ;
    // un éditeur professionnel doit indiquer nom, adresse, e-mail et directeur de la publication. À faire valider pour ta situation précise.
    editeur: { nom: "", statut: "", directeurPublication: "", contact: "", adresse: "" },
    // Mesure d'audience sans cookie : code du compte GoatCounter (« monsite » pour monsite.goatcounter.com). Vide = aucun script chargé.
    audience: { goatcounter: "" }
  };
  P.VERIFIE = "octobre 2026";

  /* ——— Les huit thèmes de guides */
  P.THEMES = [
    { id: "impots", nom: "Impôts", c: "var(--t-impots)", desc: "Première déclaration, jobs étudiants, rattachement aux parents, prélèvement à la source, plateformes." },
    { id: "entreprise", nom: "Entreprise & freelance", c: "var(--t-entreprise)", desc: "Micro-entreprise, société, association, cotisations, Acre, TVA, factures : de l'idée au premier client." },
    { id: "travail", nom: "Travail & emploi", c: "var(--t-travail)", desc: "Stage, alternance, premier contrat, fiche de paie, chômage, CPF, droits au travail." },
    { id: "logement", nom: "Logement", c: "var(--t-logement)", desc: "Trouver un logement sans garant, bail, APL, assurance, énergie, colocation, litiges avec le propriétaire." },
    { id: "sante", nom: "Santé & Sécu", c: "var(--t-sante)", desc: "Carte Vitale, mutuelle, médecin traitant, contraception gratuite, psy, arrêt de travail, soins à l'étranger." },
    { id: "argent", nom: "Argent & banque", c: "var(--t-argent)", desc: "Ouvrir un compte, carte et fraude, prêt étudiant, épargne, endettement, aides de la Caf." },
    { id: "papiers", nom: "Papiers & identité", c: "var(--t-papiers)", desc: "Carte d'identité, passeport, état civil, permis, carte grise, vote, titre de séjour, voyager." },
    { id: "droits", nom: "Droits & litiges", c: "var(--t-droits)", desc: "Arnaques, amendes, achats en ligne, abonnements, plainte, aide juridique, harcèlement." }
  ];
  P.themeParId = Object.fromEntries(P.THEMES.map(t => [t.id, t]));
  P.guideParId = Object.fromEntries((P.GUIDES || []).map(g => [g.id, g]));

  /* ——— Les cinq rubriques de navigation, avec leurs sous-pages */
  P.HUBS = [
    { id: "parcours", nom: "Mon parcours", pages: [["todo", "Ma to-do"], ["vie", "Situations de vie"], ["suivi", "Mes démarches"]] },
    { id: "guides", nom: "Guides", pages: [["guides", "Tous les guides"]].concat(P.THEMES.map(t => ["theme-" + t.id, t.nom])) },
    { id: "outils", nom: "Outils", pages: [["outils", "Calculs"], ["lettres", "Lettres types"], ["documents", "Où trouver ce papier"], ["contacts", "Qui contacter"], ["calendrier", "Calendrier"], ["numeros", "Numéros utiles"]] },
    { id: "aides", nom: "Aides", pages: [["aides", "Toutes les aides"]] },
    { id: "reperes", nom: "Repères", pages: [["glossaire", "Glossaire"], ["vraifaux", "Vrai ou faux"], ["a-propos", "Sources et limites"]] }
  ];
  const PAGE_HUB = {};
  P.HUBS.forEach(h => h.pages.forEach(p => { PAGE_HUB[p[0]] = h.id; }));
  const PARAM_PAGE = { theme: "guides", guide: "guides", outil: "outils", lettre: "lettres", vie: "vie", glossaire: "glossaire" };

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
  P.nonVides = (...l) => l.filter(Boolean);

  P.toast = function (msg) {
    const z = P.$("#toasts"); if (!z) return;
    const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; z.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  };

  /* Copier du texte : API moderne, puis sélection de secours */
  P.copier = function (texte, zone) {
    const secours = () => {
      const t = zone || document.createElement("textarea");
      if (!zone) { t.value = texte; t.style.position = "fixed"; t.style.opacity = "0"; document.body.appendChild(t); }
      t.focus(); t.select();
      let ok = false; try { ok = document.execCommand("copy"); } catch (e) { /* refus */ }
      if (!zone) t.remove();
      P.toast(ok ? "Texte copié" : "Sélectionne le texte et copie-le");
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(() => P.toast("Texte copié"), secours);
    else secours();
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

  /* ——— Recherche dans tout le site : guides, papiers, lettres, organismes, aides, situations, glossaire */
  P.chercher = function (requete) {
    const mots = P.norm(requete).split(/[^a-z0-9]+/).filter(m => m.length > 1);
    const vide = { guides: [], documents: [], lettres: [], contacts: [], aides: [], vies: [], termes: [] };
    if (!mots.length) return vide;
    const score = (txt, poids) => { const n = P.norm(txt); return mots.reduce((s, m) => s + (n.includes(m) ? poids : 0), 0); };
    const top = (liste, f, n) => (liste || []).map(x => ({ x, s: f(x) })).filter(o => o.s > 0).sort((a, b) => b.s - a.s).slice(0, n).map(o => o.x);
    return {
      guides: top(P.GUIDES, g => score(g.titre, 4) + score(g.accroche, 2) + score((g.mots || []).join(" "), 3) + score((g.enBref || []).join(" "), 1), 8),
      documents: top(P.DOCUMENTS, d => score(d.nom, 4) + score((d.mots || []).join(" "), 3) + score(d.quoi, 1), 4),
      lettres: top(P.LETTRES, l => score(l.titre, 4) + score((l.mots || []).join(" "), 3), 3),
      contacts: top(P.CONTACTS, c => score(c.nom, 4) + score((c.mots || []).join(" "), 3) + score(c.pour, 1), 3),
      aides: top(P.AIDES, a => score(a.nom, 4) + score((a.mots || []).join(" "), 3) + score(a.pour, 1), 3),
      vies: top(P.EVENEMENTS, v => score(v.nom, 4) + score(v.accroche, 2) + score((v.mots || []).join(" "), 3), 3),
      termes: (P.GLOSSAIRE || []).filter(t => mots.every(m => P.norm(t.terme + " " + t.def).includes(m))).slice(0, 4)
    };
  };

  /* ——— Routeur : #page, #page-paramètre */
  const AVEC_PARAM = ["theme", "guide", "outil", "glossaire", "vie", "lettre"];
  P.lireHash = function () {
    const h = (location.hash || "#accueil").slice(1) || "accueil";
    const i = h.indexOf("-");
    if (i > 0 && AVEC_PARAM.includes(h.slice(0, i))) return { page: h.slice(0, i), param: h.slice(i + 1) };
    return { page: h, param: null };
  };
  P.hubActif = function ({ page }) {
    if (page === "accueil") return "accueil";
    return PAGE_HUB[PARAM_PAGE[page] || page] || "";
  };

  function sousNav(r) {
    const hub = P.HUBS.find(h => h.id === P.hubActif(r));
    if (!hub || hub.pages.length < 2) return "";
    const cible = r.page === "theme" ? "theme-" + r.param : (PARAM_PAGE[r.page] || r.page);
    return `<nav class="sous-nav" aria-label="${P.e(hub.nom)}"><p class="sn-pole">${P.e(hub.nom)}</p><ul>${hub.pages.map(([id, nom]) =>
      `<li><a href="#${id}"${id === cible ? ' aria-current="page"' : ""}>${P.e(nom)}</a></li>`).join("")}</ul></nav>`;
  }

  let derniere = null;
  P.rendre = function () {
    const r = P.lireHash(), el = P.$("#app");
    const fn = P.pages[r.page] || P.pages.accueil;
    const meme = derniere && derniere.page === r.page && derniere.param === r.param;
    derniere = r;
    el.onclick = el.onchange = el.oninput = null;
    fn(el, r.param);
    el.classList.remove("entree"); void el.offsetWidth; el.classList.add("entree");
    const zone = P.$("#sous-nav"); if (zone) zone.innerHTML = sousNav(r);
    const actif = P.hubActif(r);
    P.$$("[data-nav]").forEach(a => { const on = a.dataset.nav === actif; a.classList.toggle("actif", on); if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    const h1 = P.$("h1", el);
    document.title = (h1 ? h1.textContent.trim() + " · " : "") + "Paperasse";
    if (P.audience) P.audience.compter();
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
    // largeur d'une barre de défilement classique : sert à centrer exactement les sections pleine largeur (.plein)
    const mesurerBarre = () => {
      document.documentElement.style.setProperty("--sbw", Math.max(0, window.innerWidth - document.documentElement.clientWidth) + "px");
      const ent = P.$(".entete"); if (ent) document.documentElement.style.setProperty("--h-entete", ent.offsetHeight + "px");   // la sous-navigation se colle sous l'en-tête
    };
    mesurerBarre(); window.addEventListener("resize", mesurerBarre);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(mesurerBarre);
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
    if (P.audience) P.audience.init();
    P.rendre();
    if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol) && !/claude\.ai|claudeusercontent/.test(location.hostname)) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  };
})();
