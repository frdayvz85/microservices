import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    profilePic: string;
}

export const UserSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: 'https://darybash.com/wp-content/uploads/2020/10/user-default-image.png',
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>('User', UserSchema);
export default User;