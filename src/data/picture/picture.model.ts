import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type PictureDocument = Picture & Document;

@Schema()
export class Picture {

    @Prop()
    picId: string

    @Prop()
    path: string

    // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
    // user: User
}

export const PictureSchema = SchemaFactory.createForClass(Picture)
