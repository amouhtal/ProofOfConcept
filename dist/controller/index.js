"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerModules = void 0;
const pictures_controller_module_1 = require("./pictures/pictures.controller.module");
const users_controller_module_1 = require("./users/users.controller.module");
let controllerModules = [pictures_controller_module_1.PicturesControllerModule, users_controller_module_1.UsersControllerModule];
exports.controllerModules = controllerModules;
//# sourceMappingURL=index.js.map