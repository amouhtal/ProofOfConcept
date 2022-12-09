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
exports.PictureController = void 0;
const common_1 = require("@nestjs/common");
const picture_dto_1 = require("../../services/picture/picture.dto");
const picture_service_1 = require("../../services/picture/picture.service");
let PictureController = class PictureController {
    constructor(pictureSercice) {
        this.pictureSercice = pictureSercice;
    }
    async addPicture(createPicture) {
        return this.pictureSercice.addPicture(createPicture);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [picture_dto_1.PictureDto]),
    __metadata("design:returntype", Promise)
], PictureController.prototype, "addPicture", null);
PictureController = __decorate([
    (0, common_1.Controller)('picture'),
    __metadata("design:paramtypes", [picture_service_1.PictureService])
], PictureController);
exports.PictureController = PictureController;
//# sourceMappingURL=pictures.controller.js.map