# I'm Writting! — Memoria del Proyecto

---

# 1. Introducción

I'm Writting! es una aplicación web orientada a escritores y creadores de historias. El objetivo principal del proyecto es ofrecer un entorno organizado donde el usuario pueda crear capítulos, escribir contenido, tomar notas y estructurar su historia desde una única interfaz.

El proyecto ha sido desarrollado como parte del bootcamp con el objetivo de practicar:

- Desarrollo frontend con React
- Gestión de estado y componentes
- Backend con Node.js y Express
- Base de datos MongoDB
- Autenticación de usuarios
- Comunicación frontend-backend mediante APIs REST
- Persistencia de datos
- Uso de Git y GitHub

---

# 2. Objetivos del Proyecto

Los principales objetivos planteados fueron:

- Crear una aplicación funcional de escritura
- Permitir la creación y gestión de capítulos
- Implementar un sistema de autenticación de usuarios
- Guardar la información en una base de datos
- Diseñar una interfaz clara y sencilla
- Aprender la arquitectura full stack
- Practicar el despliegue y organización de un proyecto real

---

# 3. Tecnologías Utilizadas

## Frontend

- React
- JavaScript
- CSS
- Vite

## Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Autenticación

- JWT (JSON Web Token)
- bcrypt

## Control de versiones

- Git
- GitHub

---

# 4. Arquitectura del Proyecto

El proyecto está dividido en dos partes principales:

## Frontend

El frontend se encarga de:

- Mostrar la interfaz
- Gestionar el estado
- Renderizar capítulos
- Controlar el editor
- Comunicarse con el backend mediante fetch

### Componentes principales

- App.jsx
- Sidebar.jsx
- Outline.jsx
- Editor.jsx
- Notes.jsx
- Timeline.jsx
- Characters.jsx
- Auth.jsx

---

## Backend

El backend se encarga de:

- Gestionar autenticación
- Conectar con MongoDB
- Crear y proteger rutas
- Gestionar capítulos
- Validar usuarios

### Archivos principales

- server.js
- routes/authRoutes.js
- routes/chapterRoutes.js
- models/User.js
- models/Chapter.js
- middleware/auth.js

---

# 5. Funcionalidades Implementadas

## Sistema de autenticación

La aplicación permite:

- Registro de usuarios
- Login
- Persistencia de sesión
- Protección de rutas mediante JWT

---

## Gestión de capítulos

El usuario puede:

- Crear capítulos
- Eliminar capítulos
- Seleccionar capítulos
- Escribir contenido
- Guardar datos en MongoDB

Cada capítulo queda asociado al usuario autenticado.

---

## Editor

El editor permite escribir el contenido de cada capítulo.

También incluye:

- Contador de palabras
- Diseño centrado
- Estado vacío cuando no existen capítulos

---

## Sidebar

La sidebar permite navegar entre:

- Chapters
- Timeline
- Characters
- Notes
- Logout

---

## Sistema de notas

El usuario dispone de una sección rápida para tomar notas mientras escribe.

---

# 6. Base de Datos

Se ha utilizado MongoDB Atlas.

## Colección Users

Contiene:

- email
- password encriptada

## Colección Chapters

Contiene:

- title
- content
- userId
- timestamps

---


# 7. Mejoras Futuras

Algunas funcionalidades futuras podrían ser:

- Autosave en tiempo real
- Editor enriquecido
- Sistema de proyectos
- Exportar novelas
- Modo oscuro
- Colaboración entre usuarios
- Timeline interactiva
- Organización avanzada de personajes


# Instalación y ejecución

## 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
```

Entrar en la carpeta del proyecto:

```bash
cd im-writting
```

---

# Instalar dependencias

## Frontend

Desde la carpeta principal:

```bash
npm install
```

## Backend

Entrar en la carpeta server:

```bash
cd server
npm install
```

---

# Variables de entorno

Crear un archivo `.env` dentro de `server/` y añadir:

```env
MONGO_URI=tu_uri_mongodb
JWT_SECRET=tu_secret
```

---

# Configurar MongoDB Atlas

- Crear un cluster en MongoDB Atlas
- Crear usuario y contraseña
- Permitir acceso IP (`0.0.0.0/0`)
- Copiar la URI de conexión en el `.env`

---

# Ejecutar el proyecto

## Backend

Desde `server/`:

```bash
npm run dev
```

Servidor:

```txt
http://localhost:5000
```

---

## Frontend

Desde la carpeta principal:

```bash
npm run dev
```

