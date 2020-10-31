# Point sur les concepts de base Vuejs

Nous avons vu quelques unes des fonctionnalités basiques de Vuejs, avant de passer à la section suivante dédie à l'utilisation d'outil moderne pour construire une application vuejs, je propose un dernier challenge: utiliser un serveur pour récupérer les informations que nous affichons dans notre page de catalogue.

Les avantages d'utiliser un serveur sont nombreux:

- on se contente d'afficher la donnée envoyé par le back
- on évite d'héberger toute les ressources directement (le back nous fournis les images par exemple)
- commencer à comprendre comment les différentes briques web interagissent entre elles. (le code du back est disponible)

## Utiliser le serveur back

Pour utiliser le serveur back, il faut l'installer et le lancer, [ces étapes sont décrites dans le README du back](../../back/README.md)

### Utiliser les fichiers servi par le backend

Le serveur back sert tout les assets statique, tu remarque en effet dans l'exercice 6, qu'il n'y a plus d'image ou de script vuejs dans le dossier.

Notre objectif va être d'adapté notre code pour utiliser:

- les assets (images et script js) servit par le back
- la donné de la page catalog

Pour les assets, deux routes sont disponible:

- Pour les scripts: `http://localhost:3000/script/<nom-du-script>.js`
- Pour les images: `http://localhost:3000/image/<nom-de-l-image>.jpg`

### Utiliser la donné de la page catalogue

Plus besoins d'écrire la liste des produits dans la propriété data de l'instance vuejs, on peux directement aller recuperer cette object en faisant une requête à : `http://localhost:3000/catalog/man/polos-t-shirts`.

Pour ce faire, on peut utiliser la méthode `fetch` qui permet de faire un call api en javascript depuis les navigateurs récent. Il faut alors déterminer où faire la requête dans Vuejs.

Nous verrons dans une des [sections suivante les hook de lifecycle vuejs](../VuejsLifecycle/README.md): ce sont des fonctions qui sont déclenché par vuejs pendant la durée de vie du composant, on peux ainsi utiliser la fonction 'created' pour déclencher une action lorsque notre composant est créé:

```js
 var app = new Vue({
      el: '#app',
      created: async function () {
        /*
        un fetch retourne une promesse, il faut donc soit l'attendre avec une
        fonction : async()=> await Promise<>
        soit chaîner des actions comme .then et .catch
        */
        try {
          // on récupère la réponse et on convertit son contenu en object javascript
          const response = await fetch('http://some_url_on_a_serveur/test');
          this.propertyInData = await response.json();
        } catch (error) {
          console.error(error);
        }
      },
      data:{
        /*
        on défini une valeur par default pour la propriété, car
         un fetch étant asynchrone, il faut que notre composant puisse
         s'afficher sans erreur en attendant le résultat
        */
        propertyInData: null
      }
```

Tu devrais avoir toutes [les clé en mains pour finir l'exercice 6](../../exercises/6_completing_basics/index.html).

## Fin des basiques

A partir de la section suivante, nous aborderons des outils et technique plus complexe, accroche toi ! Un peu de complexité initial va nous permettre de simplifier notre séparation en composant, de développer bien plus vite et le tout en faisant moins d'erreur 🎉

Prochaine leçon: [pourquoi les balises script ne suffisent plus](../whyScriptTagsAreNotEnough/README.md), la première de la section : [développer une application javascript vuejs moderne](../../README.md#développer-une-application-javascript-vuejs-moderne).
