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
const mysql_1 = __importDefault(require("mysql"));
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = mysql_1.default.createConnection({
            host: 'localhost',
            user: 'usuario',
            password: 'usuario',
            database: 'Devices'
        });
        loggerService_1.default.info(new Date().toString() + ": " + "MySql connected");
        process.on("SIGINT", () => {
            conn.end();
            loggerService_1.default.info(new Date().toString() + ": MySql disconnected");
            process.exit();
        });
        process.on("exit", () => {
            conn.end();
            loggerService_1.default.info(new Date().toString() + ": MySql disconnected");
        });
        return conn;
    });
}
exports.default = connect;
