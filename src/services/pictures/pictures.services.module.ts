import { Module } from '@nestjs/common';
import { PictureService } from './pictures.service';

@Module({
    imports: [],
  providers: [PictureService],
  exports: [PictureService]

})
export class PicturesServiceModule {}
