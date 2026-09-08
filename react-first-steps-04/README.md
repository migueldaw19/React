# Acerca de este tema

## Crear el proyecto con vite

```bash
npm create vite
```

## Recuerda capitalizar los nombres de archivos y funciones

## UseEfect

### Dentro de la carpeta shopping-cart en el archivo ItemCounter.tsx


## Realización de pruebas

### Una vez instalado vitest hay que añadir las siguientes lineas en el package.json en el apartado scripts

``bash
    "test":"vitest",
    "test:ui":"vitest --ui",
    "coverage":"vitest run --coverage"
``

## Testing Library para react +  typescript

``bash

npm install --save-dev @testing-library/react @testing-library/dom @types/react @types/react-dom

``

### en MyAwesome.testApp.tsx hay una guia para testing de react (requiere modificar el vite.config.ts)

### en ItemCounter.test.tsx se hace una de guia para testing de componentes que tengan acción (como un click)

### en FirstStepsApp.test.tsx hay una guia de testing con mocks