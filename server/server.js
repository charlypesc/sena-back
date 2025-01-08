require('dotenv').config(); // Cargar las variables de entorno
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const terminosRoutes = require('../routes/terminoRoutes'); // Importar las rutas de usuarios
const cors = require('cors');

// Middleware para analizar el cuerpo de la solicitud (JSON)
app.use(express.json());
app.use(cors()); // Habilitar CORS con configuración predeterminada
const videosDirectory = path.join(__dirname, 'videos');
app.use('/videos', express.static(videosDirectory));
// Opcional: Configuración específica
app.use(cors({
  origin: '*', // Reemplaza con el dominio permitido
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
}));
// Rutas
app.use('/api/terminos', terminosRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});