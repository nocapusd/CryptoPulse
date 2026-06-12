import Joi from 'joi';

export const schema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': 'invalid email',
        'string.empty': 'Email is required',
    }),

    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d).{8,64}$/).required().messages({
        'string.pattern.base': 'Password must contain at least one letter and one number',
        'string.empty': 'Password is required',
    })
})