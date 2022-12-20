import { Model } from "mongoose";
import { PicturePOJO, PictureDocument } from "../models/pictures/picture.pojo.model";
export declare class PictureRepository {
    private pictureModel;
    constructor(pictureModel: Model<PictureDocument>);
    create(picturePOJO: PicturePOJO): Promise<PicturePOJO>;
}
