import { PictureWO } from "@Controllers/wo/picture.wo";
import {
    Body,
    Controller,
    Get,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { PictureService } from "@Services/pictures/pictures.service";
import { diskStorage } from "multer";
import { PicturesUploadHelper } from "@Controllers/pictures/helpers/pictures.upload.helper";
import { PicturesMapper } from "@Controllers/mappers/pictures/pictures.mapper";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";

@Controller("pictures")
export class PicturesController {
    constructor(
        private readonly pictureSercice: PictureService,
        private readonly picturesMapper: PicturesMapper
    ) {}

    @Get()
    hello() {
        return "hello world";
    }

    @Post()
    @UseInterceptors(
        FileInterceptor("image", {
            storage: diskStorage({
                destination: "./local-storage/pictures",
                filename: PicturesUploadHelper.editFileName,
            }),
            fileFilter: PicturesUploadHelper.imageFileFilter,
        })
    )
    async addPicture(
        @Body() pictureWO: PictureWO,
        @UploadedFile() file: Express.Multer.File
    ): Promise<PictureWO> {

        const pictureFileUrl = "/local-storage/pictures/" + file.filename;

        const pictureResponseDTO : PictureResponseDTO =
            this.pictureSercice.addPicture(
                this.picturesMapper.mapPictureWOToPictureDTO(
                    pictureWO,
                    pictureFileUrl
                )
            );

        return this.picturesMapper.mapPictureResponseDTOToPictureWO(
            pictureResponseDTO
        );
    }
}
