import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { User } from "src/data/user/user.model";
import { addPictureDto, userDto } from "src/services/users/user.dto";
import { UsersService } from "src/services/users/users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersSrvice: UsersService) {

    }

  
    
    @Post()
    async createUser(@Body() createUserDto: userDto): Promise<User> {
        return this.usersSrvice.createUser(createUserDto.email, createUserDto.age);
    }
    
    @Post('addPicture')
    async addPicture(@Body() pic: addPictureDto){
        return this.usersSrvice.addPicture(pic);
    }

    @Post('removePicture')
    async removePicture(@Body() pic: addPictureDto){
        console.log(pic);
        
        return this.usersSrvice.removePicture(pic);
    }

    @Get('pictures')
    async getPictures(@Body() userId: string){
        return this.usersSrvice.getPictures('6393311b7467e8a74d191144');
    }
    
    @Get(':userId')
    async getUser(@Param('userId') userId: string): Promise<User> {
        return this.usersSrvice.getUserById(userId);
    }
}

