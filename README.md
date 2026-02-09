# Carrillo Abogados - Landing Page "Próximamente"

![Next.js](https://img.shields.io/badge/Next.js-15.5.12-black) ![React](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-3.4.3-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-ff69b4)

---

## 📋 Descripción

Landing page profesional de **alto impacto visual** para **Carrillo Abogados** (Carrillo ABGD SAS), diseñada para generar expectativa sobre el lanzamiento de la plataforma legal digital más innovadora de Colombia.

**Lanzamiento:** 27 de Marzo de 2026  
**Dominio:** carrilloabgd.com  
**Hosting:** cPanel (HostGator) - Static Export

---

## 🎯 Características Principales

### Diseño Visual
- **Animación de entrada profesional** con Framer Motion (cuadro volador, logo que viaja)
- **Sistema de partículas conectadas** con Canvas API (80 partículas)
- **Formas geométricas flotantes** (7 elementos animados)
- Gradientes dinámicos con colores corporativos
- Efectos glassmorphism y backdrop blur
- Logo y marca unificados en componente único

### Funcionalidades Core
- ✅ **Splash screen animado** (entrada fluida controlada por usuario)
- ✅ **Countdown dinámico** hasta 27/03/2026
- ✅ **Formulario de captura de leads** con micro-interacciones
- ✅ **Modal de datos curiosos legales** (4 facts interactivos)
- ✅ **Service cards** con hover effects avanzados
- ✅ **Estadísticas showcase** (23 años, 15x leads, <1min respuesta, 24/7)
- ✅ **Botón flotante** para contacto por Gmail

### Interactividad
- Logo clickeable abre modal con datos curiosos del sector legal
- Animaciones spring con física realista
- Shared layout animations (logo viaja entre posiciones)
- Micro-interacciones en formularios (focus states, shimmer effects)
- Hover effects en tarjetas de servicios

---

## 🛠️ Stack Tecnológico

### Core
- **Next.js 15.5.12** - Framework con Static Site Generation
- **React 18.3** - Biblioteca UI con hooks
- **TypeScript 5.4.5** - Type safety
- **Tailwind CSS 3.4.3** - Utility-first styling

### Animaciones
- **Framer Motion 11.x** - Layout animations, gestures, spring physics
- **Canvas API** - Sistema de partículas personalizado

### Tipografía & Assets
- **Google Fonts: Lato** (100, 300, 400, 700, 900)
- Logo oficial: `/public/logo-carrillo.jpg`

### Configuración
- `output: 'export'` en next.config.js (static export para cPanel)
- Custom scrollbar styling
- 12 animaciones personalizadas en Tailwind

---

## 📦 Instalación

### Requisitos
- Node.js 20+
- npm o yarn

### Setup

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción (genera carpeta out/)
npm run build
```

---

## 🎨 Paleta de Colores

```javascript
carrillo-blue: '#66728D'
carrillo-blue-dark: '#51679C'
carrillo-blue-light: '#9DA8C5'
carrillo-gray: '#D9DBE0'
Adicionales: #888C96, #7B7C7D, #000000, #FFFFFF
```

---

## 📁 Estructura del Proyecto

```
app/
├── components/
│   ├── BrandLogo.tsx          # Logo + título unificado
│   ├── Countdown.tsx           # Timer dinámico
│   ├── FloatingShapes.tsx      # Formas geométricas animadas
│   ├── LegalFactsModal.tsx     # Modal con datos curiosos
│   ├── ParticlesBackground.tsx # Sistema de partículas Canvas
│   ├── ServiceCard.tsx         # Tarjetas de servicios
│   ├── SplashScreen.tsx        # Animación de entrada
│   └── SubscriptionForm.tsx    # Formulario de leads
├── globals.css                 # Estilos globales + font
├── layout.tsx                  # Layout raíz con metadata
└── page.tsx                    # Página principal

public/
├── logo-carrillo.jpg           # Logo oficial
├── logo-carrillo.svg           # Logo vectorial (backup)
└── robots.txt                  # SEO

tailwind.config.ts              # Colores + 12 animaciones custom
next.config.js                  # output: 'export' para static
```

---

## 🚀 Deployment en cPanel

### Proceso

1. **Build del proyecto:**
   ```bash
   npm run build
   ```

2. **Archivos generados en `out/`:**
   - `index.html`
   - `_next/` (JS, CSS, assets)
   - `logo-carrillo.jpg`
   - `robots.txt`, `sitemap.xml`

3. **Subir a cPanel:**
   - Acceder a File Manager
   - Navegar a `public_html/`
   - Subir contenido completo de carpeta `out/`

4. **Verificar:**
   - Visitar dominio
   - Probar animación de entrada
   - Verificar formulario y botones

📄 Ver [DEPLOYMENT_CPANEL.md](DEPLOYMENT_CPANEL.md) para guía detallada.

---

## 📞 Contacto

**Emails configurados:**
- director@carrilloabgd.com
- asesora@carrilloabgd.com (botón Gmail)

**WhatsApp:** Pendiente configuración  
📝 Ver [CONFIGURACION_WHATSAPP.md](CONFIGURACION_WHATSAPP.md)

---

## 📚 Documentación Adicional

- **[ESTADO_ACTUAL.md](ESTADO_ACTUAL.md)** - Estado detallado del desarrollo
- **[SISTEMA_ANIMACION.md](SISTEMA_ANIMACION.md)** - Documentación de Framer Motion
- **[DEPLOYMENT_CPANEL.md](DEPLOYMENT_CPANEL.md)** - Guía de despliegue
- **[CONFIGURACION_WHATSAPP.md](CONFIGURACION_WHATSAPP.md)** - Pendiente número WhatsApp

---

## 👨‍💻 Desarrollo

**Repositorio:** AlexisJ16/Frontend---CarrilloAbogados  
**Branch:** main  
**Estado:** ✅ Listo para producción

### Comandos útiles:

```bash
npm run dev          # Servidor desarrollo (localhost:3000)
npm run build        # Build producción + static export
npm run lint         # ESLint
```

---

## 📄 Licencia

© 2026 Carrillo ABGD SAS. Todos los derechos reservados.

## 🚀 Deployment a cPanel

### Guía Rápida (5 pasos)

1. **Compilar el proyecto:**
   ```bash
   npm run build
   ```

2. **Acceder a cPanel:**
   - URL: `https://carrilloabgd.com/cpanel`
   - Login con credenciales de HostGator

3. **Ir al Administrador de Archivos:**
   - Navegar a `public_html/`
   - Limpiar la carpeta (eliminar archivos existentes)

4. **Subir archivos:**
   - Subir TODO el contenido de la carpeta `out/`
   - Verificar que `index.html` esté en la raíz

5. **¡Listo!**
   - Visitar: `https://carrilloabgd.com`

📖 **Documentación detallada:** Ver `GUIA_RAPIDA_CPANEL.md`

---

## 📁 Estructura del Proyecto

```
Frontend---CarrilloAbogados/
├── app/
│   ├── components/
│   │   ├── Countdown.tsx          # Timer dinámico
│   │   └── SubscriptionForm.tsx   # Formulario pre-registro
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout + SEO
│   ├── page.tsx                   # Landing page principal
│   └── sitemap.ts                 # Generador de sitemap
├── public/
│   ├── logo-carrillo.jpg          # Logo oficial
│   └── robots.txt                 # Config SEO
├── out/                           # Build estático (generado)
│   ├── index.html
│   ├── _next/
│   └── ...
├── tailwind.config.ts             # Config Tailwind + colores
├── next.config.js                 # Config Next.js (SSG)
├── package.json
├── tsconfig.json
├── GUIA_RAPIDA_CPANEL.md         # Guía deployment
├── DEPLOYMENT_CPANEL.md          # Deployment detallado
├── LANDING_PAGE_INFO.md          # Info técnica
├── PROYECTO_COMPLETADO.md        # Resumen completo
└── README.md                      # Este archivo
```

---

## 🎨 Paleta de Colores

```css
Azules principales:
  - #9DA8C5 (carrillo-blue-light)
  - #66728D (carrillo-blue)
  - #51679C (carrillo-blue-dark)

Grises:
  - #888C96 (carrillo-slate-light)
  - #7B7C7D (carrillo-slate)
  - #D9DBE0 (carrillo-gray)
```

---

## 📊 Contenido Incluido

- ✅ Logo oficial de Carrillo Abogados
- ✅ Mensaje: "El futuro legal ahora es digital"
- ✅ Tagline: "Registros de Marcas y Patentes"
- ✅ 23 años de experiencia destacados
- ✅ Dr. Omar Carrillo - 15 años en la SIC
- ✅ 3 áreas de práctica:
  - Marcas y Patentes (®)
  - Derecho Corporativo (⚖️)
  - Respuesta Inmediata (⚡)
- ✅ Información de contacto completa
- ✅ Dirección: Torre de Cali, Piso 21, Oficina 2102A

---

## 📞 Información de Contacto

- **Email Director:** director@carrilloabgd.com
- **Email Asesoría:** asesora@carrilloabgd.com
- **Dirección:** Cra. 40 #27-26, Torre de Cali, Piso 21, Oficina 2102A, Cali, Valle del Cauca, Colombia

---

## 📱 Responsive Design

La landing page se adapta perfectamente a:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px - 1439px)
- 🖥️ Large Desktop (1440px+)

