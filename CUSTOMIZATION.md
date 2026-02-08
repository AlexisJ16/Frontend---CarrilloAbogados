# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar el sitio web según tus necesidades.

## 📝 Contenido

### 1. Información de Contacto

**Archivo**: `app/page.tsx`

Busca la sección de contacto (líneas ~117-137) y actualiza:

```tsx
<div className="flex items-center justify-center space-x-3">
  <span className="text-2xl">📧</span>
  <span className="text-lg">TU_EMAIL@dominio.com</span>
</div>
<div className="flex items-center justify-center space-x-3">
  <span className="text-2xl">📞</span>
  <span className="text-lg">TU_TELÉFONO</span>
</div>
<div className="flex items-center justify-center space-x-3">
  <span className="text-2xl">📍</span>
  <span className="text-lg">TU_DIRECCIÓN</span>
</div>
```

### 2. Servicios Legales

**Archivo**: `app/page.tsx`

Busca el array `services` al final del archivo (líneas ~154-180):

```tsx
const services = [
  {
    icon: "⚖️",  // Puedes usar emojis o cambiar por íconos
    title: "Tu Servicio",
    description: "Descripción de tu servicio."
  },
  // Añade o modifica servicios aquí
];
```

Puedes:
- Añadir más servicios
- Eliminar servicios que no ofrezcas
- Cambiar títulos y descripciones
- Cambiar los emojis por otros

### 3. Sección "Sobre Nosotros"

**Archivo**: `app/page.tsx`

Busca la sección (líneas ~94-109) y actualiza:

```tsx
<p className="text-lg text-gray-700 mb-6">
  Tu descripción personalizada sobre el despacho...
</p>
```

## 🎨 Diseño Visual

### 1. Colores

**Archivo**: `tailwind.config.ts`

El sitio usa dos paletas de colores principales:

```ts
colors: {
  primary: {
    // Azules - Para navegación, títulos, elementos principales
    500: '#627d98',  // Color principal
    800: '#243b53',  // Más oscuro (header)
    900: '#102a43',  // Más oscuro (footer)
  },
  accent: {
    // Dorados/Naranjas - Para botones, CTAs
    500: '#e68a00',  // Botón "Consulta Gratuita"
    600: '#c97500',  // Hover del botón
  },
}
```

Para cambiar los colores:
1. Genera una paleta en [uicolors.app](https://uicolors.app)
2. Reemplaza los valores en `tailwind.config.ts`
3. Reconstruye: `npm run build`

### 2. Logo

1. Guarda tu logo en `/public/logo.png`
2. Edita `app/page.tsx` en la sección del header:

```tsx
<div className="flex justify-between items-center">
  <div className="flex items-center space-x-3">
    <img src="/logo.png" alt="Carrillo Abogados" className="h-12" />
    <div className="text-2xl font-bold">Carrillo Abogados</div>
  </div>
  {/* resto del código... */}
</div>
```

### 3. Fuentes

**Archivo**: `app/globals.css`

Actualmente usa fuentes del sistema. Para cambiar:

```css
body {
  font-family: 'TuFuente', sans-serif;
}
```

Si quieres usar Google Fonts:
1. Añade el link en `app/layout.tsx`
2. Actualiza el font-family en `globals.css`

### 4. Favicon

1. Crea tu favicon (usa [favicon.io](https://favicon.io))
2. Guarda los archivos en `/public`:
   - `favicon.ico`
   - `apple-touch-icon.png`
   - `favicon-16x16.png`
   - `favicon-32x32.png`

3. Añade en `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  // ... metadata existente
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};
```

## 📱 Navegación

### Añadir Nuevas Páginas

**Ejemplo**: Añadir página "Blog"

1. Crea `/app/blog/page.tsx`:

```tsx
export default function Blog() {
  return (
    <div className="min-h-screen">
      <h1>Blog</h1>
      {/* Contenido del blog */}
    </div>
  );
}
```

2. Añade el link en la navegación (`app/page.tsx`):

```tsx
<Link href="/blog" className="hover:text-accent-400 transition-colors">
  Blog
</Link>
```

### Modificar Navegación

**Archivo**: `app/page.tsx` (líneas ~17-23)

```tsx
<div className="hidden md:flex space-x-8">
  <Link href="#inicio">Inicio</Link>
  <Link href="#servicios">Servicios</Link>
  <Link href="#sobre-nosotros">Sobre Nosotros</Link>
  <Link href="#contacto">Contacto</Link>
  {/* Añade más links aquí */}
</div>
```

## 🔍 SEO

### Meta Tags

**Archivo**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Tu Título SEO",
  description: "Tu descripción optimizada para SEO (150-160 caracteres)",
  keywords: "tus, palabras, clave, separadas, por, comas",
  // ... más metadata
};
```

### Sitemap

**Archivo**: `app/sitemap.ts`

Si añades nuevas páginas, actualiza el sitemap:

```tsx
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://tudominio.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

### Robots.txt

**Archivo**: `public/robots.txt`

Actualiza la URL del sitemap:

```
User-agent: *
Allow: /

Sitemap: https://TU_DOMINIO.com/sitemap.xml
```

## 🖼️ Imágenes

### Añadir Imágenes

1. Guarda imágenes en `/public/images/`
2. Úsalas en tus componentes:

```tsx
<img 
  src="/images/tu-imagen.jpg" 
  alt="Descripción" 
  className="w-full h-auto"
/>
```

### Optimización de Imágenes

Antes de subir imágenes:
- Usa formato WebP o JPG
- Comprime con [tinypng.com](https://tinypng.com)
- Redimensiona al tamaño necesario
- Usa nombres descriptivos: `equipo-legal.jpg`

## 📞 Formulario de Contacto

Para añadir un formulario funcional:

1. Crea `/app/api/contact/route.ts`:

```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Procesa el formulario (enviar email, guardar en DB, etc.)
  return NextResponse.json({ success: true });
}
```

2. Actualiza la sección de contacto en `app/page.tsx` con un formulario

**Nota**: Para hosting estático (cPanel), necesitarás usar un servicio externo como:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [GetForm](https://getform.io)

## 🌐 Internacionalización

Para añadir múltiples idiomas:

1. Instala next-intl: `npm install next-intl`
2. Configura según [documentación](https://next-intl-docs.vercel.app/)
3. Crea archivos de traducción

## 🔧 Scripts Personalizados

### Añadir Scripts de Analytics

**Archivo**: `app/layout.tsx`

```tsx
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## ✅ Checklist Final

Antes de desplegar:

- [ ] Actualizada información de contacto
- [ ] Personalizados servicios
- [ ] Añadido logo
- [ ] Configurado favicon
- [ ] Actualizados meta tags SEO
- [ ] Actualizado sitemap con dominio real
- [ ] Optimizadas todas las imágenes
- [ ] Probado en múltiples navegadores
- [ ] Probado responsive en móvil
- [ ] Configurado Google Analytics
- [ ] Revisado contenido sin errores

---

¿Necesitas más ayuda? Consulta [README.md](./README.md) o [DEPLOYMENT.md](./DEPLOYMENT.md)
