// Realizamos diferentes importaciones necesarias para este apartado
import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Device from "../../../domain/entities/device";
import database from "../../../domain/repositories/device.repo";
import loggerService from "../../../../../services/loggerService";

// Definimos la clase implementando que requerirá de base de datos
export default class DeviceMySQL implements database {
// Iniciamos una conexión a la BD.
conn = connect()
    /*
    Mediante getAll() obtendremos todos los registros de
    la base de datos
    */
    async getAll(): Promise<Array<Device>> {
        // Mostramos un mensaje
        loggerService.info("Obteniendo dispositivos...")
        // Devolvemos un array de dispositivos disponibles
        return new Promise<Array<Device>>(async (resolve, reject) => {
            // El array será devuelto a partir de realizar una consulta sql
            (await this.conn).query("SELECT * FROM devices", function (error, results, fields) {
                // Si hay algún error, lo mostramos
                if (error) loggerService.error(error);
                // Resolvemos los resultados
                resolve(results);
            });
        });
    }

    /*
    Mediante getDeviceById(id) obtendremos los dispositivos con un id específico
    devido a que cuando se llame a este método, siempre será necesario indicarle de que
    id queremos tratar a dicho dispositivo para que nos lo devuelva.
    */
    async getDeviceById(id: string): Promise<Device> {
        // Mostramos un mensaje
        loggerService.info("Obteniendo dispositivo por su id...")
        // Devolvemos los dispositivos
        return new Promise<Device>(async (resolve, reject) => {
            // Mediante una consulta sql selecionaremos el dispositivo y finalmente filtrando a partir del id
            (await this.conn).query("SELECT * FROM devices WHERE id = " + (await this.conn).escape(id), function (error, results, fields) {
                // En caso de error mostramos un mensaje dedicado con el error específico
                if (error) loggerService.error(error);
                // Resolvemos los resultados
                resolve(results);
            });
        })
    }

    /*
    Mediante addDevice() añadimos un nuevo dispositivo a nuestra base de datos de dispositivos.
    */
    async addDevice(dev: Device): Promise<boolean> {
        // Mostramos un mensaje de informacion.
        loggerService.info("Añadiendo dispositivo...")
        // Devolvemos una respuesta true:false según el resultado obtenido.
        return new Promise<boolean>(async (resolve, reject) => {
            // Mediante parámetros, insertaremos un nuevo dispositivo. Los parámetros
            // son indicados más adelante.
            (await this.conn).query("INSERT INTO devices VALUES (?, ?, ?, ?, ?, ?)", [dev.id, dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait],
                function (error, results, fields) {
                    // Si hay error, mostramos mediante un mensaje el error en concreto.
                    if (error) loggerService.error(error);
                    // Resolvemos los resultados.
                    resolve(results);
                });
        })
    }

    /*
    Mediante deleteDevice(id) eliminaremos un dispositivo en concreto, debido a que cuando lo llamamos le pasamos el id del dispositivo
    */
    async deleteDevice(id: String): Promise<boolean> {
        // Mostramos un mensaje de informacion.
        loggerService.info("Borrando dispositivo...")
        //Devolvemos una respuesta true:false según el resultado obtenido.
        return new Promise<boolean>(async (resolve, reject) => {
            //Mediante una consulta borramos el dispositivo cuyo id es el que le hemos pasado por parametros
            (await this.conn).query("DELETE FROM devices WHERE id = " + (await this.conn).escape(id), function (error, results, fields) {
                // Si hay error, mostramos mediante un mensaje el error en concreto.
                if (error) loggerService.error(error);
                // Resolvemos los resultados.
                resolve(results);
            });
        })
    }


    async updateDevice(dev: Device): Promise<boolean> {
        // Mostramos un mensaje de informacion.
        loggerService.info("Actualizando dispositivo...")
        //Devolvemos una respuesta true:false según el resultado obtenido.
        return new Promise<boolean>(async (resolve, reject) => {
            //Mediante una consulta actualizamos el dispositivo cambiando los datos antiguos por los nuevos
            (await this.conn).query("UPDATE devices SET name = ?, userUid = ?, imgcon = ?, imgdiscon = ?, imgwait = ? WHERE id = ?",
                [dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait, dev.id], function (error, results, fields) {
                    // Si hay error, mostramos mediante un mensaje el error en concreto.
                    if (error) loggerService.error(error);
                    // Resolvemos los resultados.
                    resolve(results);
                });
        });
    }
}