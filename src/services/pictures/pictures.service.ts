import { PicturePOJO } from "@Data/models/pictures/pictures.pojo.model";
import { PictureRepository } from "@Data/pictures/pictures.repository";
import { Inject, Injectable } from "@nestjs/common";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";
import { PictureServiceMapper } from "@Services/mappers/pictures/pictures.mapper";

@Injectable()
export class PictureService {
    constructor(
        private readonly pictureRepository: PictureRepository,
        private readonly pictureServiceMapper: PictureServiceMapper
    ) {}

     addPicture(pictureDTO: PictureDTO): PictureResponseDTO {
        let pictureResponseDTO : PictureResponseDTO ;
        pictureDTO.date = new Date();
        this.pictureRepository.create(this.pictureServiceMapper.mapPictureDTOToPicturePOJO(pictureDTO))
        .then((picturePOJO : PicturePOJO) => {
            console.log(picturePOJO);
            pictureResponseDTO  = this.pictureServiceMapper.mapPicturePOJOToPictureResponseDTO(picturePOJO);
        });
        
        return pictureResponseDTO;
    }

    async deletePicture(pictureId: string) {
        // return this.pictureRepository.deletePicture(pictureId);
    }
}
