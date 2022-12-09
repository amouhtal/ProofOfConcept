import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { UsersRepository } from 'src/data/user/user.repository';
import { UsersService } from './users/users.service';
import { PictureService } from './picture/picture.service';
// import { UsersController } from './gestion-users/users.controller';


@Module({
    imports: [DataModule],
    controllers: [],
    providers: [UsersService, PictureService],
    exports: [UsersService, PictureService],
})
export class serviceModule {}
