"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const picture_repository_1 = require("./pictures/picture.repository");
const picture_pojo_model_1 = require("./models/pictures/picture.pojo.model");
let DataModule = class DataModule {
};
DataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                ,
                { name: picture_pojo_model_1.PicturePOJO.name, schema: picture_pojo_model_1.PictureSchema },
            ]),
        ],
        providers: [picture_repository_1.PictureRepository],
        exports: [picture_repository_1.PictureRepository],
    })
], DataModule);
exports.DataModule = DataModule;
//# sourceMappingURL=data.module.js.map