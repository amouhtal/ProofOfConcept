import { Model } from "mongoose";
import { PictureDocument } from "./picture.schema";
export declare class PictureRepository {
    private pictureModel;
    constructor(pictureModel: Model<PictureDocument>);
}
