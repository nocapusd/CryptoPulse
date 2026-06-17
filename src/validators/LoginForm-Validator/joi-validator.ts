import Joi from 'joi';

export const schema = Joi.object({
    username: Joi.string().min(3).max(30).required().messages({
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username must be at most 30 characters long',
        'string.empty': 'Username is required',
    }),

    password: Joi.string().min(3).max(30).required().messages({
        'string.min': 'Password must be at least 3 characters long',
        'string.max': 'Password must be at most 30 characters long',
        'string.empty': 'Password is required',
    })
})