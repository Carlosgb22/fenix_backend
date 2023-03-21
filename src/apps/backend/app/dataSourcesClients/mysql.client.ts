// Importamos librerías y clases necesarias
import mysql from 'mysql';
import loggerService from '../../../../services/loggerService';
// Creamos la función de conectar
export default async function connect() {
    // Creamos una constante que indicará una conexión de mysql
    const conn = mysql.createConnection({
        // Con los siguientes datos:
        host: 'localhost',
        user: 'usuario',
        password: 'usuario',
        database: 'Devices'
    });
    // Si se ha conectado, indicamos el siguiente mensaje concatenando la fecha
    loggerService.info(new Date().toString() + ": " + "MySql connected");
    // Si se procesa la acción 'SIGINT', realizamos lo siguiente:
    process.on("SIGINT", () => {
        // Cerramos la conexion
        conn.end();
        // Mostramos el siguiente mensaje concatenando la fecha
        loggerService.info(new Date().toString() + ": MySql disconnected");
        process.exit(); // Finalmente salimos
    });
    // Si se elige 'exit'
    process.on("exit", () => {
        // Cerramos la conexion
        conn.end();
        // Mostramos el siguiente mensaje concatenando la fecha
        loggerService.info(new Date().toString() + ": MySql disconnected");
    });
    // Devolvemos la conexion
    return conn;
}