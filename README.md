# test-api-ghibli

Aplicación Vue que consume la API de Studio Ghibli y muestra una lista de películas con búsqueda inteligente.

## Objetivo del proyecto

Desarrollar una aplicación que liste y permita buscar películas de la Studio Ghibli API, con las siguientes características:

- Listado de películas.
- El buscador debe soportar autocompletado.
- Mostrar detalle por película.
- Información clara y bien estructurada presentada en la pantalla.
- Que el resultado sea agradable a la vista, estético (interfaz, transiciones, etc.).

## Cómo ejecutar el proyecto

1. Instalar dependencias:

```sh
npm install
```

2. Iniciar el servidor de desarrollo:

```sh
npm run dev
```

3. Abrir la aplicación en el navegador:

- Vite mostrará la URL en la consola, generalmente `http://localhost:5173` o `http://localhost:5174`.

## Construir para producción

```sh
npm run build
```

## Verificar tipos

```sh
npm run type-check
```

## Notas

- El proyecto usa Vue 3, Vite y Bulma para el estilo.
- El buscador de películas ofrece autocompletado para facilitar la selección.
- Cada película tiene una pantalla de detalle con información clara y ordenada.
- Contemplar agregar el .env basandose en el .env.example
