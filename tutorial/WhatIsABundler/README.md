# Qu'est ce qu'un Bundler

## Objectif d'un bundler

Comme vu dans la section précédente, un bundler est un outil qui a été crée pour résoudre le problème de la gestion des dépendances entre nos fichiers de javascript pour les regrouper en un seul fichier javascript (to bundle: regrouper).

C'est la fonction primaire des bundlers, petit exemple :

entré :

```text
src/
  index.html
  components/
    component_1.js
    component_2.js
  helpers/
    helper_1.js
```

sortie:

```text
dist/
  index.html'
  app.js
```

⚠ `index.html` dans `dist` (en sortie) est différent de `index.html` dans `src` (en entré) car le bundler a au minimum ré-écrit les balises scripts pour inclure uniquement app.js.

## Autres avantages d'un bundler

Les bundler ont évolués et désormais la grande majorité offre une pléthore de fonctionnalités supplémentaire, par exemple :

- Minimiser le javascript pour le servir en production, en effet, un fichier plus petit = moins de temps de téléchargement :

```js
var test = [];
for (var i = 0; i < 100; i++) {
  test[i] = i;
}
```

devient:

```js
for (var a = [(i = 0)]; ++i < 100; a[i] = i);
```

- Transcompilation du code : la transcompilation est un mot barbare pour décrire le fait de compiler un language dans le même language, dans notre cas du javascript en javascript. L'intérêt dans notre cas est de pouvoir utiliser des fonctionnalités récente de javascript sans se soucier du support de ces fonctionnalités par les navigateurs puisqu'elles seront réécrite en une version compatible lors de la transcompilation. Un exemple pour y voire plus claire:

```js
// Input: ES2015 arrow function
[1, 2, 3].map((n) => n + 1);

// Output: ES5 equivalent
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

Le transcompilateur le plus connu en javascript est **Babel** et les bundlers l'utilisent directement ou ils sont configurable pour l'utiliser sous la forme d'un plugin.

La transcompilation est aussi l'occasion d'ajouter des polyfills pour supporter des nouvelles fonctionnalités sur d'anciens navigateur (comme Internet Explorer 11)

- Suppression du code mort dans le build final (Une fonction non utilisé ne sera pas inclut ✨)
- Code splitting : Séparation du code en français, c'est une amélioration liée à la performance, elle consiste simplement à créer des bundle plus petit et a charger les scripts javascript nécessaire au fur et à mesure lorsqu'ils sont nécessaire pour accélérer le chargement initial de la page. Un exemple pour rendre cela plus claire :

Je coconstruit un site e-commerce pour dior et j'ai besoin des composant de carrousel pour la homepage.
Pour la page de checkout (=passage de la commande et paiement), je n'ai pas besoin de carrousel mais j'ai par exemple besoin de charger les scripts gérant le paiement.

Dans ce cas, grâce au code splitting, le bundle chargé sur la page d'accueil contient le code du carrousel mais ne contient pas le code gérant le paiement. Au contraire sur la page checkout le bundle contient le code du paiement mais pas celui du carrousel.

On allège ainsi les deux pages accélérant le chargement de chaque page pour l'utilisateur du site.

- Les bundlers peuvent être utilisés pour gérer notre HTML, CSS, images et autres assets de la même manière.

## Avantages pendant le développement

Les bundlers ont aussi des avantages lors du développement d'un site, ainsi ils fournissent en generale les possibilités suivantes:

- Rechargement automatique des pages lorsqu'un fichier source change (il n'est plus nécessaire de recharger sa page manuellement)
- Hot module replacement (HMR) : C'est une amélioration de la fonctionnalité précédente qui permet de recharger juste la partie du code source qui a changé sans recharger toute la page.

## Quelques bundler

Ils existent de nombreuses implémentations de bundler, les plus connus sont:

- Webpack: C'est probablement le bundler le plus connu, il a l'avantage d'être entièrement configurable et possède un grand écosystème de plugin pour étendre ses fonctionnalités. Il est cependant difficile d'accès à cause de cette même configuration. Je ne le recommande que pour les grosses applications car il offrira le plus de contrôle sur la sortie.
- Rollup: Plus simple à configurer, Rollup s'est imposé dans le milieu de la creation de library javascript. Je le recommande dans ce cas d'utilisation (et pas pour une application web).
- Parcel est un bundler qualifié de 0 config par ses auteurs et il est en effet le plus accessible pour construire une application web. Je recommande son utilisation pour les petits projet où un bundler est nécessaire mais pour lequel un investissement chronophage n'est pas justifiable.

Nous allons maintenant voire comment générer un projet avec un bundler. Comme c'est un problème récurent et difficile, la grande majorité des framework possèdent des utilitaires pour nous aider à la creation d'application, nous allons ainsi [utiliser VueCli pour créer notre application](../CreateAnApplicationWithVueCLI/README.md).
