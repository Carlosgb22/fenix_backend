import mysql, { Connection } from 'mysql';
import logger from '../../../../services/loggerService';

export default async function connect() {
    const conn = await mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'usuario',
        database: 'Devices'
    })
    logger.info(new Date().toString() + ": " + "MySql connected");
    return conn;
}