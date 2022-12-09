import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Picture, PictureDocument } from "./picture.schema";





@Injectable()
export class PictureRepository{

    constructor(@InjectModel(Picture.name) private pictureModel: Model<PictureDocument>){
    }


}

