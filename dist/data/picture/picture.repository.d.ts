import { Model } from "mongoose";
import { PictureDto } from "src/services/picture/picture.dto";
import { Picture, PictureDocument } from "./picture.model";
export declare class PictureRepository {
    private pictureModel;
    constructor(pictureModel: Model<PictureDocument>);
    create(picture: PictureDto): Promise<Picture>;
}
