import DeviceMySQL from "../../infrastructure/dataSources/mysql/device.mysql.adapter";
import addDevice from "./add.device.interactors";
import Device from "../../domain/entities/device";
import deleteDevice from "./delete.device.interactors";
import updateDevice from "./update.device.interactors";
import getDeviceById from "./get.device.interactors";
import getAll from "./getAll.device.interactors";
import { Query } from "mysql";

const adapter = new DeviceMySQL;
export function addDeviceEx(dev: Device) {
    return addDevice(adapter);
}

export function deleteDeviceEx(id: String) {
    return deleteDevice(adapter);
}

export function updateDeviceEx(dev: Device) {
    return updateDevice(adapter);
}

export function getDeviceByIdEx(id: String) {
    return getDeviceById(adapter);
}

export function getAllEx(): Promise<Query> {
    return getAll(adapter);
}