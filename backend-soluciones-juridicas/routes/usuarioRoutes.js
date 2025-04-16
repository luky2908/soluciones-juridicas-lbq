// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const { crearUsuario, iniciarSesion, obtenerUsuarios } = require('../controllers/usuarioController');

router.post('/registrar', crearUsuario);
router.post('/login', iniciarSesion);
router.get('/usuarios', obtenerUsuarios);

module.exports = router;
