import { AuthHeader, LoginDto, RegisterDto } from './interfaces';

const register = async (_dto: RegisterDto) => {
    try {
    } catch (error) {}
};
const login = async (_dto: LoginDto) => {
    try {
    } catch (error) {}
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
