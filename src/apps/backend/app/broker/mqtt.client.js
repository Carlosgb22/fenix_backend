"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = __importDefault(require("mqtt"));
const config_1 = __importDefault(require("../../config/config"));
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
class MQTTConnection {
    constructor() {
        this.client = null;
    }
    connect() {
        this.client = mqtt_1.default.connect(config_1.default.MQTT_HOST, {
            rejectUnauthorized: true,
            clean: true,
            port: 8883,
            username: config_1.default.MQTT_USERNAME,
            password: config_1.default.MQTT_PASSWORD
        });
        loggerService_1.default.info("Mqtt conectado");
    }
    initSubscriptions() {
        this.client.on('connect', () => {
            loggerService_1.default.info('Connected');
            this.client.subscribe(config_1.default.MQTT_TOPICS, () => {
                loggerService_1.default.info(`Subscribe to topics`);
            });
        });
        /*this.client.on('message', (topic, payload) => {
            switch (topic) {
                case (EventTopicsTypeEnum.X+EventTypeEnum.Y):
                    //TODO
                    break;
                default:
                    logger.info('Received Message on ' + topic + '/ : ' + payload.toString())
                    break;
            }
        });*/
    }
}
exports.default = MQTTConnection;
