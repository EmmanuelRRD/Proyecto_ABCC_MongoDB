const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const alumnoRoutes = require('./routes/alumnoRoutes');

const app = express();
app.use(express.json());

// Servir archivos estáticos en la carpeta de views, de lo contrario no me encuentra el html
app.use(express.static(path.join(__dirname, 'views')));// Direcciones delicadas

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://emmanuel:ruth@mongodb.wuljsgh.mongodb.net/?appName=MongoDB';//Lo ideal seria no mostrar esta info
//Se puede evitar mortrar con el .gitignore al igual que node-modules

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conexion EXITOSA a MongoDB'))
    .catch(err => console.error('Error al conectar:', err));

// Rutas de mi api
app.use('/alumnos', alumnoRoutes);

// Ruta del html (CORREGIDA)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'alumnos.html'));//Manejamos la carpeta views
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Puerto: ${PORT}`);
});