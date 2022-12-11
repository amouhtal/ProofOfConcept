import { Body, Controller, Post } from "@nestjs/common";
import { PictureDto } from "src/services/picture/picture.dto";
import { PictureService } from "src/services/picture/picture.service";

@Controller('picture')
export class PictureController{
    constructor (private readonly pictureSercice: PictureService) {

    }

    @Post()
    async addPicture(@Body() createPicture: PictureDto){
        return this.pictureSercice.addPicture(createPicture);
    }

    // @Post('deletePicr')
    // async deletePicture(@Body('pictureId') pictureId: string){
    //     return this.pictureSercice.deletePicture(pictureId);
    // }
}
