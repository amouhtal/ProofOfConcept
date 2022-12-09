import { UsersRepository } from "src/data/user/user.repository";
import { User } from "src/data/user/user.model";
import { addPictureDto } from "./user.dto";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(email: string, age: number): Promise<User>;
    getUserById(userId: string): Promise<User>;
    addPicture(addPic: addPictureDto): Promise<import("../../data/picture/picture.model").Picture & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    removePicture(removePic: addPictureDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getPictures(userId: string): Promise<import("../../data/picture/picture.model").Picture[]>;
}
