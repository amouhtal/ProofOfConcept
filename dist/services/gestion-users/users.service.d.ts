import { UsersRepository } from "src/data/user/user.repository";
import { User } from "src/data/user/user.model";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    createUser(email: string, age: number): Promise<User>;
    getUserById(userId: string): Promise<User>;
}
