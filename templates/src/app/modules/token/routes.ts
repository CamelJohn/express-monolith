import { Router } from 'express';
import controller from './controller';
import { check_for_auth_header } from './middleware';

const token_routes = Router();

token_routes.post('generate-access', check_for_auth_header, controller.generate_access);

token_routes.post('generate-identity', check_for_auth_header, controller.generate_identity);

token_routes.get('refresh-access', check_for_auth_header, controller.refresh_access);

token_routes.get('refresh-identity', check_for_auth_header, controller.refresh_identity);

export default token_routes;
