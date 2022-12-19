import { Mapper } from "@automapper/core";
import { PictureWO } from "@Controllers/wo/picture.wo";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";
export declare class PicturesMapper {
    private readonly classMapper;
    constructor(classMapper: Mapper);
    mapPictureWOToPictureDTO(pictureWO: PictureWO, pictureFileUrl: string): PictureDTO;
    mapPictureResponseDTOToPictureWO(pictureResponseDTO: PictureResponseDTO): PictureWO;
}
