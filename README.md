# Simulación de API con JSON Server

Este proyecto simula una API para una tienda en línea utilizando JSON Server y una base de datos en formato JSON. Permite la gestión dinámica de productos en la página web mediante llamadas POST, GET y DELETE.

## Configuración Inicial

1. Clona el repositorio:
git clone url-del-repositorio

2. Instala las dependencias:
npm install


## Uso

Para iniciar el servidor JSON Server, ejecuta:
json-server --watch db.json


Esto iniciará el servidor en `http://localhost:3000` y observará los cambios en el archivo `db.json`.

## Requisición de Datos

- **Obtener Productos**: Realiza una solicitud GET a `/productos` para obtener una lista de todos los productos.

## Requisición de Datos
- **Obtener Productos**: Realiza una solicitud GET a `/productos` para obtener una lista de todos los productos.

- **Agregar Producto**: Envía una solicitud POST a `/productos` con los datos del producto para agregarlo.

- **Eliminar Producto**: Envía una solicitud DELETE a `/productos/:id` para eliminar un producto específico.
