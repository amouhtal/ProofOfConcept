import { User } from "src/data/user/user.schema";
import { userDto } from "src/services/gestion-users/user.dto";
import { UsersService } from "src/services/gestion-users/users.service";
export declare class UsersController {
    private readonly usersSrvice;
    constructor(usersSrvice: UsersService);
    getUser(userId: string): Promise<User>;
    createUser(createUserDto: userDto): Promise<User>;
}
