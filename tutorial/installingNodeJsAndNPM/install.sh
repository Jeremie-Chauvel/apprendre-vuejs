#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

readonly SCRIPT_DIRECTORY="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

cd "$SCRIPT_DIRECTORY"

echo -e '♻️ \e[92mCleaning npm cache before proceeding\e[0m'
set -x
npm cache clean --force
set +x
echo -e '\e[92mInstalling npmbox\e[0m'
set -x
tar --no-same-owner --no-same-permissions -xvzf npmbox.npmbox
npm install --global --cache ./.npmbox.cache --optional --cache-min 99999999999 --shrinkwrap false npmbox
set +x
echo -e '\e[92mInstalling http-server\e[0m'
set -x
npmunbox --global http-server.npmbox
set +x
echo -e '\e[92mInstallation successful\e[0m 🎉'
