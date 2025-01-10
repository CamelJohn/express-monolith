import { Request } from 'express';

export enum TokenTypeEnum {
    ACCESS = 'access',
    IDENTITY = 'identity'
}

export type AuthHeader = Request['headers']['authorization'];