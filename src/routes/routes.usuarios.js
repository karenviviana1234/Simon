import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, eliminarUsuario, registrarUsuario} from '../controllers/controller.usuarios.js'


const routesUsuarios = Router();

routesUsuarios.get('/listarUsuario', listarUsuarios);
routesUsuarios.post('/registrarUsuario', registrarUsuario);
routesUsuarios.delete('/eliminarUsuario/:id_ususario', eliminarUsuario);
routesUsuarios.put('/actualizarUsuario/:id_ususario', actualizarUsuario);

export default routesUsuarios;