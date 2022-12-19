import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PictureRepository } from "./picture/picture.repository";
import { Picture, PictureSchema } from "./picture/picture.model";

@Module({
    imports: [MongooseModule.forFeature([,{name: Picture.name, schema: PictureSchema}])],
    providers: [PictureRepository],
    exports: [ PictureRepository]
})

export class DataModule {

}