# dave-portfolio

Monorepo pnpm pour le portfolio de Dave.

## Structure

```
apps/
  web/            → site (Vite, JS vanilla), FR par défaut avec bascule EN
packages/
  content/         → contenu bilingue (fr.js / en.js), partagé par apps/web
```

`packages/content` est un package indépendant : si tu ajoutes un jour une autre
app (générateur de CV, page de statut, etc.), elle peut réutiliser le même
contenu sans dupliquer les textes.

## Commandes

```bash
pnpm install       # installe tout le workspace
pnpm dev           # lance apps/web en dev (http://localhost:5173)
pnpm build          # build de production → apps/web/dist
pnpm preview         # prévisualise le build
```

## Contenu & traduction

Tous les textes vivent dans `packages/content/src/fr.js` et `en.js` (même
forme des deux côtés). Le site les consomme via `apps/web/src/main.js`, qui :

- applique le texte statique via les attributs `data-i18n="chemin.vers.la.clé"`
- construit les sections dynamiques (skills, projets, architecture,
  expérience, parcours) directement depuis les tableaux du contenu

La langue choisie est mémorisée dans `localStorage`.

## Expérience professionnelle

`experience.items` est vide par défaut. Tant qu'il l'est, la section
« Expérience » affiche un état alternatif (renvoi vers les projets et le
parcours) au lieu d'un bloc vide ou d'un historique inventé. Le jour où tu as
une vraie expérience à ajouter, remplis `items` dans `fr.js` et `en.js` avec
`{ role, company, period, description }` — la section bascule automatiquement
sur l'affichage liste.
