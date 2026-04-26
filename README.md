# Dashboard Project

Este proyecto es la base para tu `Project Brake 1 - Dashboard`.

## Estructura inicial

- `index.html` - la página principal con las cuatro secciones.
- `css/reset.css` - reset básico de estilos.
- `css/styles.css` - estilos principales.
- `js/main.js` - script inicial con reloj y fondo random.

## Conectar el repositorio local con GitHub

1. Abre la terminal en la carpeta del proyecto:
   ```bash
   cd /Users/juliobravo-ferreracosta/Desktop/bootcampfs/DASHBOARD_PROJEC_I
   ```
2. Inicializa Git si aún no lo has hecho:
   ```bash
   git init
   ```
3. Crea el primer commit:
   ```bash
   git add .
   git commit -m "Inicializar dashboard base"
   ```
4. Añade el repositorio remoto que creaste en GitHub:
   ```bash
   git remote add origin https://github.com/tu-usuario/tu-repo.git
   ```
   Cambia `tu-usuario` y `tu-repo` por el nombre real de tu cuenta y repositorio.
5. Sube la rama `main` a GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

## ¿Cómo continuar?

- Crea archivos nuevos para cada mini-app si quieres:
  - `js/data/` para datos
  - `js/templates/` para plantillas HTML
  - `js/utils/` para funciones auxiliares
- Usa `fetch` / `async await` para el clima.
- Usa `localStorage` para guardar los enlaces.
- Mantén cada widget independiente y después únelos en `index.html`.
