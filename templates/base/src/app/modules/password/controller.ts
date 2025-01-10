import { type RequestHandler } from 'express';

const generate: RequestHandler = async (_, __, next) => {
    try {
    } catch (error) {
        next(error);
    }
};
const forgot: RequestHandler = async (_, __, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

const controller = {
    generate,
    forgot
};

export default controller;
