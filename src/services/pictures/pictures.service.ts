import { Injectable } from "@nestjs/common";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";




@Injectable()
export class PictureService{

    constructor(){

    }
    
    addPicture(pictureDTO: PictureDTO): PictureResponseDTO{
        console.log(pictureDTO);
        
        return {identifier: pictureDTO.identifier, date: pictureDTO.date, id: '10'};
        // return this.pictureRepository.create(pictureDTO);
    }

    async deletePicture(pictureId: string){
        // return this.pictureRepository.deletePicture(pictureId);
    }
}