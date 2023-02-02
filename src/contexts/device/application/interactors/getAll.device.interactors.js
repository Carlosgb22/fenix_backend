"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
function getAll(repo) {
    loggerService_1.default.info("Llega a getAll.device.interactors");
    return repo.getAll();
}
exports.default = getAll;
