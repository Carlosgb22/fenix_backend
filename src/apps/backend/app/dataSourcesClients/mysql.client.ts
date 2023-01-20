import mysql, { Connection } from 'mysql';
import logger from '../../../../logguer/index';

export default class MySqlConnection {
    connection: Connection | any;

    constructor() {
        this.connection = this.connect;
        logger.info(new Date().toString() + ": " + "MySql connected");
    }

    connect(){
        if (this.connection) return this.connection;
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'usuario',
            database: 'fenix_backend'
        })
    }
}