// Realizamos importaciones varias, necesarias para esta clase
import pino from 'pino';
import dayjs from "dayjs";
// Creamos una constante con los diferentes niveles de código a devolver
const levels = {
  http: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60,
};
export default pino(
  {
    customLevels: levels, // Indicamos los niveles customizados
    useOnlyCustomLevels: true, // Indicamos que solo se usará nuestros niveles personalizados y no los por defecto
    level: 'http', // Seleccionamos que el nivel será http
    prettyPrint: {
      colorize: true, // Nos será necesario si queremos que en la consola nos aparezca con colores
      levelFirst: true, // Primero el primer nivel
      translateTime: 'yyyy-dd-mm, h:MM:ss TT', // Damos formato a un formato de fecha personalizado por mi
    },
    // La variable timestamp tendrá la siguiente estructura.
    timestamp: () => `,"time":"${dayjs().format()}"`,
  },
)