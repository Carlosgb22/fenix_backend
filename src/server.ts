import { Application } from "express";
import MQTTConnection from "./apps/backend/app/broker/mqtt.client";
import MySqlConnection from "./apps/backend/app/dataSourcesClients/mysql.client";
import appClient from "../src/apps/backend/app/rest/http.client";
import config from "./apps/backend/config/config";
const expressPinoLogger = require('express-pino-logger');
import logger from './services/loggerService';

class Server {
    app: Application;
    database: MySqlConnection;
    mqtt: MQTTConnection;

    constructor() {
        this.database = new MySqlConnection();
        this.mqtt = new MQTTConnection();
        this.app = appClient;
        const loggerMidlleware = expressPinoLogger({
            logger: logger,
            autoLogging: true,
          });
          
          appClient.use(loggerMidlleware);
    }

    start() {
        try {
            this.app.listen(config.PORT, async () => {
                logger.info(`Servidor corriendo en el puerto: ${config.PORT}`);
                await this.database.connect();
                this.subscribeMQTT();
            });
        } catch (error:any) {
            logger.error(error);
        }
    }

    subscribeMQTT() {
        try {
            this.mqtt.connect();
            this.mqtt.initSubscriptions();
        } catch (error:any) {
            logger.error(error);
        }
    }
}
const server = new Server();
server.app.get("/", (req, res)=>res.send("Hola"));
server.start();

export default server;
