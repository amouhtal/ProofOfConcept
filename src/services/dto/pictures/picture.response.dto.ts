import { AutoMap } from "@automapper/classes";


export class PictureResponseDTO {
    @AutoMap()
    id: string;
 
    @AutoMap()
    identifier: string;

    @AutoMap()
    date: Date;
}