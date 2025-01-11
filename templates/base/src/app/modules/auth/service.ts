import createHttpError from 'http-errors';
import user_service from '../user/service';
import { AuthHeader, LoginDto, RegisterDto } from './interfaces';
import password_service from '../password/service';

const register = async (dto: RegisterDto) => {
    try {
        const user_exists = await user_service.findOneByEmail(dto.email);

        if (!!user_exists) {
            throw new createHttpError.Conflict(`user with email ${dto.email} already exists.`);
        }

        const user = await user_service.create(dto);

        return user;
    } catch (error) {
        console.error({ error });
        throw error;
    }
};
const login = async (dto: LoginDto) => {
    try {
        const password = await user_service.getPassword(dto.email);

        if (!password) {
            throw new createHttpError.Unauthorized('invalid credentials');
        }

        const is_logged_in = await password_service.validate_password({
            clear_text_password: dto.password,
            hashed_password: password,
        });

        return is_logged_in;
    } catch (error) {
        console.error({ error });
        throw error;
    }
};
const logout = async (_auth_header: AuthHeader) => {
    try {
    } catch (error) {}
};
const me = async (_auth_header: AuthHeader) => {
    try {
    } catch (error) {}
};

const service = {
    register,
    login,
    logout,
    me,
};

export default service;
