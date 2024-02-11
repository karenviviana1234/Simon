import express  from "express";
import bodyParser from "body-parser";
import  rutaActividad   from "./src/routes/routes.actividad.js";
import rutaCostos  from "./src/routes/routes.costos.js";
import  rutaTipoActi   from "./src/routes/routes.tipoactividad.js";

const servidor = express();
const port = 3333

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));

//rutas

servidor.use ( rutaActividad);
servidor.use ( rutaCostos);
servidor.use (rutaTipoActi);

servidor.listen(port,()=>{
    console.log('Sirve el puerto 3333')
})