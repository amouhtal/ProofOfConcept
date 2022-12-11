import { FilterQuery, Model } from "mongoose";
import { addPictureDto } from "src/services/users/user.dto";
import { Picture, PictureDocument } from "../picture/picture.model";
import { User, UserDocument } from "./user.model";
export declare class UsersRepository {
    private userModel;
    private pictureModel;
    constructor(userModel: Model<UserDocument>, pictureModel: Model<PictureDocument>);
    findOne(userFilterQuery: FilterQuery<User>): Promise<User>;
    find(usersfilterQuery: FilterQuery<User>): Promise<User[]>;
    create(user: User): Promise<User>;
    findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>;
    addPicture(addPic: addPictureDto): Promise<Picture & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getPictures(userId: string): Promise<Picture[]>;
    removePicture(removePic: addPictureDto): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<User[]>;
}
