import { PictureDto } from "src/services/picture/picture.dto";
import { PictureService } from "src/services/picture/picture.service";
export declare class PicturesController {
    private readonly pictureSercice;
    constructor(pictureSercice: PictureService);
    addPicture(createPicture: PictureDto): Promise<import("../../data/picture/picture.model").Picture>;
}
