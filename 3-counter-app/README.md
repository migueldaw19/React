# Acerca de este tema

## Crear el proyecto con vite

```bash
npm create vite
```


## IMPORTANTE A LA HORA DE ACTUALIZAR UN PROYECTO

### Si se desea actualizar un proyecto de vite y react conviene eliminar vite y @vitejs/plugin-react de package.json, eliminar el node_modules y despues instalar los 2 paquetes. Esto es debido a que si simplemente haces un update de vite provocaras un conflicto de dependencias y no te dejara actualizar el resto de componentes