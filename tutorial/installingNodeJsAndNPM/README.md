# Installer Node.js et NPM

## Node.js et NPM

Une connexion internet est requise !

Pour installer nodejs et NPM, je te recommandes de suivre cet [article de la documentation NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (en anglais) tout à fait complet.

Comme souligné dans l'article, je recommande _fortement_ d'utiliser un gestionnaire de version tel `nvm` qui permet alors d'avoir plusieurs versions de nodejs en parallèles selon les besoins des projets.

## Installer les packages hors ligne

Pour pouvoir installer des packages npm hors ligne, nous utiliserons npmbox.

### Script bash d'installation en une étape (linux/OSX)

```bash
bash ./tutorial/installingNodeJsAndNPM/install.sh
```

### Installation manuelle

#### Installer npmbox

Pour installer npmbox, sous linux et OSX (mac) lances les commandes suivantes, [depuis la racine du projet](../../):

```bash
cd tutorial/installingNodeJsAndNPM
tar --no-same-owner --no-same-permissions -xvzf npmbox.npmbox
npm install --global --cache ./.npmbox.cache --optional --cache-min 99999999999 --shrinkwrap false npmbox
```

#### Installer http-server pour servir des fichier static

Une fois npmbox installé, dans le même dossier lances la commande:

```bash
npmbox --global http-server.npmbox
```
