import { Router } from 'express';
import controller from './controller';
import { check_for_auth_header } from '../token/middleware';

const auth_routes = Router();

auth_routes.post('register', controller.register);

auth_routes.post('login', controller.login);

auth_routes.get('logout', check_for_auth_header, controller.logout);

auth_routes.get('me', check_for_auth_header, controller.me);

export default auth_routes;
