// controllers/usuarioController.js
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Registrar nuevo usuario
const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña, rol } = req.body;

    if (!nombre || !correo || !contraseña) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    const existeUsuario = await Usuario.findOne({ correo });
    if (existeUsuario) {
      return res.status(400).json({ mensaje: 'Este correo ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña: contraseñaEncriptada,
      rol: rol || 'usuario'
    });

    await nuevoUsuario.save();

    res.status(201).json({
      mensaje: '✅ Usuario creado correctamente',
      usuario: {
        id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
        rol: nuevoUsuario.rol
      }
    });
  } catch (error) {
    console.error('❌ Error al crear usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear usuario', error: error.message });
  }
};

// Iniciar sesión con JWT (API)
const iniciarSesion = async (req, res) => {
  console.log('📥 POST /api/usuarios/login recibido');

  const { correo, contraseña } = req.body;

  try {
    if (!correo || !contraseña) {
      return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
    }

    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({ mensaje: '❌ Correo no registrado' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: '❌ Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario._id, nombre: usuario.nombre },
      process.env.JWT_SECRET || 'secreto_seguro',
      { expiresIn: '1h' }
    );

    res.json({
      mensaje: '✅ Inicio de sesión exitoso',
      token,
      usuario: {
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol
      }
    });

  } catch (error) {
    console.error('❌ Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message });
  }
};

// Iniciar sesión con sesión de servidor y redirección
const iniciarSesionConSesion = async (req, res) => {
  const { correo, password } = req.body;

  if (!correo || !password) {
    return res.status(400).json({ mensaje: "Correo y contraseña son obligatorios" });
  }

  const usuario = await Usuario.findOne({ correo });

  if (!usuario) {
    return res.status(401).json({ mensaje: "Usuario no encontrado" });
  }

  const contraseñaValida = await bcrypt.compare(password, usuario.contraseña);

  if (!contraseñaValida) {
    return res.status(401).json({ mensaje: "Contraseña incorrecta" });
  }

  // Guardar en sesión
  req.session.usuario = { correo: usuario.correo, nombre: usuario.nombre };

  // Redirigir a página de bienvenida del frontend
  res.redirect('/bienvenida.html');
};

// Obtener todos los usuarios (para pruebas)
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({}, 'nombre correo rol');
    res.json(usuarios);
  } catch (error) {
    console.error('❌ Error al obtener usuarios:', error);
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error: error.message });
  }
};

module.exports = {
  crearUsuario,
  iniciarSesion,
  iniciarSesionConSesion, // <- puedes importar esta si usas sesiones y redirección
  obtenerUsuarios
};
