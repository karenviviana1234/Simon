import express  from "express";
import bodyParser from "body-parser";
import  rutaActividad   from "./src/routes/routes.actividad.js";
import rutaCostos  from "./src/routes/routes.costos.js";
import  rutaTipoActi   from "./src/routes/routes.tipoactividad.js";

const servidor = express();

servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({extended:false}));

//rutas

servidor.use ('/actividad', rutaActividad);
servidor.use ('/costos', rutaCostos);
servidor.use ('/tipoactivi', rutaTipoActi);

servidor.listen(4000,()=>{
    console.log('Sirve el puerto 4000')
})