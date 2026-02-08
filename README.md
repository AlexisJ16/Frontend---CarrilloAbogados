# Carrillo Abogados - Frontend

Frontend profesional para el despacho de abogados Carrillo Abogados, desarrollado con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **SEO Optimizado**: Meta tags, sitemap, robots.txt y estructura semántica
- ✅ **Responsive**: Diseño adaptable a todos los dispositivos
- ✅ **Rendimiento**: Optimizado para Web Vitals con Next.js 14
- ✅ **Profesional**: Diseño visual atractivo y profesional
- ✅ **Interactivo**: Navegación suave y experiencia de usuario fluida
- ✅ **Desplegable**: Listo para Vercel y cPanel (HostGator)

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework React para producción
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Vercel](https://vercel.com/) - Plataforma de despliegue

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/AlexisJ16/Frontend---CarrilloAbogados.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta el linter
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta el repositorio a Vercel
2. Configura el proyecto (detecta Next.js automáticamente)
3. Despliega con un clic

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
