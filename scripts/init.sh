# install dependencies
echo "installing dependencies"
npm i --save express cors helmet morgan http-errors joi dotenv jest ts-jest supertest typeorm reflect-metadata pg jsonwebtoken bcryptjs

# install dev dependencies
echo "installing dev dependencies"
npm i --save-dev @types/node @types/express @types/cors @types/morgan @types/jest @types/supertest @types/bcryptjs @types/jsonwebtoken typescript nodemon ts-node

# add scripts
echo "adding scripts to package.json"
npm pkg set scripts.add:module="./add-module.sh"
npm pkg set scripts.prebuild="tsc --noEmit"
npm pkg set scripts.build="tsc"
npm pkg set scripts.test="jest"
npm pkg set scripts.watch="nodemon src/index.ts"
npm pkg set scripts.dev="docker compose -f docker-compose.dev.yml up"
npm pkg set scripts.postdev="docker compose -f docker-compose.dev.yml down -v"

cp -R templates/base/ .