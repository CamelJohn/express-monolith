import { Router } from 'express';
import auth_routes from './modules/auth';
import user_routes from './modules/user';
import token_routes from './modules/token';
import password_routes from './modules/password';

const main_routes = Router();

main_routes.use('/auth', auth_routes);
main_routes.use('/user', token_routes);
main_routes.use('/token', user_routes);
main_routes.use('/password', password_routes);

export default main_routes;
