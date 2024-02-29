import { Router } from "express"; 
import { listarUsuarios, registrarUsuarios, actualizarUsuarios, eliminarUsuario, buscarUsuario } from "../controllers/usuarios.controller.js";
import { validarUsuario } from "../../validate/usuarios.validate.js";
import { validarToken } from "../controllers/autenticacion.js";

const routeUsuarios = Router()

routeUsuarios.get('/listar',validarToken, listarUsuarios)
routeUsuarios.post('/registrar',validarUsuario, registrarUsuarios)

routeUsuarios.put('/actualizar/:id', actualizarUsuarios)
routeUsuarios.delete('/eliminar/:id', eliminarUsuario )
routeUsuarios.get('/buscar/:id', buscarUsuario )

export default routeUsuarios