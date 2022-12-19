import { AutoMap } from "@automapper/classes";

export class PictureDTO{
    pictureFileUrl:  string;
    
    @AutoMap()
    identifier: string;
    @AutoMap()
    date: Date;
}