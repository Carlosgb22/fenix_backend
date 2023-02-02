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
const mqtt_client_1 = __importDefault(require("./apps/backend/app/broker/mqtt.client"));
const mysql_client_1 = __importDefault(require("./apps/backend/app/dataSourcesClients/mysql.client"));
const http_client_1 = __importDefault(require("../src/apps/backend/app/rest/http.client"));
const config_1 = __importDefault(require("./apps/backend/config/config"));
const expressPinoLogger = require('express-pino-logger');
const loggerService_1 = __importDefault(require("./services/loggerService"));
class Server {
    constructor() {
        this.database = new mysql_client_1.default();
        this.mqtt = new mqtt_client_1.default();
        this.app = http_client_1.default;
        const loggerMidlleware = expressPinoLogger({
            logger: loggerService_1.default,
            autoLogging: true,
        });
        http_client_1.default.use(loggerMidlleware);
    }
    start() {
        try {
            this.app.listen(config_1.default.PORT, () => __awaiter(this, void 0, void 0, function* () {
                loggerService_1.default.info(`Servidor corriendo en el puerto: ${config_1.default.PORT}`);
                yield this.database.connect();
                this.subscribeMQTT();
            }));
        }
        catch (error) {
            loggerService_1.default.error(error);
        }
    }
    subscribeMQTT() {
        try {
            this.mqtt.connect();
            this.mqtt.initSubscriptions();
        }
        catch (error) {
            loggerService_1.default.error(error);
        }
    }
}
const server = new Server();
server.start();
exports.default = server;
