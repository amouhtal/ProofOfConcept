/// <reference types="multer" />
import { PictureWO } from "@Controllers/wo/picture.wo";
import { PictureService } from "@Services/pictures/pictures.service";
import { PicturesMapper } from "@Controllers/mappers/pictures/pictures.mapper";
export declare class PicturesController {
    private readonly pictureSercice;
    private readonly picturesMapper;
    constructor(pictureSercice: PictureService, picturesMapper: PicturesMapper);
    hello(): string;
    addPicture(pictureWO: PictureWO, file: Express.Multer.File): Promise<PictureWO>;
}
