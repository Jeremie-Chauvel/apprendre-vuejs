# Serveur back pour apprendre vuejs

Ce serveur à pour vocation de servir tout les assets et la donné à notre page web.

C'est un serveur très basique dont l'implémentation ne ressemble pas à un vrai serveur
puisque très didactique, il est basé sur le framework Express, un framework décrit :
Rapide, sans opinion et minimaliste.

S'il n'est plus considéré comme l'état de l'art, il reste suffisamment simple pour que parcourir les sources soient une possibilité,
ce que je t'encourage à faire, en [commençant par l'index du serveur](./src/index.js)

## Installation

Pour installer le serveur, tu as besoin de npmbox (si tu suis ce tutoriel dans l'ordre npmbox est déjà installé, sinon, [c'est ici pour installer npmbox](../tutorial/installingNodeJsAndNPM/README.md#installer-les-packages-hors-ligne))

Une fois npmbox installé, il suffit de te rendre dans le dossier back et de lancer le script npm 'offline-install' :

```bash
cd back
npm run offline-install
```

Pour tester l'installation lance, le serveur avec `npm start`, puis rends toi sur [http://localhost:3000/](http://localhost:3000/), tu devrais voire 'OK' 🎉

## Lancer le serveur

Lorsque tu as besoin du serveur back, ouvre un terminal dédié et lance la commande `npm start` depuis le dossier 'back'

```bash
cd back
npm start
```

Tu peux tester que le serveur est bien lancé en te rendant sur [http://localhost:3000/](http://localhost:3000/), tu devrais voire 'OK'.
