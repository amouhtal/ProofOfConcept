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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const picture_model_1 = require("../picture/picture.model");
const user_model_1 = require("./user.model");
let UsersRepository = class UsersRepository {
    constructor(userModel, pictureModel) {
        this.userModel = userModel;
        this.pictureModel = pictureModel;
    }
    async findOne(userFilterQuery) {
        return this.userModel.findOne(userFilterQuery);
    }
    async find(usersfilterQuery) {
        return this.userModel.find(usersfilterQuery);
    }
    async create(user) {
        const newUser = new this.userModel(user);
        return newUser.save();
    }
    async findOneAndUpdate(userFilterQuery, user) {
        return this.userModel.findOneAndUpdate(userFilterQuery, user);
    }
    async addPicture(addPic) {
        try {
            await this.userModel.findByIdAndUpdate(addPic.userId, { $addToSet: { pictures: addPic.pictureId } }, { new: true });
            console.log(addPic);
        }
        catch (e) {
        }
        return await this.pictureModel.findByIdAndUpdate(addPic.pictureId, { $addToSet: { user: addPic.userId } }, { new: true });
    }
    async getPictures(userId) {
        const picture = await this.userModel.findById(userId).populate('pictures');
        return picture.pictures;
    }
    async removePicture(removePic) {
        return await this.userModel.findByIdAndUpdate(removePic.userId, { $pull: { pictures: removePic.pictureId } }, { new: true });
    }
    async findAll() {
        return this.userModel.find().exec();
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __param(1, (0, mongoose_1.InjectModel)(picture_model_1.Picture.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=user.repository.js.map