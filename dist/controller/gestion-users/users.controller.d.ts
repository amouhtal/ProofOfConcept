import { UsersService } from "src/services/gestion-users/users.service";
export declare class UsersController {
    private readonly usersSrvice;
    constructor(usersSrvice: UsersService);
    getUsers(): string;
}
