rm -rf node_modules src tests .nvmrc Dockerfile* jest.config.ts tsconfig* nodemon* docker-compose.dev.yml .env requests.rest

npm uninstall --save express cors helmet morgan http-errors joi dotenv jest ts-jest supertest typeorm reflect-metadata pg jsonwebtoken bcryptjs
npm uninstall --save-dev @types/node @types/express @types/cors @types/morgan @types/jest @types/supertest @types/bcryptjs @types/jsonwebtoken typescript ts-node nodemon ts-node

npm pkg delete scripts.dev
npm pkg delete scripts.test
npm pkg delete scripts.build
npm pkg delete scripts.prebuild
npm pkg delete scripts.add:module
npm pkg delete scripts.watch
npm pkg delete scripts.postdev