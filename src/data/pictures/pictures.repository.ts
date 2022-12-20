import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
// import { PictureDto } from "@Services/pictures/picture.dto";
import {
    PicturePOJO,
    PictureDocument,
} from "../models/pictures/pictures.pojo.model";

@Injectable()
export class PictureRepository {
    constructor(
        @InjectModel(PicturePOJO.name)
        private pictureModel: Model<PictureDocument>
    ) {}

    async create(picturePOJO: PicturePOJO): Promise<PicturePOJO> {
        const newPicture = new this.pictureModel(picturePOJO);
        return await newPicture.save();
    }

    // async deletePicture(pictureId: string) {
    //     console.log(pictureId);
    //     const filter = { _id: pictureId };

    //     const deleted = await this.pictureModel.deleteOne(filter);
    // }
}
