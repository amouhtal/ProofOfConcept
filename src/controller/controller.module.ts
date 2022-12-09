import { Module } from '@nestjs/common';
import { DataModule } from 'src/data/data.module';
import { serviceModule } from 'src/services/services.module';
import { UsersController } from './gestion-users/users.controller';


@Module({
    imports: [serviceModule],
    controllers: [UsersController],
    providers: [],
})
export class controllerModule {}
