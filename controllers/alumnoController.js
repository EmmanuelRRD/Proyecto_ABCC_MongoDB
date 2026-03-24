const Alumno = require('../models/Alumno'); 

// Obtener todos los alumnos
exports.obtenerAlumnos = async (req, res) => { //El exports deja todo para usarlo cuando se necesite en el proyecto
    try {
        const alumnos = await Alumno.find();
        res.status(200).json(alumnos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// Crear un alumno
exports.crearAlumno = async (req, res) => {
    try {
        const nuevoAlumno = new Alumno(req.body);
        await nuevoAlumno.save();
        res.status(201).json({ exito: true });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Obtener un alumno por ID (Detalle)
exports.obtenerAlumnoPorId = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        res.status(200).json(alumno);
    } catch (error) {
        res.status(404).json({ mensaje: "No encontrado" });
    }
};

// Actualizar alumno
exports.actualizarAlumno = async (req, res) => {
    try {
        await Alumno.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ exito: true });
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

// Eliminar alumno
exports.eliminarAlumno = async (req, res) => {
    try {
        await Alumno.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Registro ELIMINADO' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};