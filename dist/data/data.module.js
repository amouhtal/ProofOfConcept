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
const picture_schema_1 = require("./picture/picture.schema");
const user_repository_1 = require("./user/user.repository");
const user_schema_1 = require("./user/user.schema");
let DataModule = class DataModule {
};
DataModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name,
                    schema: user_schema_1.UserSchema
                }, { name: picture_schema_1.Picture.name, schema: picture_schema_1.PictureSchema }])],
        providers: [user_repository_1.UsersRepository],
        exports: [user_repository_1.UsersRepository]
    })
], DataModule);
exports.DataModule = DataModule;
//# sourceMappingURL=data.module.js.map