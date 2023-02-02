import { getAllEx } from "../../../../contexts/device/application/interactors/device.interactors";
import { Request, Response } from "express";
import loggerService from "../../../../services/loggerService";

export function getAll(req: Request, res: Response) {
    getAllEx().then((devices)=> res.json(devices)).catch((err)=>loggerService.error("Error displaying devices"));
}
//TODO EL ERROR ESTA AQUI