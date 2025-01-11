import { type RequestHandler } from 'express';
import { type LoginRequestHandler, type RegisterRequestHandler } from './interfaces';
import service from './service';

const register: RegisterRequestHandler = async (req, res, next) => {
    try {
        const user = await service.register(req.body);
        
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};
const login: LoginRequestHandler = async (req, res, next) => {
    try {
        const is_logged_in = await service.login(req.body);

        // TODO: send back a token

        res.status(200).json({ is_logged_in });
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
