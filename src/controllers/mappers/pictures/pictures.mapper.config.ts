import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import {
    createMap,
    forMember,
    ignore,
    mapFrom,
    Mapper,
    MappingProfile,
} from "@automapper/core";

import { Injectable } from "@nestjs/common";
import { PictureWO } from "@Controllers/wo/picture.wo";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";

@Injectable()
export class PictureMapperProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, PictureWO, PictureDTO);
            createMap(mapper, PictureResponseDTO, PictureWO);
        };
    }
}
