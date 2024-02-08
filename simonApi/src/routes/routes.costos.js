import { Router } from "express";
import { actualizarcostos, crearcostos, eliminarcostos, listarcostos, mostarcostos } from "../controllers/controller.costos.js";



const rutaCostos = Router()
rutaCostos.get("/costos", listarcostos)
rutaCostos.post("/costos", crearcostos)
rutaCostos.put("/costos/:id_productos", actualizarcostos)
rutaCostos.get("/costos/:id_productos", mostarcostos)
rutaCostos.delete("/costos/:id_productos", eliminarcostos)

export default rutaCostos;