---

## ✅ Checklist de Producción

### Desarrollo
- [x] Diseño responsive completo
- [x] Countdown timer funcional
- [x] Formulario de suscripción
- [x] SEO optimizado
- [x] Logo oficial integrado
- [x] Información de contacto
- [x] Animaciones implementadas
- [x] Build estático exitoso

### Deployment
- [ ] Subir a cPanel
- [ ] Configurar SSL/HTTPS
- [ ] Verificar en diferentes dispositivos
- [ ] Probar formulario
- [ ] Conectar con servicio de email (opcional)
- [ ] Configurar Analytics (opcional)

---

## 📖 Documentación Adicional

- **GUIA_RAPIDA_CPANEL.md** - Deployment en 5 pasos
- **DEPLOYMENT_CPANEL.md** - Guía de deployment detallada
- **LANDING_PAGE_INFO.md** - Especificaciones técnicas
- **PROYECTO_COMPLETADO.md** - Resumen completo del proyecto
- **NOTA_SOBRE_LOGO.md** - Información sobre el logo

---

## 🔄 Actualizaciones Futuras

Para hacer cambios:

1. Editar archivos necesarios
2. Ejecutar `npm run build`
3. Subir archivos de `out/` a cPanel
4. Reemplazar archivos antiguos

---

## 📄 Licencia

