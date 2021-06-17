// Inmportamos moongosee
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definimos un nuevo schema (tabla) con diferentes campos
const pacientesSchema = new Schema({
    nombre: {
        type: String,
        trim: true,
    },
    propietario: {
        type: String,
        trim: true,
    },
    fecha: {
        type: String,
        trim: true
    },
    telefono: {
        type: String,
        trim: true
    },
    hora: {
        type: String,
        trim: true
    },
    sintomas: {
        type: String,
        trim: true
    }
});

// Hay que hacer disponible el modelo porque lo requerimos en los controllers
module.exports = mongoose.model('Paciente', pacientesSchema, 'pacientes');

