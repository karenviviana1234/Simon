import { Router } from "express";
import { actualizartipo, creartipo, eliminartipo, listartipo, mostartipo } from "../controllers/controller.tipoactividad.js";



const rutaTipoActi = Router()
rutaTipoActi.get("/tipo_actividad", listartipo)
rutaTipoActi.post("/tipo_actividad", creartipo)
rutaTipoActi.put("/tipo_actividad/:id_tipo_actividad", actualizartipo)
rutaTipoActi.get("/tipo_actividad/:id_tipo_actividad", mostartipo)
rutaTipoActi.delete("/tipo_actividad/:id_tipo_actividad", eliminartipo)

export default rutaTipoActi;