import express from "express";
import bodyParser from "body-parser";
import { rutaActividad  } from "./src/routes/routes.actividad.js";
import { rutaCostos  } from "./src/routes/routes.costos.js";
import { rutaTipoActi  } from "./src/routes/routes.tipoactividad.js";

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));