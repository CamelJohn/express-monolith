import express, { type RequestHandler, type ErrorRequestHandler } from 'express';
import createHttpError from 'http-errors';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const catch_all: RequestHandler = (_, __, next) => next(new createHttpError.NotFound());

const error_handler: ErrorRequestHandler = (error, _, res, __) => {
    if (createHttpError.isHttpError(error)) {
        res.status(error.statusCode).json({
            message: error.message,
            status: error.statusCode,
            name: error.name,
        });
        return;
    }

    res.status(500).json({
        message: 'Something unexpected happend',
        status: 500,
        name: 'Internal Server Error',
    });
};

const base: RequestHandler[] = [
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    helmet(),
    morgan('dev'),
];

export default {
    catch_all,
    error_handler,
    base,
};
