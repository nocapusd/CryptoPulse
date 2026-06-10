import Joi from 'joi';

export const schema = Joi.object({
    name: Joi.string().min(3).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 3 characters',
    }),

    email: Joi.string().email().required().messages({
        'string.email': 'Invalid email',
        'string.empty': 'Email is required',
    }),

    password: Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d).{8,64}$/).required().messages({
        'string.pattern.base' : 'Password must contain at least one letter and one number',
        'string.empty': 'Password is required',
    }),

    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
        'any.only': 'Passwords do not match',
        'any.required': 'Confirm password is required',
    }),

});