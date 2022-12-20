"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PicturesServiceModule = void 0;
const pictures_data_module_1 = require("../../data/pictures/pictures.data.module");
const common_1 = require("@nestjs/common");
const pictures_mapper_1 = require("../mappers/pictures/pictures.mapper");
const pictures_mapper_config_1 = require("../mappers/pictures/pictures.mapper.config");
const pictures_service_1 = require("./pictures.service");
let PicturesServiceModule = class PicturesServiceModule {
};
PicturesServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [pictures_data_module_1.PicturesDataModule],
        providers: [
            pictures_service_1.PictureService,
            pictures_mapper_1.PictureServiceMapper,
            pictures_mapper_config_1.PictureServiceMapperProfile,
        ],
        exports: [pictures_service_1.PictureService],
    })
], PicturesServiceModule);
exports.PicturesServiceModule = PicturesServiceModule;
//# sourceMappingURL=pictures.services.module.js.map