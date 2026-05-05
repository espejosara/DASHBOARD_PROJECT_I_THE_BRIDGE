#  My Digital Hub | Sprint 6 Project

Este Dashboard es el resultado de mi progresión en el desarrollo Frontend y mi capacidad para integrar herramientas avanzadas en el flujo de trabajo. El reto consistió en construir una interfaz coherente que agrupa módulos funcionales (reloj, clima, seguridad y enlaces) partiendo de una arquitectura lógica sólida.

##  Metodología de Desarrollo: IA + Human Touch

En este proyecto, he adoptado un enfoque de Desarrollo Híbrido:

- **Base Lógica:** Utilicé Inteligencia Artificial para generar estructuras lógicas iniciales y boilerplate técnico, permitiéndome acelerar las fases tempranas de construcción.
- **Refactorización y Personalización:** Revisé, depuré y adapté cada línea de código generada para asegurar que cumpliera con los requisitos específicos del Sprint y se integrara perfectamente con mi diseño visual.


## Funcionalidades Principales

1.  **Reloj Digital:** Muestra la hora en tiempo real, la fecha, una barra de progreso visual del día y mensajes de saludo dinámicos que cambian según la franja horaria.
2.  **Estación Meteorológica:** Conectada a la API de *WeatherAPI*, permite buscar el clima actual de cualquier ciudad, mostrando temperatura, humedad, viento y pronóstico por horas.
3.  **Generador de Contraseñas:** Permite crear contraseñas súper seguras eligiendo la longitud (entre 12 y 50 caracteres). Cuenta con validaciones visuales de error.
4.  **Gestor de Enlaces:** Un listado donde guardar tus sitios web favoritos. Los datos persisten aunque cierres el navegador gracias a `localStorage`.
5.  **Temas y Fondos Inteligentes:** Sistema asíncrono de fondos rotativos cada 15s. Detecta automáticamente la preferencia del sistema del usuario (modo claro u oscuro) para su primera visita y permite cambiarlo manualmente guardando la elección en `localStorage`.


##  Decisiones Técnicas Destacadas

- **Asincronía Real:** Implementé `async/await` para el módulo de clima, gestionando las respuestas de la API de forma eficiente y controlando posibles errores de red.
- **Persistencia Inteligente:** El uso de LocalStorage permite que el dashboard "recuerde" tus preferencias de tema y tu lista de enlaces, transformando objetos complejos mediante `JSON.stringify` y `JSON.parse`.
- **Rendimiento Visual:** Para mantener la estética neutra y profesional, creé un sistema de precarga asíncrono en memoria (`new Image().decode()`) que garantiza que el fondo solo cambie cuando la nueva imagen está lista, eliminando el molesto "fondo blanco" o parpadeos entre transiciones.
- **Experiencia de Usuario (UX) Reactiva:** Desarrollé validaciones en tiempo real (como en el generador de contraseñas) combinando manipulación del DOM y animaciones CSS (`@keyframes shake`) para dar feedback visual y táctil inmediato al usuario.
- **Arquitectura CSS Escalable:** Utilización extensiva de *CSS Custom Properties* (variables) para gestionar la transición fluida entre modos claro y oscuro, y técnicas avanzadas de *Glassmorphism* manteniendo siempre la legibilidad.
- **Accesibilidad (a11y):** Implementación de HTML semántico y atributos ARIA (`aria-label`, `aria-hidden`) para asegurar que la navegación y los iconos decorativos sean perfectamente interpretados por lectores de pantalla.


##  Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Diseño responsive (Flexbox, Grid), Custom Properties (Variables CSS), animaciones y efectos avanzados de `backdrop-filter`.
- **JavaScript (ES6+):** Lógica modular, asincronía (`async/await`, promesas, `fetch`), manipulación avanzada del DOM y uso de `localStorage`.
- **APIs Externas:** WeatherAPI (para los datos meteorológicos).
- **Iconos:** FontAwesome 6.
- **Gestión de Assets:** Cloudinary (alojamiento y entrega rápida). Las imágenes de fondo combinan creaciones propias generadas por IA con recursos seleccionados de Magnific AI, manteniendo en todo momento un estilo visual inspirado en el *Studio Ghibli* para lograr una estética relajante y cohesiva.
- **Asistencia IA:** Gemini (utilizado como *pair-programmer* para brainstorming de lógica, optimización de asincronía y depuración).


##  Estructura del Proyecto

El código está modularizado para mantener buenas prácticas y escalabilidad:

```text
📁 DASHBOARD_PROJECT_I/
├── 📄 index.html          # Vista general del Dashboard
├── 📄 clock.html          # Vista independiente del Reloj
├── 📄 weather.html        # Vista independiente del Clima
├── 📄 password.html       # Vista independiente de Contraseñas
├── 📄 links.html          # Vista independiente de Enlaces
├── 📁 css/
│   ├── 📄 reset.css       # Reseteo básico de márgenes del navegador
│   └── 📄 styles.css      # Estilos globales y variables de temas
└── 📁 js/
    ├── 📄 background.js   # Lógica global de fondos, modo oscuro e inicialización
    ├── 📄 clock.js        # Lógica de tiempos e intervalos
    ├── 📄 weather.js      # Lógica de API REST (fetch) para el clima
    ├── 📄 password.js     # Lógica de generación aleatoria
    └── 📄 links.js        # Lógica de almacenamiento local (CRUD básico)
```

---
