"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
class MySqlConnection {
    constructor() {
        this.connection = this.connect;
        loggerService_1.default.info(new Date().toString() + ": " + "MySql connected");
    }
    connect() {
        if (this.connection)
            return this.connection;
        return mysql_1.default.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'usuario',
            database: 'fenix_backend'
        });
    }
}
exports.default = MySqlConnection;
