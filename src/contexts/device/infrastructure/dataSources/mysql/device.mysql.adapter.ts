import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Device from "../../../domain/entities/device";
import database from "../../../domain/repositories/device.repo";
import loggerService from "../../../../../services/loggerService";

export default class DeviceMySQL implements database {
conn = connect()
    async getAll(): Promise<Array<Device>> {
        
        return new Promise<Array<Device>>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM devices", function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        });
    }

    async getDeviceById(id: string): Promise<Device> {
 
        return new Promise<Device>(async (resolve, reject) => {
            (await this.conn).query("SELECT * FROM devices WHERE id = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(results);
            });
        })
    }

    async addDevice(dev: Device): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("INSERT INTO devices VALUES (?, ?, ?, ?, ?, ?)", [dev.id, dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait],
                function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(true);
                });
        })
    }

    async deleteDevice(id: String): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("DELETE FROM devices WHERE id = " + (await this.conn).escape(id), function (error, results, fields) {
                if (error) loggerService.error(error);
                resolve(true);
            });
        })

        return true;
    }

    async updateDevice(dev: Device): Promise<boolean> {
        return new Promise<boolean>(async (resolve, reject) => {
            (await this.conn).query("UPDATE devices SET name = ?, userUid = ?, imgcon = ?, imgdiscon = ?, imgwait = ? WHERE id = ?",
                [dev.name, dev.userUid, dev.imgcon, dev.imgdiscon, dev.imgwait, dev.id], function (error, results, fields) {
                    if (error) loggerService.error(error);
                    resolve(true);
                });
        });
    }
}