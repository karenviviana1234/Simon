import { Router } from "express";
import { actualizarcostos, crearcostos, eliminarcostos, listarcostos, mostarcostos } from "../controllers/controller.costos.js";



const router = Router()
router.get("/costos", listarcostos)
router.post("/costos", crearcostos)
router.put("/costos/:id_productos", actualizarcostos)
router.get("/costos/:id_productos", mostarcostos)
router.delete("/costos/:id_productos", eliminarcostos)

export default router