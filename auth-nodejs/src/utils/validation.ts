import Joi from 'joi';
import passwordComplexity from 'joi-password-complexity';

const signUpBodyValidation = (body: any) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
    });
    return schema.validate(body);
};

const logInBodyValidation = (body: any) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password'),
    });
    return schema.validate(body);
};


export { signUpBodyValidation, logInBodyValidation };