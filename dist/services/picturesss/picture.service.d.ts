import { PictureRepository } from "src/data/picture/picture.repository";
import { PictureDto } from "./pictures.dto";
export declare class PictureService {
    private readonly pictureRepository;
    constructor(pictureRepository: PictureRepository);
    addPicture(createPicture: PictureDto): Promise<import("../../data/picture/picture.model").Picture>;
    deletePicture(pictureId: string): Promise<void>;
}
