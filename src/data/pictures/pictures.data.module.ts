import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PictureRepository } from "./pictures.repository";
import {
    PicturePOJO,
    PictureSchema,
} from "../models/pictures/pictures.pojo.model";

@Module({
    imports: [
        MongooseModule.forFeature([
            ,
            { name: PicturePOJO.name, schema: PictureSchema },
        ]),
    ],
    providers: [PictureRepository],
    exports: [PictureRepository],
})
export class PicturesDataModule {}
