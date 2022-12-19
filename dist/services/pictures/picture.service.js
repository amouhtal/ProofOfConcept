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
exports.PictureService = void 0;
const common_1 = require("@nestjs/common");
const picture_repository_1 = require("../../data/picture/picture.repository");
let PictureService = class PictureService {
    constructor(pictureRepository) {
        this.pictureRepository = pictureRepository;
    }
    async addPicture(createPicture) {
        return this.pictureRepository.create(createPicture);
    }
    async deletePicture(pictureId) {
        return this.pictureRepository.deletePicture(pictureId);
    }
};
PictureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [picture_repository_1.PictureRepository])
], PictureService);
exports.PictureService = PictureService;
//# sourceMappingURL=picture.service.js.map