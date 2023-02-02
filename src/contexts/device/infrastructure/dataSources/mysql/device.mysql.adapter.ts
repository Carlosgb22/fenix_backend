import { Query } from "mysql";
import connect from "../../../../../apps/backend/app/dataSourcesClients/mysql.client";
import Device from "../../../domain/entities/device";
import database from "../../../domain/repositories/device.repo";

export default class DeviceMySQL implements database {
    
    async getAll(): Promise<Query> {
        const conn = await connect()
        const result = conn.query("SELECT * FROM devices");
        return result;
    }

    async getDeviceById(id: string): Promise<Device> {


        return {
            id: "",
            name: "",
            user: "",
            status: "",
            imgCheck: new Blob,
            imgFail: new Blob,
            imgWait: new Blob
        };
    }

    async addDevice(device: Device): Promise<boolean> {


        return true;
    }

    async deleteDevice(id: String): Promise<boolean> {


        return true;
    }

    async updateDevice(device: Device): Promise<boolean> {


        return true;
    }
}