"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDevice = exports.addDevice = exports.deleteDevice = exports.getDeviceById = exports.getAll = void 0;
const device_interactors_1 = require("../../../../contexts/device/application/interactors/device.interactors");
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
function getAll(req, res) {
    (0, device_interactors_1.getAllEx)().then((devices) => res.json(devices)).catch((err) => loggerService_1.default.error("Error displaying devices " + err));
}
exports.getAll = getAll;
function getDeviceById(req, res) {
    (0, device_interactors_1.getDeviceByIdEx)(req.params.id).then((device) => res.json(device)).catch((err) => loggerService_1.default.error("Error displaying device with id= " + req.body + " " + err));
}
exports.getDeviceById = getDeviceById;
function deleteDevice(req, res) {
    (0, device_interactors_1.deleteDeviceEx)(req.params.id).then((bool) => res.json(bool)).catch((err) => loggerService_1.default.error("Error deleting device " + err));
}
exports.deleteDevice = deleteDevice;
function addDevice(req, res) {
    (0, device_interactors_1.addDeviceEx)(req.body).then((bool) => res.json(bool)).catch((err) => loggerService_1.default.error("Error adding device " + err));
}
exports.addDevice = addDevice;
function updateDevice(req, res) {
    (0, device_interactors_1.updateDeviceEx)(req.body).then((bool) => res.json(bool)).catch((err) => loggerService_1.default.error("Error updating device " + err));
}
exports.updateDevice = updateDevice;
