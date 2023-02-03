"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllEx = exports.getDeviceByIdEx = exports.updateDeviceEx = exports.deleteDeviceEx = exports.addDeviceEx = void 0;
const device_mysql_adapter_1 = __importDefault(require("../../infrastructure/dataSources/mysql/device.mysql.adapter"));
const add_device_interactors_1 = __importDefault(require("./add.device.interactors"));
const delete_device_interactors_1 = __importDefault(require("./delete.device.interactors"));
const update_device_interactors_1 = __importDefault(require("./update.device.interactors"));
const get_device_interactors_1 = __importDefault(require("./get.device.interactors"));
const getAll_device_interactors_1 = __importDefault(require("./getAll.device.interactors"));
const adapter = new device_mysql_adapter_1.default;
function addDeviceEx(dev) {
    return (0, add_device_interactors_1.default)(adapter)(dev);
}
exports.addDeviceEx = addDeviceEx;
function deleteDeviceEx(id) {
    return (0, delete_device_interactors_1.default)(adapter)(id);
}
exports.deleteDeviceEx = deleteDeviceEx;
function updateDeviceEx(dev) {
    return (0, update_device_interactors_1.default)(adapter)(dev);
}
exports.updateDeviceEx = updateDeviceEx;
function getDeviceByIdEx(id) {
    return (0, get_device_interactors_1.default)(adapter)(id);
}
exports.getDeviceByIdEx = getDeviceByIdEx;
function getAllEx() {
    return (0, getAll_device_interactors_1.default)(adapter);
}
exports.getAllEx = getAllEx;
