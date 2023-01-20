import pino from "pino";
import dayjs from "dayjs";

const logger = pino({
    prettyPrint: true,
    level: process.env.LOG_LEVEL || 'debug',
    base: {
        pid: false,
    },
    timestamp: ()=> `,"time":"${dayjs().format()}"`,
});

export default logger;