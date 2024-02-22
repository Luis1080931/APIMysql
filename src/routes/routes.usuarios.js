import { Router } from "express"; 
import { listarUsuarios, registrarUsuarios, actualizarUsuarios, eliminarUsuario, buscarUsuario } from "../controllers/usuarios.controller.js";
import { validarUsuario } from "../../validate/usuarios.validate.js";

const routeUsuarios = Router()

routeUsuarios.get('/listar', listarUsuarios)
routeUsuarios.post('/registrar',validarUsuario, registrarUsuarios)

routeUsuarios.put('/actualizar/:id', actualizarUsuarios)
routeUsuarios.delete('/eliminar/:id', eliminarUsuario )
routeUsuarios.get('/buscar/:id', buscarUsuario )

export default routeUsuarios