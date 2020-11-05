# Pourquoi les balises script ne suffisent plus

Jusqu'à présent nous avons développé notre page dans un fichier `index.html` unique. Lorsque nous avons voulu découper notre application nous avons du importer dans l'ordre chaque script (et css). Cette stratégie est viable pour des petites page web mais rapidement pour de plus grosse application ou lorsque l'on travaille en équipe, on attends les limites de cette stratégie, illustron les problesmes:

Imaginons que nous fabriquons une application web et que nous l'avons séparé en plusieurs fichiers Javascript , que nous incluons comme ceci:

```html
<html>
  <script src="/src/foo.js"></script>
  <script src="/src/bar.js"></script>
  <script src="/src/baz.js"></script>
  <script src="/src/qux.js"></script>
  <script src="/src/quux.js"></script>
</html>
```

Chaque fichier va demander une nouvelle requête http, ce qui signifie 5 requêtes http pour charger l'intégralité du code Javascrip nécessaire pour l'application. Il serait donc bien mieux de combiner tout les fichiers en un unique fichier:

```html
<html>
  <script src="/dist/bundle.js"></script>
</html>
```

Le problème devient alors de générer ce fichier `dist/bundle.js`:

- Il faut maintenir l'ordre des fichiers initiaux, comment gères-t-on la dépendance entre les fichiers ?
- Comment prévenir les collisions de nommage (même nom de variable dans différents fichiers)
- Comment gérer si des parties ne sont pas utiliser pour ne pas les inclure

Toutes ses problématiques peuvent être gérer si l'on connaît l'ensemble des dépendances entres les fichiers tel que:

- Quel fichier dépends d'un autre
- Chaque interface exposé par un fichier

et c'est exactement l'objectif d'un bundler:

- Il gère la dépendances des modules javascript à notre place
- Il regroupe le code, évite les collisions de nommage, réécrit les chemins vers les assets (images, css).

Nous allons voire dans la [section suivante qu'est ce qu'un bundler en detail](../WhatIsABundler/README.md) et nous verrons rapidement un exemple de bundler.

NB: une partir de cette section a été adapté de l'article: [What is module bundler and how does it work?](https://lihautan.com/what-is-module-bundler-and-how-does-it-work/)
