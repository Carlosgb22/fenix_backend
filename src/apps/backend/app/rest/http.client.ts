import express from 'express';
import cors from 'cors';
import routes from '../../routes/http/entity.routes';
import loggerService from '../../../../services/loggerService';
import pkg from "../../../../../package.json";

//Creamos la aplicación express
const app = express();

//Ajustes para la aplicacion
app.set("pkg", pkg);
app.use(
    express.urlencoded({ extended: true }),
    express.json({limit: '200mb'}),
    cors(),
);

//Info sobre la api
app.get("/api", (req, res) => {
    res.json({
        message: "Welcome to Node API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
    loggerService.info("Info Api");
});

//Se le indica que a partir de / se usan las rutas definidas en routes
app.use('/', routes);

export default app;