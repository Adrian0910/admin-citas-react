// Archivo principal de configuración del servidor

// importamos express, Mongo, etc.
const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes/index');
// const bodyParser = require('body-parser');
//importamos cors para que se pueda pasar la API en el front
const cors = require('cors');

// Crear el servidor
const app = express();


//Antes de habilitar cors hay que asegurar la API para denegar el acceso por la url
// http://localhost:4000/pacientes, esto tambien se logra con cors
const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) => {
        const existe = whitelist.some( dominio => dominio === origin);
        if (existe) {
            callback(null, true)
        }else{
            callback(new Error('No Permitido por CORS'))
        }
    }
}

//Ahora si habilitar cors
//app.use(cors(corsOptions)); //Esta linea hace privado el acceso a la API
app.use(cors()); // Esta lo deja público

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


