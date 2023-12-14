import { logInBodyValidation, signUpBodyValidation } from '@src/utils/validation';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from './User';
import generateTokens from '../../config/generateToken'



export const register = async (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    try {
        const { error } = signUpBodyValidation(req.body);
        if (error) return res.status(400).json({ error: true, message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).json({ error: true, message: 'User with given email already exist' });

        const salt = await bcrypt.genSalt(Number(10));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        const fLetter = req.body.firstName[0]
        const lLetter = req.body.lastName[0]
        const generatedProfilePic = `https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${fLetter + lLetter}`
        const newUser = await User.create({ ...req.body, profilePic: generatedProfilePic, password: hashPassword });
        const token = generateTokens(newUser, '180 days');

        const { firstName, lastName } = newUser;
        res.status(201).json({
            firstName,
            lastName,
            token,
            message: `User created with ${newUser.email}`,
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    // #swagger.tags = ['Auth']
    try {
        const { error } = logInBodyValidation(req.body);
        if (error) return res.status(400).json({ error: true, message: error.details[0].message });

        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json({ error: true, message: "This email doesn't registred" });

        const verifiedPassword = await bcrypt.compare(req.body.password, user.password);
        if (!verifiedPassword) return res.status(401).json({ error: true, message: 'Your password is wrong' });

        const { accessToken } = await generateTokens(user, '24h');

        res.status(200).json({
            error: false,
            accessToken,
            message: 'Logged in sucessfully',
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};


export const getUsers = async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    try {
        const users = await User.find({})
        res.status(200).json({ error: false, users });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
};

export const getUser = async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    try {
        const user = await User.findOne({ _id: req.params.id })
        if (!user) return res.status(404).json({ error: true, message: "User not found with specified ID" });
        res.status(200).json({ error: false, user });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
};



export const deleteUser = async (req: Request, res: Response) => {
    // #swagger.tags = ['Users']
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        console.log(deletedUser);
        res.status(200).json('Deleted');
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
};
