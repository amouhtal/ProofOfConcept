import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, Types } from 'mongoose';
import { Picture } from "../picture/picture.schema";

export type UserDocument = User & Document;

@Schema()
export class User{

    @Prop()
    userId: string;

    @Prop()
    email: string;

    @Prop()
    age: number;

    @Prop([String])
    favoriteFoods: string[]

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Picture' })
    pictures: Picture[];
}

export const UserSchema = SchemaFactory.createForClass(User)