© 2026 Carrillo ABGD SAS. Todos los derechos reservados.

---

## 🎯 Métricas Objetivo

| Métrica | Actual | Objetivo |
|---------|--------|----------|
| Leads/mes | 20 | 300+ |
| Tiempo respuesta | 4-24h | <1 min |
| Conversión | ~5% | 15%+ |

---

## 🚀 Estado del Proyecto

**✅ LISTO PARA PRODUCCIÓN**

La landing page está completamente terminada, optimizada y lista para ser desplegada en cPanel de HostGator. Todos los archivos estáticos están en la carpeta `out/`.

**Próximo paso:** Seguir la guía `GUIA_RAPIDA_CPANEL.md` para deployment.

---

**Desarrollado con ❤️ para Carrillo ABGD SAS**  
**Repositorio:** [github.com/AlexisJ16/Frontend---CarrilloAbogados](https://github.com/AlexisJ16/Frontend---CarrilloAbogados)

### cPanel (HostGator)
1. Ejecuta `npm run build`
2. Sube el contenido de `/out` a `public_html/`
3. Configura `.htaccess` según la guía

Para instrucciones detalladas, consulta [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📝 Estructura del Proyecto

```
├── app/                  # Directorio de la aplicación Next.js
│   ├── layout.tsx       # Layout principal con SEO
│   ├── page.tsx         # Página de inicio
│   ├── globals.css      # Estilos globales
│   └── sitemap.ts       # Sitemap para SEO
├── components/          # Componentes reutilizables
├── public/              # Archivos estáticos
│   └── robots.txt       # Configuración para crawlers
├── next.config.js       # Configuración de Next.js
├── tailwind.config.ts   # Configuración de Tailwind
└── tsconfig.json        # Configuración de TypeScript
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `tailwind.config.ts`:
- `primary`: Tonos azules para elementos principales
- `accent`: Tonos dorados para acentos y CTAs

### Contenido
Edita `app/page.tsx` para actualizar:
- Servicios legales
- Información de contacto
- Secciones del sitio

## 📈 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph para redes sociales
- Sitemap XML automático
- robots.txt configurado
- Estructura HTML semántica
- URLs amigables

## 📄 Licencia

Este proyecto es privado y pertenece a Carrillo Abogados.

## 👥 Contacto

Para consultas sobre el desarrollo del sitio, contacta al administrador del repositorio.
