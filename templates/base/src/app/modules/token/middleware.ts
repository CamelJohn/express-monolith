import { type RequestHandler } from 'express';
import { auth_header_validation_schema } from './validation.schema';
import createHttpError from 'http-errors';

export const check_for_auth_header: RequestHandler = (req, __, next) => {
    try {
        const is_valid = auth_header_validation_schema.validate(req.headers);

        if (!is_valid.error) {
            return next();
        }

        throw new createHttpError.Unauthorized(is_valid.error.message);
    } catch (error) {
        next(error);
    }
};
