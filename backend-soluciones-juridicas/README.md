 Backend - Soluciones Jurídicas LBQ

l proyecto Soluciones Jurídicas LBQ, una plataforma simulada de servicios legales desarrollada con fines académicos y de portafolio profesional. Esta sección del proyecto está centrada en la lógica del servidor, manejo de datos, y futuras funcionalidades dinámicas.

# 🧠 Soluciones Jurídicas - Backend

Este repositorio contiene la estructura del servidor backend del proyecto **Soluciones Jurídicas**, desarrollado con Node.js, Express y MongoDB. Forma parte del segundo proyecto del diplomado Full Stack.

## 🚀 Tecnologías utilizadas

Estructura MVC (Modelo-Vista-Controlador)
- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv
- CORS

## 📁 Estructura del proyecto

-backend-soluciones-juridicas
├── models/ # Modelos de datos (Usuario, CasoLegal, etc.) 
├── controladores/ # Controladores para manejar la lógica 
├── rutas/ # Rutas de la API 
├── app.js # Archivo principal del servidor 
├── .env # Variables de entorno (sí se entrega en este proyecto) 
├── .gitignore # Ignora node_modules y archivos sensibles 
├── package.json # Configuración del proyecto


## 🔐 Variables de entorno (.env)

El archivo `.env` contiene la configuración sensible del proyecto. Aunque **en un entorno profesional este archivo no se sube**, en este proyecto **sí se incluirá para efectos de evaluación**.

Ejemplo de contenido del archivo `.env`:
PUERTO=3000 
MONGODB_URI=mongodb://localhost:27017/soluciones_juridicas

## 📦 Instalación y ejecución del proyecto

Sigue los siguientes pasos para clonar y ejecutar el servidor backend en tu máquina local.

1. **Clonar el repositorio**
```bash
git clone https://github.com/luky2908/soluciones-juridicas-lbq
cd backend-soluciones-juridicas

2. *Instalar dependencias*
npm install

3. Ejecutar el servidor
node app.js

4.Deberías recibir una respuesta como:
✅ Conectado a MongoDB Atlas
🚀 Servidor corriendo en http://localhost:3000


4.Probar el endpoint inicial Abre tu navegador o herramienta como Postman e ingresa a:
http://localhost:3000/


🧪 Nota importante
Este proyecto es una simulación académica. No representa una entidad jurídica real. Está diseñado como ejercicio de desarrollo backend para prácticas de programación web moderna
