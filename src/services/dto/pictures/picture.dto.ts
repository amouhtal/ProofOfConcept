import { AutoMap } from "@automapper/classes";

export class PictureDTO{

    @AutoMap()
    pictureFileUrl:  string;
    
    @AutoMap()
    identifier: string;

    @AutoMap()
    date: Date;
}