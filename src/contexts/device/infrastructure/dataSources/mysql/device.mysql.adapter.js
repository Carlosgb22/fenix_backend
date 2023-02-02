"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_client_1 = __importDefault(require("../../../../../apps/backend/app/dataSourcesClients/mysql.client"));
class DeviceMySQL {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield (0, mysql_client_1.default)();
            const result = conn.query("SELECT * FROM devices");
            return result;
        });
    }
    getDeviceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: "",
                name: "",
                user: "",
                status: "",
                imgCheck: new Blob,
                imgFail: new Blob,
                imgWait: new Blob
            };
        });
    }
    addDevice(device) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    deleteDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    updateDevice(device) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.default = DeviceMySQL;
