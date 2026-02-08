# 🎨 Landing Page "Coming Soon" - Carrillo ABGD

## 📋 Resumen del Proyecto

Landing page profesional de alto impacto visual para **Carrillo ABGD SAS**, diseñada para generar expectativa sobre el lanzamiento de la nueva plataforma digital de servicios legales.

**Fecha de lanzamiento:** 27 de Marzo de 2026

---

## ✨ Características Implementadas

### 🎯 Diseño Visual
- **Gradientes animados** de fondo en tonos azules corporativos
- **Efectos glassmorphism** y blur para un look moderno
- **Animaciones suaves** (fade-in, slide-up, pulse)
- **100% responsive** - perfecto en móvil, tablet y desktop
- **Paleta de colores oficial** de Carrillo Abogados implementada
- **Fuente Lato** de Google Fonts (todos los pesos)

### ⏱️ Funcionalidades Interactivas
- **Countdown Timer dinámico** hasta el 27 de Marzo de 2026
- **Formulario de suscripción** para capturar leads pre-lanzamiento
  - Campos: Nombre, Email, Teléfono (opcional), Servicio de interés
  - Validación de campos requeridos
  - Feedback visual al enviar
- **Botones de contacto** directo por email
- **Hover effects** en todos los elementos interactivos

### 📊 Contenido Incluido
- ✅ Logo oficial de Carrillo Abogados
- ✅ Mensaje principal: "El futuro legal ahora es digital"
- ✅ Tagline: "Registros de Marcas y Patentes"
- ✅ Experiencia: 23 años en el sector legal
- ✅ Destacado: Dr. Omar Carrillo - 15 años en la SIC
- ✅ 3 áreas de práctica destacadas:
  - Marcas y Patentes (®)
  - Derecho Corporativo (⚖️)
  - Respuesta Inmediata (⚡)
- ✅ Propuesta de valor: "De 24 horas a menos de 1 minuto"

### 📍 Información de Contacto
- Email director: director@carrilloabgd.com
- Email asesoría: asesora@carrilloabgd.com
- Dirección completa: Cra. 40 #27-26, Torre de Cali, Piso 21, Oficina 2102A, Cali, Valle del Cauca

### 🔍 SEO Optimizado
- Meta description optimizada (150 caracteres)
- Palabras clave estratégicas implementadas
- Open Graph tags para redes sociales
- Twitter Cards configuradas
- Sitemap.xml generado automáticamente
- Robots.txt configurado
- URLs amigables

---

## 🛠️ Tecnologías Utilizadas

- **Next.js 15.5.12** - Framework React con exportación estática
- **React 18.3** - Biblioteca de UI
- **TypeScript 5.4.5** - Tipado estático
- **Tailwind CSS 3.4.3** - Framework utility-first
- **Google Fonts** - Fuente Lato

---

## 📦 Estructura del Proyecto

```
Frontend---CarrilloAbogados/
├── app/
│   ├── components/
│   │   ├── Countdown.tsx          # Timer dinámico
│   │   └── SubscriptionForm.tsx   # Formulario de pre-registro
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout principal + SEO
│   └── page.tsx                   # Landing page principal
├── public/
│   ├── logo-carrillo.svg          # Logo oficial
│   └── robots.txt                 # Configuración SEO
├── out/                           # Archivos estáticos (generados)
│   ├── index.html                 # Página principal exportada
│   ├── _next/                     # Assets optimizados
│   └── ...
├── tailwind.config.ts             # Configuración de colores
├── next.config.js                 # Configuración Next.js
├── package.json                   # Dependencias
└── DEPLOYMENT_CPANEL.md           # Guía de deployment
```

---

## 🚀 Comandos Disponibles

### Desarrollo Local
```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:3000)
npm run build        # Compilar y generar archivos estáticos
npm run start        # Servidor de producción
npm run lint         # Revisar código
```

### Para Deployment
```bash
npm run build        # Genera la carpeta 'out/' con archivos estáticos
```

Los archivos estáticos se generan en la carpeta `out/` y están listos para ser subidos a cPanel de HostGator.

---

## 🎨 Paleta de Colores

```css
/* Azules principales */
#9DA8C5  → carrillo-blue-light
#66728D  → carrillo-blue (default)
#51679C  → carrillo-blue-dark

/* Grises */
#888C96  → carrillo-slate-light
#7B7C7D  → carrillo-slate
#D9DBE0  → carrillo-gray

/* Blancos y negros */
#FFFFFF  → white
#000000  → black
```

---

## 📱 Responsive Design

La página se adapta perfectamente a:
- 📱 **Móviles** (320px - 767px)
- 📱 **Tablets** (768px - 1023px)
- 💻 **Desktop** (1024px+)
- 🖥️ **Large Desktop** (1440px+)

Todos los elementos, textos y botones se ajustan automáticamente.

---

## 🔄 Próximas Integraciones (Opcional)

### Formulario de Suscripción
Actualmente simula el envío. Para integrarlo con un backend:

**Opciones:**
1. **Mailchimp** - Servicio de email marketing
2. **SendGrid** - API de emails transaccionales
3. **Google Sheets** - Guardar en hoja de cálculo
4. **Backend propio** - API personalizada

### Analytics
- Google Analytics 4
- Facebook Pixel
- Hotjar (mapas de calor)

---

## ✅ Checklist de Deployment

- [x] Diseño responsive completo
- [x] Countdown timer funcional
- [x] Formulario de suscripción implementado
- [x] SEO optimizado (meta tags, sitemap, robots.txt)
- [x] Logo integrado
- [x] Información de contacto
- [x] Compilación estática exitosa
- [ ] Subir a cPanel HostGator
- [ ] Configurar SSL/HTTPS
- [ ] Conectar formulario con servicio de email
- [ ] Activar Google Analytics (opcional)

---

## 📸 Preview

**Elementos destacados:**
- Header con logo en contenedor glass
- Título impactante con texto gradiente
- Countdown timer con 4 bloques (días, horas, minutos, segundos)
- Grid de 3 cards con servicios principales
- Formulario moderno con efectos de focus
- Footer con información completa
- Fondo con gradientes animados

---

## 🎯 Objetivos Cumplidos

✅ **Alto impacto visual** - Diseño moderno y profesional  
✅ **Genera expectativa** - Countdown y mensaje motivador  
✅ **100% estático** - Listo para cPanel sin configuración especial  
✅ **Experiencia atractiva** - Animaciones y transiciones suaves  
✅ **Captura de leads** - Formulario de pre-registro  
✅ **SEO optimizado** - Meta tags y sitemap configurados  
✅ **Responsive perfecto** - Funciona en todos los dispositivos  

---

## 📞 Soporte

Si necesitas realizar cambios o tienes dudas sobre el deployment:

1. Lee el archivo `DEPLOYMENT_CPANEL.md` para instrucciones detalladas
2. Revisa el código - está bien comentado y organizado
3. Ejecuta `npm run dev` para ver cambios en tiempo real
4. Consulta la documentación de Next.js: https://nextjs.org/docs

---

## 📄 Licencia

© 2026 Carrillo ABGD SAS. Todos los derechos reservados.

---

**Estado:** ✅ LISTO PARA PRODUCCIÓN

**Última actualización:** Febrero 2026
