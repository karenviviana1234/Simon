import { pool } from "../database/conexion.js"

export const listarcostos = async (req, res) =>{
    try{
        const [resultado] = await pool.query("select * from costos")

        if (resultado.length > 0){
            res.status(200).json(resultado)
        }else {
            res.status(404).json({
                "mensaje": "no se pudo mostar hay algun error"
            })
        }

    }catch(error){
        res.status(500).json({
            "mensaje": error
        })
    }
}

export const crearcostos = async (req, res) => {
    try {
        const {nombre_produc, cantidad, costos, informe_costos, fk_produc_actividad} = req.body
        const [resultado] = await pool.query("insert into costos(nombre_produc, cantidad, costos, informe_costos, fk_produc_actividad) values (?,?,?,?,?)", [nombre_produc, cantidad, costos, informe_costos, fk_produc_actividad])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "costo puesta con exito"
            })
        } else {
            res.status(400).json({
                "mensaje": "hay un error no se pudo guardar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const actualizarcostos = async (req,res) => {
    try {
        const {id_productos} = req.params
        const {nombre_produc, cantidad, costos, informe_costos, fk_produc_actividad} = req.body
        const [ oldUser ] = await pool.query("select * from costos where id_productos=?", [id_productos])
        const [ resultado ] =await pool.query(`update costos set nombre_produc='${nombre_produc?nombre_produc:oldUser[0].nombre_produc}', cantidad='${cantidad?cantidad:oldUser[0].cantidad}', costos='${costos?costos:oldUser[0].costos}', informe_costos='${informe_costos?informe_costos:oldUser[0].informe_costos}', fk_produc_actividad='${fk_produc_actividad?fk_produc_actividad:oldUser[0].fk_produc_actividad}' where id_productos=${parseInt(id_productos)}`)

        if (resultado.aproductosRows > 0) {
            res.status(200).json({
                "mensaje": "las costos ha sido actualizado"
            })
        } else {
            productostus(404).json({
                "mensaje": "No se pudo actualizar las costos"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const mostarcostos = async (req, res) => {
    try {
        const { id_productos } = req.params;
        const [ resultado ] = await pool.query("select * from costos where id_productos=?", [id_productos])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "mensaje": "No se encontró ese costos con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "mensaje": error
        })     
    }
}

export const eliminarcostos = async (req, res) => {
    try{
        const { id_productos } = req.params;
        const [ resultado ] = await pool.query("delete from costos where id_productos", [id_productos])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "Haz eliminado con exito las costos"
            })
        } else {
            res.status(404).json({
                "mensaje": "No se encontró esas costos con ese ID y no se puedo eliminar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}