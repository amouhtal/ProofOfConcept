"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceModule = void 0;
const common_1 = require("@nestjs/common");
const data_module_1 = require("../data/data.module");
const users_service_1 = require("./users/users.service");
const pictures_services_module_1 = require("./pictures/pictures.services.module");
let serviceModule = class serviceModule {
};
serviceModule = __decorate([
    (0, common_1.Module)({
        imports: [data_module_1.DataModule, pictures_services_module_1.PicturesModule],
        controllers: [],
        providers: [users_service_1.UsersService, PictureService],
        exports: [users_service_1.UsersService, PictureService],
    })
], serviceModule);
exports.serviceModule = serviceModule;
//# sourceMappingURL=services.module.js.map