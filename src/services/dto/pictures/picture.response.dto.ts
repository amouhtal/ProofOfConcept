import { AutoMap } from "@automapper/classes";


export class PictureResponseDTO{
    @AutoMap()
    identifier: string;
    
    @AutoMap()
    id: string;

    @AutoMap()
    date: Date;
}