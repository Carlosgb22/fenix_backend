import { Router } from "express";
import { addDevice, deleteDevice, getAll, getDeviceById, updateDevice } from "../../controllers/mysql/device.controller";

//Se declara un enrutador el cual guardará las rutas y lo que se realizará al llegar a ellas
const router = Router();
//Usando un get en /devices se obtendran todos los dispositivos
router.get("/devices", getAll);
//Usando un get en /devices/:id siendo :id un parametro se obtiene el dispositivo con ese id
router.get("/devices/:id", getDeviceById);
//Usando un delete /devices/:id se borra el dispositivo cuyo id se ha pasado por parametro
router.delete("/devices/:id", deleteDevice);
//Usando un post en /devices/add se añade un nuevo dispositivo
router.post("/devices/add", addDevice);
//Usando un post en /devices/:id/update se actualiza el dispositivo con el id pasado por parametro
router.post("/devices/:id/update", updateDevice);

export default router;