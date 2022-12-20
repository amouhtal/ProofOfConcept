import { classes } from "@automapper/classes";
import { AutomapperModule } from "@automapper/nestjs";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PicturesServiceModule } from "@Services/pictures/pictures.services.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { controllerModules } from "./controllers/index";
import { dataModules } from "./data";
import { servicesModules } from "./services";

@Module({
    imports: [
        MongooseModule.forRoot(
            "mongodb+srv://root:root@cluster0.s3xtgdt.mongodb.net/?retryWrites=true&w=majority"
        ),
        AutomapperModule.forRoot({ strategyInitializer: classes() }),
        ...controllerModules,
        ...servicesModules,
        ...dataModules,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
