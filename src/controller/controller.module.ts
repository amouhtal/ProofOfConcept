import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { serviceModule } from 'src/services/services.module';
import { UsersController } from './users/users.controller';
import { PictureController } from './pictures/pictures.controller';


@Module({
    imports: [serviceModule],
    controllers: [UsersController, PictureController],
    providers: [],
})
export class controllerModule {}
