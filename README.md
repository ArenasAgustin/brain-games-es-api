# Brain Games ES - API

## Descripción

Esta API provee los datos y funcionalidades necesarias para el juego Brain Games ES. Permite gestionar niveles, palabras encriptadas, pistas y puntajes, facilitando la comunicación entre el frontend y la lógica del juego.

## Tabla de Contenidos

- [Brain Games ES - API](#brain-games-es---api)
  - [Descripción](#descripción)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Cómo usar el proyecto](#cómo-usar-el-proyecto)
  - [Estructura de archivos](#estructura-de-archivos)
  - [Endpoints principales](#endpoints-principales)
  - [Ejemplo de uso](#ejemplo-de-uso)

## Cómo usar el proyecto

1. Clona este repositorio o descarga la carpeta `api`.
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Inicia la API:
   ```bash
   npm start
   ```
   Por defecto, la API estará disponible en `http://localhost:3000`.

## Estructura de archivos

- `index.js`: Punto de entrada principal de la API.
- `routes/`: Define las rutas/endpoints de la API.
- `controllers/`: Lógica de manejo de cada endpoint.
- `models/`: (Opcional) Modelos de datos si usas una base de datos.
- `data/`: Archivos JSON o JS con datos de niveles, palabras y pistas.
- `middlewares/`: Funciones intermedias para validación, autenticación, etc.

## Endpoints principales

- `GET /levels`: Obtiene la lista de niveles disponibles.
- `GET /levels/:id`: Obtiene los datos de un nivel específico.
- `GET /hints/:levelId`: Devuelve las pistas para un nivel.
- `POST /score`: Guarda o actualiza el puntaje de un usuario.
- Otros endpoints según la lógica del juego.

## Ejemplo de uso

Obtener todos los niveles:
```bash
curl http://localhost:3000/levels
```

Obtener pistas de un nivel:
```bash
curl http://localhost:3000/hints/1
```

Enviar puntaje:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"user":"Juan","score":100}' http://localhost:3000/score
```

---

Puedes modificar este README según los endpoints y archivos reales de tu API.