import mongoose, { Document } from "mongoose";
export type PictureDocument = Picture & Document;
export declare class Picture {
    picId: string;
    path: string;
}
export declare const PictureSchema: mongoose.Schema<Picture, mongoose.Model<Picture, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Picture>;
