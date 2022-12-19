"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersControllerModule = void 0;
const common_1 = require("@nestjs/common");
const services_module_1 = require("../../services/services.module");
const users_controller_1 = require("./users.controller");
let UsersControllerModule = class UsersControllerModule {
};
UsersControllerModule = __decorate([
    (0, common_1.Module)({
        imports: [services_module_1.serviceModule,],
        controllers: [users_controller_1.UsersController],
        providers: [],
    })
], UsersControllerModule);
exports.UsersControllerModule = UsersControllerModule;
//# sourceMappingURL=users.controller.module.js.map