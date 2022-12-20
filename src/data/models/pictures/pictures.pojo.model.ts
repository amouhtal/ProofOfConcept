import { AutoMap } from "@automapper/classes";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PictureDocument = PicturePOJO & Document;

@Schema()
export class PicturePOJO {

    @AutoMap()
    @Prop()
    pictureFileUrl:  string;
    
    @AutoMap()
    @Prop()
    identifier: string;

    @AutoMap()
    @Prop()
    date: Date;

    // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User' })
    // user: User
}

export const PictureSchema = SchemaFactory.createForClass(PicturePOJO)
