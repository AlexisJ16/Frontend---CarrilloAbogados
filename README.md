# 🚀 Landing Page "Coming Soon" - Carrillo ABGD

![Estado](https://img.shields.io/badge/Estado-LISTO%20PARA%20PRODUCCI%C3%93N-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.5.12-black)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.3-38bdf8)

---

## 📋 Descripción

Landing page profesional de **alto impacto visual** para el despacho de abogados **Carrillo ABGD SAS**, diseñada para generar expectativa sobre el lanzamiento de su nueva plataforma digital de servicios legales.

**Fecha de lanzamiento:** 27 de Marzo de 2026  
**Dominio:** [carrilloabgd.com](https://carrilloabgd.com)

---

## ✨ Características Destacadas

### 🎨 Diseño Visual
- Paleta de colores corporativa de Carrillo Abogados
- Fuente **Lato** de Google Fonts (todos los pesos)
- Logo oficial integrado
- Gradientes animados y efectos glassmorphism
- Animaciones suaves y profesionales
- **100% responsive** (móvil, tablet, desktop)

### ⚡ Funcionalidades
- **Countdown Timer** dinámico hasta el 27 de Marzo 2026
- **Formulario de suscripción** para captura de leads
- Botones de contacto directo por email
- Efectos hover interactivos
- Optimizado para carga rápida

### 🔍 SEO Optimizado
- Meta tags completos
- Open Graph y Twitter Cards
- Sitemap.xml generado
- Robots.txt configurado
- 15+ palabras clave estratégicas

---

## 🛠️ Tecnologías

- [Next.js 15.5.12](https://nextjs.org/) - Framework React con SSG
- [React 18.3](https://react.dev/) - Biblioteca de UI
- [TypeScript 5.4.5](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS 3.4.3](https://tailwindcss.com/) - Framework utility-first
- [Google Fonts - Lato](https://fonts.google.com/specimen/Lato) - Tipografía

---

## 📦 Instalación y Uso

### Requisitos Previos
- Node.js 20+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio (si aplica)
git clone https://github.com/AlexisJ16/Frontend---CarrilloAbogados.git

# Navegar al directorio
cd Frontend---CarrilloAbogados

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Servidor de desarrollo (localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start

# Linter
npm run lint
```

### Generar Archivos Estáticos

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `out/` listos para cPanel.

---

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
