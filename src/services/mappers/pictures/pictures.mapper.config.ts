import { createMap, Mapper } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { PictureWO } from "@Controllers/wo/picture.wo";
import { PicturePOJO } from "@Data/models/pictures/pictures.pojo.model";
import { Injectable } from "@nestjs/common";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";

@Injectable()
export class PictureServiceMapperProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, PictureDTO, PicturePOJO);

            createMap(mapper, PicturePOJO, PictureResponseDTO);
        };
    }
}
