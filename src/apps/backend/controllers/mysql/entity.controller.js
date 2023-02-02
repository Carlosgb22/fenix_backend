"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const device_interactors_1 = require("../../../../contexts/device/application/interactors/device.interactors");
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
function getAll(req, res) {
    (0, device_interactors_1.getAllEx)().then((devices) => res.json(devices)).catch((err) => loggerService_1.default.error("Error displaying devices"));
}
exports.getAll = getAll;
//TODO EL ERROR ESTA AQUI
