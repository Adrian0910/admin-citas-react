// Archivo principal de configuración del servidor

// importamos express, Mongo, etc.
const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes/index');
// const bodyParser = require('body-parser');

// Crear el servidor
const app = express();

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', { //Definimos la conexion 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}); 

// Habilitar el body-parser (fue sustituido por express.)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Habilitar routing
app.use('/', routes());

// Definir puerto y arrancar server
app.listen(4000, () => {
    console.log('Servidor funcionando')
});

/* 
1)
    En package.json configuramos nuestro script:
    "dev" : "nodemon ./index.js" 
    nodemon: reinicia el server cada que guardamos cambios
    ./index.js: indica el punto de entrada
2)
    Correr el script con el siguiente comando:
    "npm run dev"
3)
    Conectar la app a Mongoo

*/


