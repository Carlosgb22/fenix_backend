import Device from "../entities/device";

export default interface database {
    getAll(): Promise<Array<Device>>;
    getDeviceById(id: String): Promise<Device>;
    addDevice(device: Device): Promise<boolean>;
    deleteDevice(id: String): Promise<boolean>;
    updateDevice(device: Device): Promise<boolean>;
}