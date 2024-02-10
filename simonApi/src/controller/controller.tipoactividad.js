import { pool } from "../database/Conexion.js"

export const listartipo = async (req, res) =>{
    try{
        const [resultado] = await pool.query("select * from tipo_actividad")

        if (resultado.length > 0){
            res.status(200).json(resultado)
        }else {
            res.status(404).json({
                "menssage": "no se pudo mostar hay algun error"
            })
        }

    }catch(error){
        res.status(500).json({
            "menssage": error
        })
    }
}

export const creartipo = async (req, res) => {
    try {
        const {nombre_realiza, trabajo_realizado, fk_tipo_actividad} = req.body
        const [resultado] = await pool.query("insert into tipo_actividad(nombre_realiza, trabajo_realizado, fk_tipo_actividad) values (?,?,?)", [nombre_realiza, trabajo_realizado, fk_tipo_actividad])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "menssage": "costo puesta con exito"
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

export const actualizartipo = async (req,res) => {
    try {
        const {id_tipo_actividad} = req.params
        const {nombre_realiza, trabajo_realizado, fk_tipo_actividad} = req.body
        const [ oldUser ] = await pool.query("select * from tipo_actividad where id_tipo_actividad=?", [id_tipo_actividad])
        const [ resultado ] =await pool.query(`update tipo_actividad set nombre_realiza='${nombre_realiza?nombre_realiza:oldUser[0].nombre_realiza}', trabajo_realizado='${trabajo_realizado?trabajo_realizado:oldUser[0].trabajo_realizado}', fk_tipo_actividad='${fk_tipo_actividad?fk_tipo_actividad:oldUser[0].fk_tipo_actividad}' where id_tipo_actividad=${parseInt(id_tipo_actividad)}`)

        if (resultado.aproductosRows > 0) {
            res.status(200).json({
                "menssage": "las tipo_actividad ha sido actualizado"
            })
        } else {
            productostus(404).json({
                "menssage": "No se pudo actualizar las tipo_actividad"
            })
        }

    } catch (error) {
        res.status(500).json({
            "menssage": error
        })
    }   
}

export const mostartipo = async (req, res) => {
    try {
        const { id_tipo_actividad } = req.params;
        const [ resultado ] = await pool.query("select * from tipo_actividad where id_tipo_actividad=?", [id_tipo_actividad])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "menssage": "No se encontró ese tipo_actividad con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "menssage": error
        })     
    }
}

export const eliminartipo = async (req, res) => {
    try{
        const { id_tipo_actividad } = req.params;
        const [ resultado ] = await pool.query("delete from tipo_actividad where id_tipo_actividad", [id_tipo_actividad])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "menssage": "Haz eliminado con exito las tipo_actividad"
            })
        } else {
            res.status(404).json({
                "menssage": "No se encontró esas tipo_actividad con ese ID y no se puedo eliminar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "menssage": error
        })
    }
}