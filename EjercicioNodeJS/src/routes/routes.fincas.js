import { Router } from "express";
import {registrar, /* editar */ actualizar, desactivar, buscar , listar /* guardar */} from '../controller/controller.fincas.js';

const rutaFincas = Router();

rutaFincas.get('/listar', listar);
rutaFincas.post('/registrar', registrar);
/* /* rutaFincas.post('/guardar', guardar); */
rutaFincas.get('/buscar/:id_finca', buscar); 
rutaFincas.put('/actualizar', actualizar);
rutaFincas.post('/desactivar/:id_finca', desactivar);


export default rutaFincas;