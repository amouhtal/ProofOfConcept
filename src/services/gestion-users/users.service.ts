import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/data/user/user.repository";
import { User } from "src/data/user/user.schema";
import { v4 as uuidv4 } from 'uuid';

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
}

