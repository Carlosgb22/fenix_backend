"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const entity_controller_1 = require("../../controllers/mysql/entity.controller");
const router = (0, express_1.Router)();
router.get("/devices", entity_controller_1.getAll);
exports.default = router;
