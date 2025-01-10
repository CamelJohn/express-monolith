import { Router } from 'express';
import auth_routes from './modules/auth';

const main_routes = Router();

main_routes.use('/auth', auth_routes);

export default main_routes;
