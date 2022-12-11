import { User } from "src/data/user/user.model";
import { addPictureDto, userDto } from "src/services/users/user.dto";
import { UsersService } from "src/services/users/users.service";
export declare class UsersController {
    private readonly usersSrvice;
    constructor(usersSrvice: UsersService);
    getUsers(): Promise<User[]>;
    createUser(createUserDto: userDto): Promise<User>;
    addPicture(pic: addPictureDto): Promise<import("../../data/picture/picture.model").Picture & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removePicture(pic: addPictureDto): Promise<void | (User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })>;
    getPictures(userId: string): Promise<import("../../data/picture/picture.model").Picture[]>;
    getUser(userId: string): Promise<User>;
}
