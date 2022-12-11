import { Injectable } from "@nestjs/common";
import { PictureRepository } from "src/data/picture/picture.repository";
import { PictureDto } from "./picture.dto";




@Injectable()
export class PictureService{

    constructor(private readonly pictureRepository: PictureRepository){

    }

    async addPicture(createPicture: PictureDto){
        return this.pictureRepository.create(createPicture);
    }

    async deletePicture(pictureId: string){
        return this.pictureRepository.deletePicture(pictureId);
    }
}