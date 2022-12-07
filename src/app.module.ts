import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { controllerModule } from './controller/controller.module'; 
import { serviceModule } from './services/services.module';

@Module({
  imports: [controllerModule, serviceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
