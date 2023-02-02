import Device from "../entities/device";

export default interface database {
    getAll(): Array<Device>;
    getDeviceById(id: String): Device;
    addDevice(device: Device): boolean;
    deleteDevice(id: String): boolean;
    updateDevice(device: Device): boolean;
}