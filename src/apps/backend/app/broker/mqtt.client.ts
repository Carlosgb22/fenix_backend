import mqtt from 'mqtt';
import config from '../../config/config';
import loggerService from '../../../../services/loggerService';
//import { EventTopicsTypeEnum, EventTypeEnum } from '../../../../contexts/entity/domain/entities/event.entity';
import { } from '../../controllers/mqtt/entity.controller'

export default class MQTTConnection {
    client: mqtt.Client | any;

    constructor() {
        this.client = null;
    }

    connect() {
        this.client = mqtt.connect(config.MQTT_HOST, {
            rejectUnauthorized: true,
            clean: true,
            port: 8883,
            username: config.MQTT_USERNAME,
            password: config.MQTT_PASSWORD
        }
        );
        loggerService.info("Mqtt conectado");
    }

    initSubscriptions() {
        this.client.on('connect', () => {
            loggerService.info('Connected')
            this.client.subscribe(config.MQTT_TOPICS, () => {
                loggerService.info(`Subscribe to topics`)
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