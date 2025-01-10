import express from 'express';
import middleware from './middleware.base';
import main_routes from './main.routes';
import health_check_routes from './health-check.routes';

const web_app = express();

web_app.use(middleware.base);

web_app.use('/health/', health_check_routes);

web_app.use('/api/v1/', main_routes);

web_app.use('*', middleware.catch_all);

web_app.use(middleware.error_handler);

export default web_app;
