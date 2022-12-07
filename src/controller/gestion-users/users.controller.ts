import { Controller, Get } from "@nestjs/common";
import { UsersService } from "src/services/gestion-users/users.service";

@Controller()
export class UsersController {
    constructor(private readonly usersSrvice: UsersService ){

    }

    @Get('users')
    getUsers(): string {
        return this.usersSrvice.getUsers();
    }

}

