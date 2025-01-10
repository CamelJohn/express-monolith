import { type RequestHandler, type Request } from 'express';

export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto extends LoginDto {
    username: string;
}

export type AuthHeader = Request['headers']['authorization'];

export interface RegisterRequestHandler extends RequestHandler<{}, {}, RegisterDto> {}

export interface LoginRequestHandler extends RequestHandler<{}, {}, LoginDto> {}