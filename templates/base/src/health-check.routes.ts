import { type RequestHandler, Router } from 'express';

enum HealthCheckStatusEnum {
    HEALTHY = 'healthy',
    READY = 'ready',
    NOT_READY = 'not ready',
    ALIVE = 'alive',
    UNAVAILABLE = 'unhealthy',
}

const basic_healh_check: RequestHandler = (_, res, __) => {
    // tbd return an array of details where each record is the service name (e.g database, and status: 'up' / 'down')
    res.status(200).json({ status: HealthCheckStatusEnum.HEALTHY });
};
const readiness_healh_check: RequestHandler = (_, res, __) => {
    // tbd return an array of details where each record is the service name (e.g database, and status: 'up' / 'down')
    res.status(200).json({ status: HealthCheckStatusEnum.READY });
};
const liveness_healh_check: RequestHandler = (_, res, __) => {
    // tbd return an array of details where each record is the service name (e.g database, and status: 'up' / 'down')
    res.status(200).json({ status: HealthCheckStatusEnum.ALIVE });
};

const health_check_routes = Router();

health_check_routes.get('/', basic_healh_check);
health_check_routes.get('/ready', readiness_healh_check);
health_check_routes.get('/live', liveness_healh_check);

export default health_check_routes;