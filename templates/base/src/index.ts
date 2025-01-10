import 'reflect-metadata';
import dotenv from 'dotenv';
import http from 'node:http';
import web_app from './app';
import AppDataSource from './app/database';

dotenv.config();

(async () => {
    try {
        await AppDataSource.initialize();

        const PORT = parseInt(process.env.SERVER_PORT || '8080', 10);

        const server = http.createServer(web_app);

        server.listen(PORT, () => console.info('Server started listening on port', PORT));
    } catch (error) {
        console.error({ error });
        await AppDataSource.destroy();
        process.exit(1);
    }
})();
