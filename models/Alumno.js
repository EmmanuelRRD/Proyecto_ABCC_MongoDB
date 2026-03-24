const mongoose = require('mongoose');//El modelo general del alumno
//Mongo genera lo que necesita sin necesidad de crear una bd o algo directamente
//Bd test

const alumnoSchema = new mongoose.Schema({
    numControl: String,
    nombre: String,
    primerAp: String,
    segundoAp: String,
    fechaNac: String,
    semestre: { type: Number, min: 1, max: 15 },
    carrera: String
});

module.exports = mongoose.model('Alumno', alumnoSchema);