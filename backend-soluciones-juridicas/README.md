 Backend - Soluciones Jurídicas LBQ

Este es el backend del proyecto Soluciones Jurídicas LBQ, una plataforma simulada de servicios legales desarrollada con fines académicos y de portafolio profesional. Esta sección del proyecto está centrada en la lógica del servidor, manejo de datos, y futuras funcionalidades dinámicas.

estructura del proyecto:

backend-soluciones-juridicas/
├── app.js               # Archivo principal del servidor Express
├── .env                 # Variables de entorno (puerto, URI de MongoDB, etc.)
├── .gitignore           # Archivos o carpetas ignoradas por Git

├── models/              # Modelos de datos con Mongoose
│   ├── Usuario.js       # Modelo del usuario
│   └── Contacto.js      # Modelo del formulario de contacto

├── rutas/               # Rutas del backend
│   └── contactoRoutes.js# Rutas para el formulario de contacto

├── controladores/       # Lógica del controlador
│   └── contactoController.js

└── frontend/            # Archivos estáticos del frontend (HTML, CSS, JS)


🚀 Estado del Proyecto
🔵 Backend: En desarrollo
✅ Funciones básicas de contacto y autenticación planificadas
🟢 Preparado para conexión con frontend

🛠️ Tecnologías utilizadas
Node.js + Express

MongoDB + Mongoose

Dotenv para manejo de variables de entorno

Estructura MVC (Modelo-Vista-Controlador)

🧪 Nota importante
Este proyecto es una simulación académica. No representa una entidad jurídica real. Está diseñado como ejercicio de desarrollo backend para prácticas de programación web moderna
