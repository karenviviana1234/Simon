import express from 'express';
import bodyParser from 'body-parser';
import rutaFincas from './src/routes/routes.fincas.js';

const servidor = express();


//Configuraciones del servidor 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended:false }));

servidor.use ('/fincas',rutaFincas);
servidor.listen(4000,()=>{
  console.log('Sirve');
}); 