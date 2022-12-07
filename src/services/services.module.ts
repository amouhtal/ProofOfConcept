import { Module } from '@nestjs/common';
import { UsersService } from './gestion-users/users.service';
// import { UsersController } from './gestion-users/users.controller';


@Module({
    imports: [],
    controllers: [],
    providers: [UsersService],
    exports: [UsersService],
})
export class serviceModule {}
