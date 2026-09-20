# ADN Ciel & Territoires — site web

Site vitrine construit avec [Astro](https://astro.build), pensé pour un déploiement
statique rapide, un bon référencement naturel et une maintenance simple.

## Stack

- **Astro** (rendu statique, aucun framework JS lourd)
- **@astrojs/sitemap** pour la génération automatique du sitemap SEO
- Polices : Newsreader (titres) + Public Sans (texte courant), chargées depuis Google Fonts
- Aucune dépendance de style externe (CSS natif, tokens dans `src/styles/global.css`)

## Structure du projet

```
/
├── public/
│   ├── favicon.svg        ← placeholder, à remplacer par le logo définitif
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro   ← SEO (title, meta description, Open Graph)
│   ├── pages/
│   │   ├── index.astro                     → /
│   │   ├── accompagnement-collectivites.astro
│   │   ├── methode-engagements.astro
│   │   ├── a-propos.astro
│   │   ├── contact.astro
│   │   ├── mentions-legales.astro
│   │   ├── politique-confidentialite.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css     ← tokens de couleur, typographie, composants
├── astro.config.mjs        ← site défini sur adncielterritoires.fr, sitemap activé
└── package.json
```

## Démarrage en local

```bash
npm install
npm run dev
```

Le site est alors accessible sur `http://localhost:4321`.

## Mise en ligne sur GitHub

```bash
git init
git add .
git commit -m "Site ADN Ciel & Territoires — première version"
git branch -M main
git remote add origin https://github.com/<votre-compte>/adn-ciel-territoires.git
git push -u origin main
```

## Déploiement sur Vercel

1. Sur [vercel.com](https://vercel.com), cliquez sur **Add New → Project**.
2. Importez le dépôt GitHub `adn-ciel-territoires`.
3. Vercel détecte automatiquement Astro (framework preset "Astro") : aucune configuration
   supplémentaire n'est nécessaire. Commande de build : `astro build`, dossier de sortie :
   `dist/`.
4. Cliquez sur **Deploy**. Le site est disponible sur une URL `*.vercel.app` en quelques
   minutes.
5. Chaque `git push` sur `main` redéploie automatiquement le site.

## Nom de domaine (OVH)

1. Achetez `adncielterritoires.fr` (ou le nom retenu) sur [OVH](https://www.ovhcloud.com).
2. Dans Vercel : **Project → Settings → Domains**, ajoutez `adncielterritoires.fr` et
   `www.adncielterritoires.fr`.
3. Vercel indique les enregistrements DNS à créer (généralement un enregistrement `A` vers
   une IP Vercel pour le domaine racine, et un `CNAME` vers `cname.vercel-dns.com` pour le
   sous-domaine `www`).
4. Dans l'espace client OVH, zone DNS du domaine, créez ces enregistrements tels qu'indiqués
   par Vercel.
5. La propagation DNS peut prendre de quelques minutes à 24h. Vercel émet ensuite
   automatiquement un certificat HTTPS.

Si le domaine définitif diffère de `adncielterritoires.fr`, pensez à mettre à jour la valeur
`site` dans `astro.config.mjs` (elle sert de base au sitemap et aux URLs canoniques).

## SEO

- Le sitemap est généré automatiquement au build (`@astrojs/sitemap`), accessible sur
  `/sitemap-index.xml`.
- `robots.txt` référence ce sitemap.
- Chaque page définit un `title`, une `description` et une URL canonique via `Layout.astro`.
- Un seul `<h1>` par page, hiérarchie `h2`/`h3` cohérente.
- Pensez à soumettre le sitemap à Google Search Console une fois le domaine en ligne.

## Formulaire de contact

Le formulaire de la page `/contact/` est un formulaire [Tally](https://tally.so) intégré en
iframe dans `src/pages/contact.astro`. Les réponses arrivent directement dans votre
tableau de bord Tally (et peuvent être redirigées par e-mail depuis les réglages du
formulaire sur tally.so).

Pour modifier les champs du formulaire, éditez-le directement sur tally.so — aucune
modification du code n'est nécessaire tant que l'identifiant du formulaire
(`KYXOvX` dans l'URL `data-tally-src`) reste le même.

## Contenu encore à compléter

Ces éléments sont volontairement laissés en placeholder ("à compléter") en attendant vos
informations définitives :

- Adresse e-mail de contact (footer, mentions légales, formulaire)
- Adresse postale (mentions légales) — actuellement volontairement non affichée
- Directeur de la publication (mentions légales)
- Logo définitif (`public/favicon.svg` et `.brand__mark` dans `Header.astro` sont des
  placeholders textuels "ADN")
