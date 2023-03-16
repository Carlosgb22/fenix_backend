import { Router } from "express";
import { addDevice, deleteDevice, getAll, getDeviceById, updateDevice } from "../../controllers/mysql/device.controller";

const router = Router();

router.get("/devices", getAll);
router.get("/devices/:id", getDeviceById);
router.delete("/devices/:id", deleteDevice);
router.post("/devices/add", addDevice);
router.post("/devices/:id/update", updateDevice);

export default router;