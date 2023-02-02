import Device from "../../../domain/entities/device";
import database from "../../../domain/repositories/device.repo";

export default class DeviceMySQL implements database {
    getAll(): Array<Device> {


        return new Array<Device>
    }

    getDeviceById(id: string): Device {


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

    addDevice(device: Device): boolean {


        return true;
    }

    deleteDevice(id: String): boolean {


        return true;
    }

    updateDevice(device: Device): boolean {


        return true;
    }
}