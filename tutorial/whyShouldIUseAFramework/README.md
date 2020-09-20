# Pourquoi utiliser un framework frontend

En commençant ce tutoriel, tu sais déjà comment créer une page basique en HTML, dans ce cas qu'elle est l'apport d'un framework frontend tel que Vuejs ?

Cette question a de nombreuses réponses pertinentes, l'utilisation d'un framework apporte de nombreux avantages pour ses coûts élevés, nous allons explorer ces avantages et inconvénients.

## Inconvénients

Les frameworks ont bien évidemment des désavantages, le plus évident est la difficulté d'approche, en particulier lors de l'apprentissage de son premier framework frontend.
Cet inconvénient est à nuancer, en effet, chaque framework a sa courbe d'apprentissage et il n'est pas nécessaire d'être un expert pour bénéficier de leurs nombreux avantages.

Deuxième inconvénient, l'utilisation d'un framework augmente la taille de la page web à télécharger. Pour un ordinateur, c'est rarement un problème, mais pour un smartphone utilisant un réseau mobile cela peut devenir un frein.
Encore une fois à nuancer: l'utilisation d'une SPA que nous verrons dans ce tutoriel permets de limiter le téléchargement du framework à la première page puis de ne télécharger que les informations nécessaire pour rendre la prochaine page au lieu de re-télécharger toute une nouvelle page. De plus, les framework récent, on des tailles minifier raisonnable: Vuejs 2.5.3 pèse 86KB. tandis que jQuery 3.2.1 pèse 87KB.

Ces quelques inconvénients sont à mettre en parallèle aux nombreux avantages des frameworks développé ci-dessous.

## Avantages

Premièrement, pour l'expérience utilisateur du site internet que tu développes, l'utilisation d'un framework va te permettre de créer une expérience bien plus dynamique, reactive et engageante qu'en utilisant du javascript natif ou du JQuery. Si dessous, l'exemple de la page d'accueil du site dior.com avec son carrousel de produit et sa recherche:

![Exemple de la page d'accueil du site e-commerce Dior](./usingAFramework.gif)

Deuxième avantage non négligeable, la productivité d'un développeur utilisant un framework pour développeur la même fonctionnalité va être décuplé. Les framework récent utilisant des composants permettent, par exemple, la réutilisation du code sans duplication, dans l'exemple ci-dessous, on peut apercevoir un second carrousel sur la même page:

![Exemple de la re-utilisation d'un composant](./componentBenefit.gif)

Les framework populaire bénéficie de nombreuses extensions permettant de ne pas re-inventer la roue: du composant tel qu'un [burger menu](./burgerMenu.gif) à un dev plus generale comme la gestion des traductions avec _Vue I18n_.

Enfin, éviter d'écrire du code boilerplate, c'est à dire un morceau code standard utilisé pour de nombreuses applications (par exemple : la gestion de la valeur d'un input HTML). Utiliser un framework permet de dépenser son energie à répondre à des besoins clients et non pas sur des details d'implémentations: C'est écrire du code compréhensible par des humains. Être maintenable est l'avantage principale pour tout projet, en effet, en tant que développeur, on passe finalement plus de temps à relire/comprendre du code qu'a en écrire.

Troisième avantage des frameworks: la performance. C'est un point discutable car les framework induisent forcement un coût de téléchargement supplémentaire (puisque du javascript en plus). Cependant avec les nombreuses avancés tel que les SPA (application web: single page app) et le SSR (rendu côté serveur: server side rendering), les frameworks permettent d'accéder à des performances de premier ordre à faible coût pour le développeur.

## Quand utiliser un framework

À la vue des avantages des frameworks, après l'effort initial d'apprentissage, je recommande leurs utilisation systématique. Il devient en effet d'une grande simplicité de développer plus rapidement même les petites applications où l'utilisation d'un framework pourrait être discutable.
Pour les gros projets, les gains en maintenabilité et en factorisation du code sont tel que l'utilisation d'un framework est obligatoire.

Maintenant que nous avons établis qu'utiliser un framework est toujours recommandable, tu peux passer à la section suivante où j'expliquerais le choix du framework Vuejs; [Pourquoi utiliser le framework Vuejs ?](../whyVuejs/README.md)
