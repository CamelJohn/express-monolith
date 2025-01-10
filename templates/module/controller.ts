import { RequestHandler } from 'express';
import service from './service';

const example: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }

const controller = {
    example,
};

export default controller;
