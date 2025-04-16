const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session'); // 👉 Añadido para manejo de sesiones
const path = require('path');
const contactoRoutes = require('./routes/contactoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
require('dotenv').config(); // 👉 Carga las variables del archivo .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 👉 Configuración de sesiones
app.use(session({
  secret: 'mi_secreto_super_seguro', // Cámbialo por algo más robusto en producción
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60 * 60 * 1000 // 1 hora
  }
}));

// 👉 Servir archivos estáticos desde el frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// 👉 Rutas API
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/contacto', contactoRoutes);

// 👉 Ruta directa para el formulario de contacto (opcional)
app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/contact.html'));
});

// 👉 Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB Atlas');
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ Error al conectar a MongoDB:', error);
});
