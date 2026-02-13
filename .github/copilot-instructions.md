# Instrucciones de GitHub Copilot para Carrillo Abogados Frontend

## Proyectos y Stack Tecnológico
- **Framework:** Next.js 15.5+ (App Router)
- **Despliegue:** Vercel (capa gratuita) — conectado al repositorio GitHub
- **Estilos:** Tailwind CSS 3.4+ con configuración personalizada
- **Animación:** Framer Motion 12.x + Canvas API + CSS Animations
- **Lenguaje:** TypeScript 5.4+

## Arquitectura y Visión General
- **Despliegue en Vercel:** El proyecto se despliega en Vercel con todas las capacidades de Next.js habilitadas.
  - **Permitido:** API Routes (`app/api/`), Server Components, middleware, headers(), cookies().
  - **Obtención de Datos:** Se pueden usar Server Components, API Routes, o fetch del lado del cliente.
  - **Prevención de Hidratación:** Cualquier elemento que use `Math.random()` o fechas dinámicas DEBE generarse dentro de un `useEffect` para evitar errores de Hydration Mismatch entre servidor y cliente.
- **Manejo de Activos:** Las imágenes PUEDEN usar optimización de Next.js (Vercel lo soporta). Usa `next/image` con formatos webp/avif.
- **Enrutamiento:** Utiliza la estructura estándar de App Router.

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
- **Scroll Animations:** Usa `useInView` de Framer Motion para animaciones triggered por scroll.
- **Transiciones de Página:** Usa `AnimatePresence` para manejar animaciones de montaje/desmontaje.
- **Rendimiento:** Para fondos complejos (partículas), prefiere componentes basados en Canvas API sobre manipulación pesada del DOM.

### 3. Estructura de Componentes
- **Ubicación:** Los componentes están co-ubicados en `app/components/`.
- **Server Components por defecto:** Solo usar `'use client'` cuando sea estrictamente necesario (interactividad, hooks de estado, animaciones).
- **Diseño Responsivo:** Enfoque Mobile-first. Usa prefijos `md:` y `lg:` para layouts de tablet/escritorio.

## Flujos de Trabajo del Desarrollador
- **Build:** `npm run build` para build de producción. Vercel lo ejecuta automáticamente al hacer push.
- **Deploy:** Push a `main` → Vercel despliega automáticamente.
- **Variables de entorno:** Ver `.env.example` para la lista completa. Configurar en Vercel Dashboard.
- **Linting:** Se aplican las reglas estándar de `next lint`.

## Documentación del Proyecto
- **CLAUDE.md** — Instrucciones detalladas para Claude Code (misión completa)
- **ESTADO_ACTUAL.md** — Estado actual del desarrollo y checklist
- **.env.example** — Variables de entorno necesarias
