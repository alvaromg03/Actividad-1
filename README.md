# Relatos de Papel - Ecommerce de Libros

Este proyecto es una propuesta de frontend para un ecommerce de venta de libros, desarrollado con React, Vite y Bootstrap.

## Características principales

- Catálogo de libros con vista de detalle.
- Carrito de compra persistente en contexto global.
- Proceso de checkout simulado.
- Redirección automática desde la pantalla de bienvenida.
- Diseño responsive usando Bootstrap 5.

## Tecnologías utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- [React Router DOM](https://reactrouter.com/)

## Estructura del proyecto

```
├── public/
├── src/
│   ├── assets/           # Imágenes y recursos
│   ├── components/       # Componentes reutilizables (Header, Footer, BookCard, etc.)
│   ├── context/          # Contexto global (Carrito)
│   ├── data/             # Datos simulados (libros)
│   ├── hooks/            # Hooks personalizados
│   ├── pages/            # Páginas principales (Landing, Catalog, BookDetail, Checkout)
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globales
│   ├── index.css         # Estilos base
│   └── main.jsx          # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y ejecución

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd Actividad-1
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Scripts disponibles

- `npm run dev`     - Inicia el servidor de desarrollo con Vite.
- `npm run build`   - Genera la build de producción.
- `npm run preview` - Previsualiza la build de producción.
- `npm run lint`    - Ejecuta ESLint sobre el código fuente.

## Notas

- El proyecto es solo frontend y simula la gestión de libros y carrito en memoria.
- Puedes personalizar los datos de los libros en `src/data/books.js`.

## Licencia

Este proyecto es solo para fines educativos y de demostración.

