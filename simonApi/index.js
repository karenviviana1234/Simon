import express from 'express';
import bodyParser from 'body-parser';

const servidor = express();


//Configuraciones del servidor 
servidor.use(bodyParser.json());
servidor.use(bodyParser.urlencoded({ extended:false }));


servidor.listen(4000,()=>{
  console.log('Sirve');
}); 