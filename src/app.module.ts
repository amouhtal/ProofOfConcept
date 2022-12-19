import { classes } from "@automapper/classes";
import { AutomapperModule } from "@automapper/nestjs";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { controllerModules } from "./controllers/index";
import { servicesModules } from "./services";

@Module({
    imports: [
        AutomapperModule.forRoot({ strategyInitializer: classes() }),
        ...controllerModules,
        ...servicesModules,
        MongooseModule.forRoot(
            "mongodb+srv://root:root@cluster0.s3xtgdt.mongodb.net/?retryWrites=true&w=majority"
        ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
