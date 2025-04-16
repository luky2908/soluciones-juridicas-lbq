


backend-soluciones-juridicas/
│
├── app.js                  # Archivo principal del servidor Express
├── .env                   # Variables de entorno (puerto, URI de MongoDB, etc.)
├── .gitignore             # Archivos o carpetas ignoradas por Git
│
├── models/                # Modelos de datos con Mongoose
│   ├── Usuario.js         # Modelo del usuario
│   └── Contacto.js        # Modelo del formulario de contacto
│
├── routes/                # Rutas del backend
│   └── contactoRoutes.js  # Rutas para el formulario de contacto
│
├── controllers/           # Lógica del controlador
│   └── contactoController.js
│
└── frontend/              # Carpeta con archivos estáticos del frontend (HTML, CSS, JS)
