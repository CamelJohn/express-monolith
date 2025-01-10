import { RequestHandler } from 'express';
import service from './service';

const generate_access: RequestHandler = async (_, __, next) => {
    try {
        await service.generate_access();
    } catch (error) {
        next(error);
    }
};
const generate_identity: RequestHandler = async (_, __, next) => {
    try {
        await service.generate_identity();
    } catch (error) {
        next(error);
    }
};
const refresh_access: RequestHandler = async (_, __, next) => {
    try {
        await service.refresh_access();
    } catch (error) {
        next(error);
    }
};
const refresh_identity: RequestHandler = async (_, __, next) => {
    try {
        await service.refresh_identity();
    } catch (error) {
        next(error);
    }
};

const controller = {
    generate_access,
    generate_identity,
    refresh_access,
    refresh_identity,
};

export default controller;
