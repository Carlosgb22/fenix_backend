"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const dayjs_1 = __importDefault(require("dayjs"));
const levels = {
    http: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60,
};
exports.default = pino_1.default({
    customLevels: levels,
    useOnlyCustomLevels: true,
    level: 'http',
    prettyPrint: {
        colorize: true,
        levelFirst: true,
        translateTime: 'yyyy-dd-mm, h:MM:ss TT',
    },
    timestamp: () => `,"time":"${dayjs_1.default().format()}"`,
});
