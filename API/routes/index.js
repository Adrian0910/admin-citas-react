
//importamos express
const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

//exportamos
module.exports = function(){

    // Agrega nuevos pacientes via POST
    router.post('/pacientes',
        // indicar que controlador maneja esa parte
        pacienteController.nuevoCliente
    );

    // Creamos un segundo endpoint
    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    // obtiene un paciente en especifico (ID)

    router.get('/pacientes/:id', // Hacemos  uso de un comodin para buscar por el id
        pacienteController.obtenerPaciente
    );

    // Actualizar un registro con un id especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    );

    // Elimina un paciente por su id
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );

    return router;
}

