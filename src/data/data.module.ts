import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { PictureRepository } from "./picture/picture.repository";
import { Picture, PictureSchema } from "./picture/picture.model";
import { UsersRepository } from "./user/user.repository";
import { User, UserSchema } from "./user/user.model";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name,
    schema: UserSchema
    },{name: Picture.name, schema: PictureSchema}])],
    providers: [UsersRepository, PictureRepository],
    exports: [UsersRepository, PictureRepository]
})

export class DataModule {

}