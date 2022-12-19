import { Module } from "@nestjs/common";
import { MulterModule } from "@nestjs/platform-express";
import { PicturesServiceModule } from "@Services/pictures/pictures.services.module";
import { PicturesController } from "@Controllers/pictures/pictures.controller";
import { PictureMapperProfile } from "@Controllers/mappers/pictures/pictures.mapper.config";
import { PicturesMapper } from "@Controllers/mappers/pictures/pictures.mapper";

@Module({
    imports: [
        PicturesServiceModule,
        MulterModule.register({
            dest: "./files",
        }),
    ],
    controllers: [PicturesController],
    providers: [PictureMapperProfile, PicturesMapper],
})
export class PicturesControllerModule {}
