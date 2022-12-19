import { Mapper } from "@automapper/core";
import { InjectMapper } from "@automapper/nestjs";
import { PictureWO } from "@Controllers/wo/picture.wo";
import { Injectable } from "@nestjs/common";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";

@Injectable()
export class PicturesMapper {
    constructor(@InjectMapper() private readonly classMapper: Mapper) {}

    mapPictureWOToPictureDTO(
        pictureWO: PictureWO,
        pictureFileUrl: string
    ): PictureDTO {
        const pictureDTO = this.classMapper.map(
            pictureWO,
            PictureWO,
            PictureDTO
        );

        pictureDTO.pictureFileUrl = pictureFileUrl;
        return pictureDTO;
    }

    mapPictureResponseDTOToPictureWO(
        pictureResponseDTO: PictureResponseDTO
    ): PictureWO {
        return this.classMapper.map(
            pictureResponseDTO,
            PictureResponseDTO,
            PictureWO
        );
    }
}
