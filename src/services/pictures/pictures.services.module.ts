import { PicturesDataModule } from "@Data/pictures/pictures.data.module";
import { Module } from "@nestjs/common";
import { PictureServiceMapper } from "@Services/mappers/pictures/pictures.mapper";
import { PictureServiceMapperProfile } from "@Services/mappers/pictures/pictures.mapper.config";
import { PictureService } from "./pictures.service";

@Module({
    imports: [PicturesDataModule],
    providers: [
        PictureService,
        PictureServiceMapper,
        PictureServiceMapperProfile,
    ],
    exports: [PictureService],
})
export class PicturesServiceModule {}
