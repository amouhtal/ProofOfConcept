import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PictureDto } from "src/services/picture/picture.dto";
import { Picture, PictureDocument } from "./picture.model";





@Injectable()
export class PictureRepository {

    constructor(@InjectModel(Picture.name) private pictureModel: Model<PictureDocument>){
    }

    async create(picture: PictureDto): Promise<Picture> {
        const newPicture = new this.pictureModel(picture);
        return newPicture.save();
    }

    async deletePicture(pictureId: string) {
        console.log(pictureId);
        const filter  = { _id: pictureId };

    const deleted = await this.pictureModel.deleteOne(filter);
    }
}

