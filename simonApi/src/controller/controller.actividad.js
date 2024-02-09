import { pool } from "../database/Conexion.js"

export const listaractividades = async (req, res) =>{
    try{
        const [resultado] = await pool.query("SELECT * FROM actividades")

        if (resultado.length > 0){
            res.status(200).json(resultado)
        }else {
            res.status(404).json({
                "menssage": "no se pudo mostar hay algun error"
            })
        }

    }catch(error){
        res.status(500).json({
            "menssages": "Error STATUS 500", error
        })
    }
}

export const crearactividades = async (req, res) => {
    try {
        const {nombre_activid, fecha_inicio, fecha_final, fk_propi_actividad, fk_usuario_actividades} = req.body
        const [resultado] = await pool.query("insert into actividades(nombre_activid, fecha_inicio, fecha_final, fk_propi_actividad, fk_usuario_actividades) values (?,?,?,?,?)", [nombre_activid, fecha_inicio, fecha_final, fk_propi_actividad, fk_usuario_actividades])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "menssage": "actividad puesta con exito"
            })
        } else {
            res.status(400).json({
                "menssage": "hay un error no se pudo guardar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "menssage": error
        })
    }   
}

export const actualizaractividades = async (req,res) => {
    try {
        const {id_actividades} = req.params
        const {nombre_activid, fecha_inicio, fecha_final, fk_propi_actividad, fk_usuario_actividades} = req.body
        const [ oldUser ] = await pool.query("SELECT * FROM actividades where id_actividades=?", [id_actividades])
        const [ resultado ] =await pool.query(`update actividades set nombre_activid='${nombre_activid?nombre_activid:oldUser[0].nombre_activid}', fecha_inicio='${fecha_inicio?fecha_inicio:oldUser[0].fecha_inicio}', fecha_final='${fecha_final?fecha_final:oldUser[0].fecha_final}', fk_propi_actividad='${fk_propi_actividad?fk_propi_actividad:oldUser[0].fk_propi_actividad}', fk_usuario_actividades='${fk_usuario_actividades?fk_usuario_actividades:oldUser[0].fk_usuario_actividades}' where id_actividades=${parseInt(id_actividades)}`)

        if (resultado.aproductosRows > 0) {
            res.status(200).json({
                "menssage": "las actividades ha sido actualizado"
            })
        } else {
            productostus(404).json({
                "menssage": "No se pudo actualizar las actividades"
            })
        }

    } catch (error) {
        res.status(500).json({
            "menssage": error
        })
    }   
}

export const mostaractividades = async (req, res) => {
    try {
        const { id_actividades } = req.params;
        const [ resultado ] = await pool.query("SELECT * from actividades where id_actividades=?", [id_actividades])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "menssage": "No se encontró ese actividades con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "menssage": error
        })     
    }
}

export const eliminaractividades = async (req, res) => {
    try{
        const { id_actividades } = req.params;
        const [ resultado ] = await pool.query("delete from actividades where id_actividades", [id_actividades])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "menssage": "Haz eliminado con exito las actividades"
            })
        } else {
            res.status(404).json({
                "menssage": "No se encontró esas actividades con ese ID y no se puedo eliminar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "menssage": error
        })
    }
}