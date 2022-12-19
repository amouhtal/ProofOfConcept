import { AutoMap } from "@automapper/classes";
import { IsNotEmpty } from "class-validator";

export class PictureWO {
    @AutoMap()
    id: string;

    @IsNotEmpty()
    @AutoMap()
    identifier: string;

    @AutoMap()
    date: Date;
}
