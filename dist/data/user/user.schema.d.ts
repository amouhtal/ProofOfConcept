import mongoose, { Document } from 'mongoose';
import { Picture } from "../picture/picture.schema";
export type UserDocument = User & Document;
export declare class User {
    userId: string;
    email: string;
    age: number;
    favoriteFoods: string[];
    pictures: Picture[];
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User>;
