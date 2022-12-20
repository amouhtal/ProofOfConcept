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
exports.PicturesController = void 0;
const picture_wo_1 = require("../wo/picture.wo");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const pictures_service_1 = require("../../services/pictures/pictures.service");
const multer_1 = require("multer");
const pictures_upload_helper_1 = require("./helpers/pictures.upload.helper");
const pictures_mapper_1 = require("../mappers/pictures/pictures.mapper");
let PicturesController = class PicturesController {
    constructor(pictureSercice, picturesMapper) {
        this.pictureSercice = pictureSercice;
        this.picturesMapper = picturesMapper;
    }
    hello() {
        return "hello world";
    }
    async addPicture(pictureWO, file) {
        const pictureFileUrl = "/local-storage/pictures/" + file.filename;
        const pictureResponseDTO = this.pictureSercice.addPicture(this.picturesMapper.mapPictureWOToPictureDTO(pictureWO, pictureFileUrl));
        return this.picturesMapper.mapPictureResponseDTOToPictureWO(pictureResponseDTO);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PicturesController.prototype, "hello", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("image", {
        storage: (0, multer_1.diskStorage)({
            destination: "./local-storage/pictures",
            filename: pictures_upload_helper_1.PicturesUploadHelper.editFileName,
        }),
        fileFilter: pictures_upload_helper_1.PicturesUploadHelper.imageFileFilter,
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [picture_wo_1.PictureWO, Object]),
    __metadata("design:returntype", Promise)
], PicturesController.prototype, "addPicture", null);
PicturesController = __decorate([
    (0, common_1.Controller)("pictures"),
    __metadata("design:paramtypes", [pictures_service_1.PictureService,
        pictures_mapper_1.PicturesMapper])
], PicturesController);
exports.PicturesController = PicturesController;
//# sourceMappingURL=pictures.controller.js.map