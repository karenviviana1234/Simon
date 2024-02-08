import express from 'express';
import bodyParser from 'body-parser';
import routesUsuarios from './src/routes/routes.usuarios.js';

const servidor = express();


//Configuraciones del servidor 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended:false }));
servidor.use(routesUsuarios)

//rutas del servidor

servidor.listen(3000,()=>{
  console.log('Sirve');
}); 

