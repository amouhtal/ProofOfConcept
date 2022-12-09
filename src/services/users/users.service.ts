import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/data/user/user.repository";
import { User } from "src/data/user/user.model";
import { v4 as uuidv4 } from 'uuid';
import { addPictureDto } from "./user.dto";

@Injectable()
export class UsersService{

    constructor(private readonly usersRepository: UsersRepository) {}

    async createUser(email: string, age: number): Promise<User> {
        return this.usersRepository.create({
            userId: uuidv4(),
            email,
            age,
            favoriteFoods: [],
            pictures: []
        })
    }

    async getUserById(userId: string): Promise<User> {
        return this.usersRepository.findOne({ userId })
    }

    async addPicture(addPic: addPictureDto) {
        return this.usersRepository.addPicture(addPic);
    }
    
    async removePicture(removePic: addPictureDto) {
        return this.usersRepository.removePicture(removePic);
    }

    async getPictures(userId: string) {
        return this.usersRepository.getPictures(userId);

    }
}

