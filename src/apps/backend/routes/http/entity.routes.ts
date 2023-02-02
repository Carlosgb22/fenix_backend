import { Router } from "express";
import { getAll } from "../../controllers/mysql/entity.controller";

const router = Router();

router.get("/devices", getAll);


export default router;