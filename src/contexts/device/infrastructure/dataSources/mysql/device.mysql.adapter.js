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
const loggerService_1 = __importDefault(require("../../../../../services/loggerService"));
class DeviceMySQL {
    constructor() {
        this.conn = (0, mysql_client_1.default)();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield this.conn).query("SELECT * FROM devices", function (error, results, fields) {
                    if (error)
                        loggerService_1.default.error(error);
                    resolve(results);
                });
            }));
        });
    }
    getDeviceById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield this.conn).query("SELECT * FROM devices WHERE id = " + (yield this.conn).escape(id), function (error, results, fields) {
                    if (error)
                        loggerService_1.default.error(error);
                    resolve(results);
                });
            }));
        });
    }
    addDevice(dev) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield this.conn).query("INSERT INTO devices VALUES (?, ?, ?, ?, ?, ?)", [dev.id, dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait], function (error, results, fields) {
                    if (error)
                        loggerService_1.default.error(error);
                    resolve(true);
                });
            }));
        });
    }
    deleteDevice(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield this.conn).query("DELETE FROM devices WHERE id = " + (yield this.conn).escape(id), function (error, results, fields) {
                    if (error)
                        loggerService_1.default.error(error);
                    resolve(true);
                });
            }));
            return true;
        });
    }
    updateDevice(dev) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                (yield this.conn).query("UPDATE devices SET name = ?, userUid = ?, imgcon = ?, imgdiscon = ?, imgwait = ? WHERE id = ?", [dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait, dev.id], function (error, results, fields) {
                    if (error)
                        loggerService_1.default.error(error);
                    resolve(true);
                });
            }));
        });
    }
}
exports.default = DeviceMySQL;
