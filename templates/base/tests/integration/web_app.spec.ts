import supertest from 'supertest';
import web_app from '../../src/app';

describe('Express app routes', () => {
    it('health check endpoints should return status 200', async () => {
        const response_basic = await supertest(web_app).get('/health');
        const response_readiness = await supertest(web_app).get('/health/ready');
        const response_liveness = await supertest(web_app).get('/health/live');

        expect(response_basic.status).toBe(200);
        expect(response_readiness.status).toBe(200);
        expect(response_liveness.status).toBe(200);
    });

    it('catch all route should return status 404', async () => {
        const response = await supertest(web_app).get('/unavailable-route');
        expect(response.status).toBe(404);
    });
});
