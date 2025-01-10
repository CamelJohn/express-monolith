import { Router } from 'express';
import { check_for_auth_header } from '../token/middleware';

const auth_routes = Router();

auth_routes.get('forgot', check_for_auth_header);

auth_routes.put('update', check_for_auth_header);

export default auth_routes;