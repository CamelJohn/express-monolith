# install dependencies
echo "installing dependencies"
npm i --save express cors helmet morgan http-errors joi dotenv jest ts-jest supertest typeorm reflect-metadata pg jsonwebtoken bcrypt

# install dev dependencies
echo "installing dev dependencies"
npm i --save-dev @types/node @types/express @types/cors @types/morgan @types/jest @types/supertest typescript esbuild tsx

# add scripts
echo "adding scripts to package.json"
npm pkg set scripts.add:module="./add-module.sh"
npm pkg set scripts.check-types="tsc --noEmit"
npm pkg set scripts.build="node ./esbuild.build.js"
npm pkg set scripts.watch="node ./esbuild.watch.js"
npm pkg set scripts.test="jest"

cp -R templates/ .