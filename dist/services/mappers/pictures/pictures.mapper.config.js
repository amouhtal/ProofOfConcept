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
exports.PictureServiceMapperProfile = void 0;
const core_1 = require("@automapper/core");
const nestjs_1 = require("@automapper/nestjs");
const pictures_pojo_model_1 = require("../../../data/models/pictures/pictures.pojo.model");
const common_1 = require("@nestjs/common");
const picture_dto_1 = require("../../dto/pictures/picture.dto");
const picture_response_dto_1 = require("../../dto/pictures/picture.response.dto");
let PictureServiceMapperProfile = class PictureServiceMapperProfile extends nestjs_1.AutomapperProfile {
    constructor(mapper) {
        super(mapper);
    }
    get profile() {
        return (mapper) => {
            (0, core_1.createMap)(mapper, picture_dto_1.PictureDTO, pictures_pojo_model_1.PicturePOJO);
            (0, core_1.createMap)(mapper, pictures_pojo_model_1.PicturePOJO, picture_response_dto_1.PictureResponseDTO);
        };
    }
};
PictureServiceMapperProfile = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectMapper)()),
    __metadata("design:paramtypes", [Object])
], PictureServiceMapperProfile);
exports.PictureServiceMapperProfile = PictureServiceMapperProfile;
//# sourceMappingURL=pictures.mapper.config.js.map