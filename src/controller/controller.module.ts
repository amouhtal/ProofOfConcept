import { Module } from '@nestjs/common';
import { serviceModule } from 'src/services/services.module';
import { UsersController } from './gestion-users/users.controller';


@Module({
    imports: [serviceModule],
    controllers: [UsersController],
    providers: [serviceModule],
})
export class controllerModule {}
