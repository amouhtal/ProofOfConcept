import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Picture, PictureSchema } from "./picture/picture.schema";
import { UsersRepository } from "./user/user.repository";
import { User, UserSchema } from "./user/user.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: User.name,
    schema: UserSchema
    },{name: Picture.name, schema: PictureSchema}])],
    providers: [UsersRepository],
    exports: [UsersRepository]
})

export class DataModule {

}