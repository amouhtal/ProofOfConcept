import { Mapper } from "@automapper/core";
import { PicturePOJO } from "@Data/models/pictures/pictures.pojo.model";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";
export declare class PictureServiceMapper {
    private readonly classMapper;
    constructor(classMapper: Mapper);
    mapPictureDTOToPicturePOJO(pictureDTO: PictureDTO): PicturePOJO;
    mapPicturePOJOToPictureResponseDTO(picturePOJO: PicturePOJO): PictureResponseDTO;
}
