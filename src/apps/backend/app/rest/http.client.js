'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const entity_routes_1 = __importDefault(require("../../routes/http/entity.routes"));
const loggerService_1 = __importDefault(require("../../../../services/loggerService"));
const package_json_1 = __importDefault(require("../../../../../package.json"));
//Creamos la aplicación express
const app = (0, express_1.default)();
// Settings
app.set("pkg", package_json_1.default);
app.use(express_1.default.urlencoded({ extended: true }), express_1.default.json(), (0, cors_1.default)());
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to Node API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
    loggerService_1.default.info("Info Api");
});
//TODO: Set API DOC
app.get("/api/doc", (req, res) => {
    res.json({
        message: "Welcome to Node API Documentation",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
    loggerService_1.default.info("Doc Api");
});
app.use('/', entity_routes_1.default);
exports.default = app;
