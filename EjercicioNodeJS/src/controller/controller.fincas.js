import {query} from 'express';
import { pool } from '../database/conexion.js';

export const listar = async (req,res) => {
    try{
    let sql = 'select * from fincas';
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json(result);
    }else{
      res.status(404).json({'message': 'No se registra nada '});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error: '+error});
  }
  };
  
  export const registrar = async (req, res) =>{
    try{
    const {nombre_propietario, nombre_propiedad,  direccion, dimenciones, divicion_por_lotes, limites_finca} = req.body;
  
    let sql =  `INSERT INTO fincas (nombre_propietario, nombre_propiedad, direccion, dimenciones, divicion_por_lotes, limites_finca) VALUES (?, ?, ?, ?, ?, ?)`;
  
    const [rows] = await pool.query(sql,[nombre_propietario, nombre_propiedad,  direccion, dimenciones, divicion_por_lotes, limites_finca]);
    if (rows.affectedRows > 0) {
      res.status(200).json({'status':200,'message':'Buena registro'});
    }else{
      res.status(403).json({'status':403,'message':'mala no registro'});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error: '+error});
  }
  
  };
  


  export const desactivar = async (req, res) => {

  try {
      const { id_finca } = req.params
      const [ resultado ] = await pool.query("UPDATE fincas set estado='inactivo' where id_finca=?",[id_finca])

       if (resultado.affectedRows > 0) {

          res.status(201).json(
              {
                  "mensaje": "se desactivo con exito!!"
              }
          )   
      } else{
          res.status(404).json(
              {
                  "mensaje": "No se pudo desactivar!"
              }
          )
      }
  } catch (error) {
      res.status(500).json({
          "mensaje": error
      })
    }
}

export const actualizar = async (req,res) => {
  try {
      const {id_finca} = req.params
      const {nombre_propietario, nombre_propiedad,  direccion, dimenciones, divicion_por_lotes, limites_finca} = req.body
      const [ oldUser ] = await pool.query("select * from fincas where id_finca=?", [id_finca])
      const [ resultado ] =await pool.query(`update fincas set nombre_propiedad='${nombre_propiedad?nombre_propiedad:oldUser[0].nombre_propiedad}', fecha_inicio='${fecha_inicio?fecha_inicio:oldUser[0].fecha_inicio}', fecha_final='${fecha_final?fecha_final:oldUser[0].fecha_final}', fk_propi_actividad='${fk_propi_actividad?fk_propi_actividad:oldUser[0].fk_propi_actividad}', fk_usuario_actividades='${fk_usuario_actividades?fk_usuario_actividades:oldUser[0].fk_usuario_actividades}' where id_actividades=${parseInt(id_actividades)}`)

      if (resultado.aproductosRows > 0) {
          res.status(200).json({
              "mensaje": "las actividades ha sido actualizado"
          })
      } else {
          productostus(404).json({
              "mensaje": "No se pudo actualizar las actividades"
          })
      }

  } catch (error) {
      res.status(500).json({
          "mensaje": error
      })
  }   
}


  export const buscar = async (req, res) => {
    try {
        const { id_finca } = req.params;
        const [ resultado ] = await pool.query("select * from fincas where id_finca=?", [id_finca])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "mensaje": "No se encontró esa finca con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "mensaje": error
        })     
    }
}