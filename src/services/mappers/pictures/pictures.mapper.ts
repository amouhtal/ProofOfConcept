import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PicturePOJO } from "@Data/models/pictures/pictures.pojo.model";
import { Injectable } from "@nestjs/common";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";

@Injectable()
export class PictureServiceMapper {
    constructor(@InjectMapper() private readonly classMapper: Mapper) {}

    mapPictureDTOToPicturePOJO(pictureDTO: PictureDTO): PicturePOJO {
        return this.classMapper.map(pictureDTO, PictureDTO, PicturePOJO);
    }

    mapPicturePOJOToPictureResponseDTO(picturePOJO: PicturePOJO): PictureResponseDTO{
        return this.classMapper.map(picturePOJO, PicturePOJO, PictureResponseDTO)
    }
}
