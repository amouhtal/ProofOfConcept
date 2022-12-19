import { Model } from "mongoose";
import { Picture, PictureDocument } from "./picture.model";
export declare class PictureRepository {
    private pictureModel;
    constructor(pictureModel: Model<PictureDocument>);
    create(picture: string): Promise<Picture>;
    deletePicture(pictureId: string): Promise<void>;
}
