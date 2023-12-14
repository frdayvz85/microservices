import jwt from 'jsonwebtoken';
import environment from './environment';

const generateTokens = async (user: any, expiresIn: string) => {
    try {
        console.log({ user });
        const payload = {
            user: {
                _id: user._id,
            },
        };
        const accessToken = jwt.sign(payload, environment.accessToken, { expiresIn: expiresIn });

        return Promise.resolve({ accessToken });
    } catch (err) {
        return Promise.reject(err);
    }
};

export default generateTokens;