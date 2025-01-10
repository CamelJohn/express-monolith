import 'reflect-metadata';
import http from 'node:http';
import web_app from './app';
import AppDataSource from './app/database';

(async () => {
    try {
        await AppDataSource.initialize();

        const PORT = parseInt(process.env.PORT || '8080', 10);

        const server = http.createServer(web_app);

        server.listen(PORT, () => console.info('Server started listening on port', PORT));
    } catch (error) {
        console.error({ error });
        await AppDataSource.destroy();
        process.exit(1);
    }
})();
