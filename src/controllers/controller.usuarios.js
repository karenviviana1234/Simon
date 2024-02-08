import { pool } from "../database/conexion.js";

// Listar un usuario 
export const listarUsuarios = async (req, res, next) => {
    try {
        const result = await pool.query('select * from usuarios');
        if (result.length > 0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({ "message": "No hay usuarios registrados" })
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
        next(error)
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
                "message": 'Se registró con exito el usuario',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": 'No se registró'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            "message": error
        });
    }
}



// Actualizar un usuario
export const actualizarUsuario = async (req, res) => {
    try {
        const { id_ususario } = req.params;
        const { tipo_identificacion, numero_identifi, nombre_usuari, numero_telefono, email, direccion_usuario } = req.body;
        
        // Verificar que todos los campos necesarios están presentes y son válidos
        if (!id_ususario || !tipo_identificacion || !numero_identifi || !nombre_usuari || !numero_telefono || !email || !direccion_usuario) {
            return res.status(400).json({ mensaje: "Faltan campos requeridos." });
        }
        
        // Consulta segura utilizando parámetros
        const [oldPost] = await pool.query("SELECT * FROM usuarios WHERE id_ususario=?", [id_ususario]);
        
        // Verificar que el usuario existe antes de intentar actualizar
        if (oldPost.length ===  0) {
            return res.status(404).json({ mensaje: "Usuario no encontrado." });
        }
        
        // Actualización segura utilizando parámetros
        const [resultado] = await pool.query(`UPDATE usuarios SET tipo_identificacion=?, numero_identifi=?, nombre_usuari=?, numero_telefono=?, email=?, direccion_usuario=? WHERE id_ususario=?`, [tipo_identificacion, numero_identifi, nombre_usuari, numero_telefono, email, direccion_usuario, id_ususario]);
        
        if (resultado.affectedRows >  0) {
            res.status(200).json({ mensaje: "El usuario ha sido actualizado." });
        } else {
            res.status(404).json({ mensaje: "No se pudo actualizar el usuario, inténtalo de nuevo." });
        }
    } catch (error) {
        res.status(500).json({
            mensaje: "Error interno del servidor",
            detalle: error.message
        });
    }
};

// Elimianr un usuario
export const eliminarUsuario = async (req, res) => {
    try {
        const { id_ususario } = req.params;
        
        // Ejecutar la consulta para eliminar al usuario
        const [resultado] = await pool.query("DELETE FROM usuarios WHERE id_ususario=?", [id_ususario]);
        
        if (resultado.affectedRows >  0) {
            res.status(200).json({
                "mensaje": "El usuario ha sido eliminado."
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": 'No se pudo eliminar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            "message": error
        });
    }
}

