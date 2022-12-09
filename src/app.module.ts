import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { controllerModule } from './controller/controller.module'; 
import { serviceModule } from './services/services.module';

@Module({
  imports: [controllerModule, serviceModule, MongooseModule.forRoot('mongodb+srv://root1:root@cluster0.oihhogv.mongodb.net/db?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
