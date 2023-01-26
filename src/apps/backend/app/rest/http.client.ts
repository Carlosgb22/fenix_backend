'use strict';
import express from 'express';
import cors from 'cors';
import expressPino from "pino-http";
import routes from '../../routes/http/entity.routes';
import logger from '../../../../logguer/index';
import pkg from "../../../../../package.json";

//Creamos la aplicación express
const app = express();

// Settings
app.set("pkg", pkg);

app.use(
    express.urlencoded({ extended: true }),
    express.json(),
    cors(),
    expressPino({ logger })
);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Node API",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
});

//TODO: Set API DOC
app.get("/api/v1", (req, res) => {
    res.json({
        message: "Welcome to Node API Documentation",
        name: app.get("pkg").name,
        version: app.get("pkg").version,
        description: app.get("pkg").description,
        author: app.get("pkg").author,
    });
});

//app.use('/api/v1/route', routes);

export default app;