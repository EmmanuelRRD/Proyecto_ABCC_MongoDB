const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.obtenerAlumnos);
router.post('/', alumnoController.crearAlumno);
router.get('/:id', alumnoController.obtenerAlumnoPorId);
router.put('/:id', alumnoController.actualizarAlumno);
router.delete('/:id', alumnoController.eliminarAlumno);

module.exports = router;