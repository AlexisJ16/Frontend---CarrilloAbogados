# Instrucciones de GitHub Copilot para Carrillo Abogados Frontend

## Proyectos y Stack Tecnológico
- **Framework:** Next.js 15.5+ (App Router)
- **Despliegue:** Exportación Estática (`output: 'export'`) a cPanel/HostGator
- **Estilos:** Tailwind CSS 3.4+ con configuración personalizada
- **Animación:** Framer Motion 11.x + Canvas API + CSS Animations
- **Lenguaje:** TypeScript 5.4+

## Arquitectura y Visión General
- **Solo Generación Estática:** Este proyecto está configurado con `output: 'export'`.
  - **Prohibido:** Rutas API (`app/api`), `headers()`, `cookies()`, o middleware que dependa de un entorno de ejecución Node.js.
  - **Obtención de Datos:** Debe hacerse en tiempo de construcción (static params) o del lado del cliente (useEffect/SWR).
  - **Prevención de Hidratación:** Cualquier elemento que use `Math.random()` o fechas dinámicas DEBE generarse dentro de un `useEffect` para evitar errores de Hydration Mismatch entre servidor y cliente.
- **Manejo de Activos:** Las imágenes tienen `unoptimized: true` en `next.config.js`. Usa `next/image` pero entiende que renderizará etiquetas `<img>` estándar sin servicios de optimización bajo demanda.
- **Enrutamiento:** Utiliza la estructura estándar de App Router. `trailingSlash: true` está habilitado para compatibilidad con cPanel.

## Patrones Clave y Convenciones

### 1. Identidad Visual y Estilos
- **Concepto:** "Cinemático y Alto Contraste". Preferimos fondos oscuros sólidos con efectos de luz (nebulas, glow) sobre transparencias totales que comprometan la legibilidad.
- **Paleta de Colores:** Usa ESTRICTAMENTE los colores definidos en Tailwind.
  - Primarios: `text-carrillo-blue`, `bg-carrillo-blue-dark`.
  - Fondos Profundos: `#020205` (Splash/Fondos), `#0A0F1E` (Tarjetas/Modales).
  - Claros/Acentos: `text-carrillo-blue-light`.
  - Neutros: `carrillo-gray`, `carrillo-slate`.
- **Fuentes:** 'Lato' es la familia de fuente principal (`font-lato`).

### 2. Animaciones (Framer Motion)
- **Shared Layouts:** Usa la prop `layoutId` en `motion.div` para animar componentes que se mueven entre diferentes partes del DOM (ej. `BrandLogo` moviéndose del Splash al Header).
  - Ejemplo: Ver `app/components/BrandLogo.tsx`.
- **Transiciones de Página:** Usa `AnimatePresence` en `app/page.tsx` o wrappers de layout para manejar animaciones de montaje/desmontaje de componentes.
- **Rendimiento:** Para fondos complejos (partículas), prefiere componentes basados en API `Canvas` (ej. `ParticlesBackground.tsx`) sobre manipulación pesada del DOM.

### 3. Estructura de Componentes
- **Ubicación:** Los componentes están co-ubicados en `app/components/`.
- **Componentes de Cliente:** La mayoría de componentes UI con animación/interactividad deben usar la directiva `'use client'`.
- **Diseño Responsivo:** Enfoque Mobile-first. Usa prefijos `md:` y `lg:` para layouts de tablet/escritorio.

## Flujos de Trabajo del Desarrollador
- **Build:** Ejecuta `npm run build` para generar el directorio `out/`. Esta carpeta es el **único** entregable para producción.
- **Integración WhatsApp:** Las referencias a WhatsApp deben seguir el formato en `CONFIGURACION_WHATSAPP.md`.
- **Linting:** Se aplican las reglas estándar de `next lint`.

## Tareas Comunes
- **Actualizar Contenido:** El contenido está actualmente hardcodeado en componentes (ej. `LegalFactsModal.tsx`, `ServiceCard.tsx`). Actualiza el texto directamente en archivos TSX.
- **Agregar Servicios:** Duplica el patrón en `app/page.tsx` usando componentes `ServiceCard`. Asegúrate de que los efectos hover coincidan con las tarjetas existentes.
