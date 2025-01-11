import { Router } from 'express';
import Controller from './controller';

const controller = new Controller();

const token_routes = Router();

export default token_routes;
