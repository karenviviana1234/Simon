import { Router } from "express";
import { actualizaractividades, crearactividades, eliminaractividades, listaractividades, mostaractividades,  } from "../controllers/controller.actividades.js";



const router = Router()
router.get("/actividades", listaractividades)
router.post("/actividades", crearactividades)
router.put("/actividades/:id_actividades", actualizaractividades)
router.get("/actividades/:id_actividades", mostaractividades)
router.delete("/actividades/:id_actividades", eliminaractividades)

export default router