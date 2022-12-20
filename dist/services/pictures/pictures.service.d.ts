import { PictureRepository } from "@Data/pictures/pictures.repository";
import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";
import { PictureServiceMapper } from "@Services/mappers/pictures/pictures.mapper";
export declare class PictureService {
    private readonly pictureRepository;
    private readonly pictureServiceMapper;
    constructor(pictureRepository: PictureRepository, pictureServiceMapper: PictureServiceMapper);
    addPicture(pictureDTO: PictureDTO): PictureResponseDTO;
    deletePicture(pictureId: string): Promise<void>;
}
