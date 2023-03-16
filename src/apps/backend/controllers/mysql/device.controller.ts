import { addDeviceEx, deleteDeviceEx, getAllEx, getDeviceByIdEx, updateDeviceEx } from "../../../../contexts/device/application/interactors/device.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAll(req: Request, res: Response) {
    getAllEx().then((devices) => res.json(devices)).catch((err) => loggerService.error("Error displaying devices " + err));
}

export function getDeviceById(req: Request, res: Response) {
    getDeviceByIdEx(req.params.id).then((device) => res.json(device)).catch((err) => loggerService.error("Error displaying device with id= " + req.body + " " + err));
}

export function deleteDevice(req: Request, res: Response) {
    deleteDeviceEx(req.params.id).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error deleting device " + err));
}

export function addDevice(req: Request, res: Response) {
    addDeviceEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error adding device " + err));
}

export function updateDevice(req: Request, res: Response) {
    updateDeviceEx(req.body).then((bool) => res.json(bool)).catch((err) => loggerService.error("Error updating device " + err));
}