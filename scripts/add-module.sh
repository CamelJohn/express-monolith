mkdir -p src/app/modules/$1

cp -R templates/module/ src/app/modules/$1/

echo "\nexport * from './$1';" >> src/app/modules/index.ts

node ./scripts/register-module-routes.js $1