import { RequestHandler } from 'express';
import Service from './service';

class Controller {
    constructor(private service = new Service()) {}
    get: RequestHandler = async (req, res, next) => {
        try {
            await this.service.get();
        } catch (error) {
            next(error);
        }
    };
}

export default Controller;
