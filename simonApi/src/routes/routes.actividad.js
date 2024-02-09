import { Router } from "express";
import { actualizaractividades, crearactividades, eliminaractividades, listaractividades, mostaractividades,  } from "../controller/controller.actividad.js";



const rutaActividad = Router()

rutaActividad.get("/listar", listaractividades)
rutaActividad.post("/crear", crearactividades)
rutaActividad.put("/actividad/:id_actividades", actualizaractividades)
rutaActividad.get("/actividad/:id_actividades", mostaractividades)
rutaActividad.delete("/actividad/:id_actividades", eliminaractividades)

export default rutaActividad;