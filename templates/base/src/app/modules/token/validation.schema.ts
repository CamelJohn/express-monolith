import Joi from 'joi';

export const auth_header_validation_schema = Joi.object({
    authorization: Joi.string().regex(/^Bearer\s\w{1,}$/),
});
