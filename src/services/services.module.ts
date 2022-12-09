import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { UsersRepository } from 'src/data/user/user.repository';
import { UsersService } from './gestion-users/users.service';
// import { UsersController } from './gestion-users/users.controller';


@Module({
    imports: [DataModule],
    controllers: [],
    providers: [UsersService],
    exports: [UsersService],
})
export class serviceModule {}
