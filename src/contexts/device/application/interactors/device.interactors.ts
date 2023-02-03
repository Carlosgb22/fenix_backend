import DeviceMySQL from "../../infrastructure/dataSources/mysql/device.mysql.adapter";
import addDevice from "./add.device.interactors";
import Device from "../../domain/entities/device";
import deleteDevice from "./delete.device.interactors";
import updateDevice from "./update.device.interactors";
import getDeviceById from "./get.device.interactors";
import getAll from "./getAll.device.interactors";

const adapter = new DeviceMySQL;
export function addDeviceEx(dev: Device) {
    return addDevice(adapter)(dev);
}

export function deleteDeviceEx(id: String) {
    return deleteDevice(adapter)(id);
}

export function updateDeviceEx(dev: Device) {
    return updateDevice(adapter)(dev);
}

export function getDeviceByIdEx(id: String):Promise<Device>{
    return getDeviceById(adapter)(id);
}

export function getAllEx(): Promise<Array<Device>> {
    return getAll(adapter);
}