import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "src/data/user/user.schema";
import { userDto } from "src/services/gestion-users/user.dto";
import { UsersService } from "src/services/gestion-users/users.service";

@Controller()
export class UsersController {
    constructor(private readonly usersSrvice: UsersService) {

    }

    @Get(':userId')
    async getUser(@Param('userId') userId: string): Promise<User> {
        return this.usersSrvice.getUserById(userId);
    }

    @Post()
    async createUser(@Body() createUserDto: userDto): Promise<User> {
        return this.usersSrvice.createUser(createUserDto.email, createUserDto.age);
    }
}

