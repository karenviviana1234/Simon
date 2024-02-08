import { Router } from "express";
import { actualizartipo, creartipo, eliminartipo, listartipo, mostartipo } from "../controllers/controller.tipoactividad.js";



const router = Router()
router.get("/tipo_actividad", listartipo)
router.post("/tipo_actividad", creartipo)
router.put("/tipo_actividad/:id_tipo_actividad", actualizartipo)
router.get("/tipo_actividad/:id_tipo_actividad", mostartipo)
router.delete("/tipo_actividad/:id_tipo_actividad", eliminartipo)

export default router