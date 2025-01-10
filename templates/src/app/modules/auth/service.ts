import { AuthHeader, LoginDto, RegisterDto } from './interfaces';

const register = async (dto: RegisterDto) => {
    try {
    } catch (error) {}
};
const login = async (dto: LoginDto) => {
    try {
    } catch (error) {}
};
const logout = async (auth_header: AuthHeader) => {
    try {
    } catch (error) {}
};
const me = async (auth_header: AuthHeader) => {
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
