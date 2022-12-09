import mongoose, { Document } from "mongoose";
import { User } from "../user/user.model";
export type PictureDocument = Picture & Document;
export declare class Picture {
    picId: string;
    path: string;
    user: User;
}
export declare const PictureSchema: mongoose.Schema<Picture, mongoose.Model<Picture, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Picture>;
