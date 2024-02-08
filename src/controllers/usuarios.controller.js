import { query } from "express";
import { pool } from "../database/conexion.js"; 

export const listarUsuarios = async (req, res) => {
    try {
        
        let sql = `SELECT * FROM usuarios`
        const[resultado] = await pool.query(sql)

        if(resultado.length>0){
            res.status(200).json(resultado)
        }else{
            res.status(404).json({
                'status': 404,
                'message': 'No hay usuarios registrados'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error del servidor ' + error
        })
    }
}

export const registrarUsuarios = async (req, res) => {
    try {
        
        const{nombres, direccion, telefono, correo, rol, password} = req.body
        const[rows] = await pool.query(`INSERT INTO usuarios (nombres, direccion, telefono, correo, rol, password) values (?, ?, ?, ?, ?, ?)`, [nombres, direccion, telefono, correo, rol, password])

        if(rows.affectedRows>0){
            res.status(200).json({
                'status': 'Se registro con exito el usuario'
            })
        }else{
            res.status(403).json({
                'status': 403,
                'message': 'No se registro el usuario'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error del servidor' + error
        })
    }
}

export const actualizarUsuarios = async(req, res) => {

    try {
        
        const{id} = req.params
        const{nombres, direccion, telefono, correo, rol, password} = req.body
        const[rows] = await pool.query(`UPDATE usuarios SET nombres=IFNULL(?, nombres), direccion=IFNULL(?, direccion), telefono=IFNULL(?, telefono), correo=IFNULL(?, correo), rol=IFNULL(?, rol), password=IFNULL(?, password) WHERE idusuario=?`, [nombres, direccion, telefono, correo, rol, password, id])
        
        if(rows.affectedRows>0){
            res.status(200).json({
                'status': 200,
                'message': 'Se actualizo con exito el usuario'
            })
        }else{
            res.status(403).json({
                'status': 403,
                'message': 'No se actualizo el usuario'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error del servidor' + error
        })
    }

    
}

export const eliminarUsuario = async (req, res) => {

    try {
        
        const{id} = req.params
        const[rows] = await pool.query(`DELETE FROM usuarios WHERE idusuario=?`, [id])

        if(rows.affectedRows>0){
            res.status(200).json({
                'status': 200,
                'message': 'Se elimino con exito el usuario'
            })
        }else{
            res.status(403).json({
                'status': 403,
                'message': 'No se elimino el usuario'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error del servidor ' + error
        })
    }
}

export const buscarUsuario = async (req, res) => {
    try {
        
        const{id} = req.params
        const[rows] = await pool.query(`SELECT * FROM usuarios WHERE idusuario=?`, [id])

        if(rows.affectedRows>0){
            res.status(200).json(rows)
        }else{
            res.status(404).json({
                'status': 404,
                'message': 'El usuario no existe'
            })
        }

    } catch (error) {
        res.status(500).json({
            'status': 500,
            'message': 'Error de servidor: ' + error
        })
    }
}