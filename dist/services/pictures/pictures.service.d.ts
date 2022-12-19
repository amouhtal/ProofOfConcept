import { PictureDTO } from "@Services/dto/pictures/picture.dto";
import { PictureResponseDTO } from "@Services/dto/pictures/picture.response.dto";
export declare class PictureService {
    constructor();
    addPicture(pictureDTO: PictureDTO): PictureResponseDTO;
    deletePicture(pictureId: string): Promise<void>;
}
