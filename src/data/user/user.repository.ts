import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { addPictureDto } from "src/services/users/user.dto";
import { Picture, PictureDocument } from "../picture/picture.model";
import { User, UserDocument } from "./user.model";

@Injectable()
export class UsersRepository{
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Picture.name) private pictureModel: Model<PictureDocument>){
    }

    async findOne(userFilterQuery: FilterQuery<User>): Promise<User>{
        return this.userModel.findOne(userFilterQuery);
    }

    async find(usersfilterQuery: FilterQuery<User>): Promise<User[]>{
        return this.userModel.find(usersfilterQuery);
    }

    async create(user: User): Promise<User>{
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async findOneAndUpdate(userFilterQuery: FilterQuery<User>, 
        user: Partial<User>):Promise<User>{
            return this.userModel.findOneAndUpdate(userFilterQuery, user);
        }

    async addPicture(addPic: addPictureDto){
         await this.userModel.findByIdAndUpdate(
            addPic.userId,
            { $addToSet: { pictures: addPic.pictureId } },
            { new: true },
          );
          return await this.pictureModel.findByIdAndUpdate(
            addPic.pictureId,
            { $addToSet: { user: addPic.userId }},
            { new: true },
          );
    } 
    
    async getPictures(userId: string){
        const picture = await this.userModel.findById(userId).populate('pictures');
        
        return picture.pictures;
    }

    async removePicture(removePic: addPictureDto) {
        return await this.userModel.findByIdAndUpdate(
            removePic.userId,
          { $pull: { pictures: removePic.pictureId } },
          { new: true },
        );
    }
}