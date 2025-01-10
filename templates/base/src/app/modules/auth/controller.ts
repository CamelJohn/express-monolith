import { type RequestHandler } from 'express';
import { type LoginRequestHandler, type RegisterRequestHandler } from './interfaces';
import service from './service';

const register: RegisterRequestHandler = async (req, _, next) => {
    try {
        await service.register(req.body);
    } catch (error) {
        next(error);
    }
};
const login: LoginRequestHandler = async (req, _, next) => {
    try {
        await service.login(req.body);
    } catch (error) {
        next(error);
    }
};
const logout: RequestHandler = async (req, _, next) => {
    try {
        await service.logout(req.headers.authorization);
    } catch (error) {
        next(error);
    }
};
const me: RequestHandler = async (req, _, next) => {
    try {
        await service.me(req.headers.authorization);
    } catch (error) {
        next(error);
    }
};

const controller = {
    register,
    login,
    logout,
    me,
};

export default controller;
