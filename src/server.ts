// Importaciones de paquetes y constantes necesarias para esta clase
import { Application } from "express";
import appClient from "../src/apps/backend/app/rest/http.client";
import config from "./apps/backend/config/config";
const expressPinoLogger = require('express-pino-logger');
import loggerService from './services/loggerService';
import connect from "./apps/backend/app/dataSourcesClients/mysql.client";

// Estamos en la clase server.
class Server {
    // Indicamos que la app es de tipo aplicacion.
    app: Application;

    // Creamos el constructor del servidor
    constructor() {
        // 
        this.app = appClient;
        // Creamos una constante que realizará todo lo siguiente que haya dentro del corchete
        const loggerMidlleware = expressPinoLogger({
            // Indicamos el tipo de logger
            logger: loggerService,
            // Seteamos que queremos que sea un autoLogging de forma que será automático
            autoLogging: true,
        });
        appClient.use(loggerMidlleware);
    }

    // Creamos la acción start
    start() {
        // Introducimos en código en un try porque es posible que falle.
        // y para ello controlaremos las excepciones.
        try {
            // Creamos una instancia de servidor, indicandole el puerto.
            this.app.listen(config.PORT, async () => {
                // Mostramos un mensaje concatenando el puerto.
                loggerService.info(`Servidor corriendo en el puerto: ${config.PORT}`);
                // Conectamos.
                connect();
            });
            // Si hay algun error, lo controlamos.
        } catch (error: any) {
            // Mostramos el mensaje de error.
            loggerService.error(error);
        }
    }
}
// Creamos una constante de servidor, donde creamos un objeto de la clase servidor.
const server = new Server();
server.start(); // Lo iniciamos, para que la aplicación puede correr.
// Exportamos el paquete del servidor.
export default server;