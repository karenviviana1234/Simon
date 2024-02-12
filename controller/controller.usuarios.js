import { pool } from "../database/conexion.js";

// Listar un usuario 
export const listarUsuarios = async (req, res) => {
    try {
        const [ result ] = await pool.query('SELECT * FROM usuarios');
        if (result.length >  0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({
                status: 404,
                "message": 'El usuario no esta registrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            status:  500,
            message: error.message
        })
    }
}

// Registrar un Usuario
export const registrarUsuario = async (req, res) => {
    try {
        const {tipo_identificacion, numero_identifi,  nombre_usuari, numero_telefono, email, direccion_usuario } = req.body;
        const [result] = await pool.query('insert into usuarios ( tipo_identificacion, numero_identifi,  nombre_usuari, numero_telefono, email, direccion_usuario) values (?, ?, ?, ?, ?, ?)', [tipo_identificacion, numero_identifi,  nombre_usuari, email , numero_telefono , direccion_usuario]);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                "message": "Se registró con exito el usuario "+nombre_usuari
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": 'No se registró el usuario'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
    try {
        const { id_ususario, tipo_identificacion, numero_identifi, nombre_usuari, numero_telefono, email, direccion_usuario } = req.body;
        const [result] = await pool.query(`UPDATE usuarios SET tipo_identificacion=?, numero_identifi=?, nombre_usuari=?, numero_telefono=?, email=?, direccion_usuario=? WHERE id_ususario=?`, [tipo_identificacion, numero_identifi, nombre_usuari, numero_telefono, email, direccion_usuario, id_ususario]);
        
        if (result.affectedRows >  0) {
            res.status(200).json({ 
                mensaje: "El usuario ha sido actualizado." 
            });
        } else {
            res.status(404).json({ 
                status: 404,
                mensaje: "No se pudo actualizar el usuario, inténtalo de nuevo." 
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};

// Eliminar Usuario
export const eliminarUsuario = async (req, res) => {
    try {
        const { id_ususario } = req.params;
        const [result] = await pool.query("DELETE FROM usuarios WHERE id_ususario=?", [id_ususario]);
        
        if (result.affectedRows >  0) {
            res.status(200).json({
                "mensaje": "El usuario con el id "+id_ususario+" ha sido eliminado."
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": "No se pudo eliminar el usuario"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

