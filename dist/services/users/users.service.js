"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../../data/user/user.repository");
const uuid_1 = require("uuid");
const picture_repository_1 = require("../../data/picture/picture.repository");
let UsersService = class UsersService {
    constructor(usersRepository, pictureRepository) {
        this.usersRepository = usersRepository;
        this.pictureRepository = pictureRepository;
    }
    async createUser(email, age) {
        return this.usersRepository.create({
            userId: (0, uuid_1.v4)(),
            email,
            age,
            favoriteFoods: [],
            pictures: []
        });
    }
    async getUserById(userId) {
        return this.usersRepository.findOne({ userId });
    }
    async addPicture(addPic) {
        return this.usersRepository.addPicture(addPic);
    }
    async removePicture(removePic) {
        return this.pictureRepository.deletePicture(removePic.pictureId);
        return this.usersRepository.removePicture(removePic);
    }
    async getPictures(userId) {
        return this.usersRepository.getPictures(userId);
    }
    async getUsers() {
        return this.usersRepository.findAll();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UsersRepository,
        picture_repository_1.PictureRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map