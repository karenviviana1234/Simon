import { Router } from "express";
import { actualizaractividades, crearactividades, eliminaractividades, listaractividades, mostaractividades,  } from "../controllers/controller.actividades.js";



const rutaActividad = Router()
rutaActividad.get("/actividades", listaractividades)
rutaActividad.post("/actividades", crearactividades)
rutaActividad.put("/actividades/:id_actividades", actualizaractividades)
rutaActividad.get("/actividades/:id_actividades", mostaractividades)
rutaActividad.delete("/actividades/:id_actividades", eliminaractividades)

export default rutaActividad;