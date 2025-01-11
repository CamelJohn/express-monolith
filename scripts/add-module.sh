#!/usr/bin/env bash

if [[ $# -eq 0 ]]; then
  echo "No arguments provided"
  exit 1
fi

mkdir -p src/app/modules/$1

cp -R $(pwd)/node_modules/bxp/templates/module/ src/app/modules/$1/

echo "\nexport * from './$1';" >> src/app/modules/index.ts

node $(pwd)/node_modules/bxp/scripts/register-module-routes.js $1