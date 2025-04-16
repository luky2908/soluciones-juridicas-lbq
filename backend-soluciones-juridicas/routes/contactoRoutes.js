const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');
const Contacto = require('../models/Contacto');

// Ruta para guardar un contacto usando el controlador
router.post('/', contactoController.enviarMensaje);

//  Ruta para ver todos los contactos (directamente desde aquí)
router.get('/', async (req, res) => {
  try {
    const contactos = await Contacto.find();
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener los contactos', error });
  }
});

module.exports = router;
