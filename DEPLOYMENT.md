# Guía de Despliegue - Carrillo Abogados Frontend

Este documento proporciona instrucciones detalladas para desplegar la aplicación en Vercel y cPanel (HostGator).

## Tabla de Contenidos
1. [Despliegue en Vercel](#despliegue-en-vercel)
2. [Despliegue en cPanel (HostGator)](#despliegue-en-cpanel-hostgator)
3. [Configuración de SEO](#configuración-de-seo)
4. [Mantenimiento](#mantenimiento)

---

## Despliegue en Vercel

### Requisitos Previos
- Cuenta de Vercel (gratuita)
- Repositorio conectado a GitHub

### Pasos para Despliegue

1. **Conectar Repositorio a Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Inicia sesión con tu cuenta de GitHub
   - Haz clic en "New Project"
   - Selecciona este repositorio: `Frontend---CarrilloAbogados`

2. **Configuración del Proyecto**
   - Framework Preset: `Next.js`
   - Build Command: `npm run build` (detectado automáticamente)
   - Output Directory: `.next` (detectado automáticamente)
   - Install Command: `npm install` (detectado automáticamente)

3. **Variables de Entorno (Opcional)**
   Si necesitas configurar variables de entorno:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.carrilloabogados.com
   NEXT_PUBLIC_CONTACT_EMAIL=contacto@carrilloabogados.com
   ```

4. **Deploy**
   - Haz clic en "Deploy"
   - Vercel construirá y desplegará automáticamente
   - Obtendrás una URL como: `https://frontend-carrillo-abogados.vercel.app`

5. **Dominio Personalizado (Opcional)**
   - En Vercel, ve a Settings → Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones para configurar DNS

---

## Despliegue en cPanel (HostGator)

### Requisitos Previos
- Acceso a cPanel de HostGator
- Node.js instalado en tu máquina local
- Dominio configurado en HostGator

### Pasos para Despliegue

#### 1. Construcción Local

Primero, construye la aplicación para exportación estática:

```bash
# Instalar dependencias
npm install

# Construir y exportar
npm run build
```

Este comando generará una carpeta `out/` con todos los archivos estáticos.

#### 2. Subir Archivos a cPanel

**Opción A: Usar File Manager de cPanel**
1. Inicia sesión en cPanel
2. Abre "File Manager"
3. Navega a `public_html/` (o el directorio de tu dominio)
4. Sube todo el contenido de la carpeta `out/`
5. Asegúrate de que el archivo `index.html` esté en la raíz

**Opción B: Usar FTP**
1. Configura un cliente FTP (FileZilla, etc.)
2. Conecta usando las credenciales de FTP de HostGator
3. Sube el contenido de `out/` a `public_html/`

#### 3. Configuración de .htaccess

Crea o edita el archivo `.htaccess` en `public_html/`:

```apache
# Habilitar compresión GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Habilitar caché del navegador
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Redirección para Next.js
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Seguridad
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### 4. Verificación

- Visita tu dominio: `https://www.carrilloabogados.com`
- Verifica que todas las páginas y enlaces funcionen correctamente
- Prueba en diferentes navegadores y dispositivos

---

## Configuración de SEO

### Verificación de Sitio

1. **Google Search Console**
   - Visita [search.google.com/search-console](https://search.google.com/search-console)
   - Agrega tu propiedad
   - Verifica la propiedad usando uno de los métodos disponibles
   - Envía el sitemap: `https://www.carrilloabogados.com/sitemap.xml`

2. **Google Analytics (Opcional)**
   - Crea una cuenta en [analytics.google.com](https://analytics.google.com)
   - Obtén tu ID de medición (G-XXXXXXXXXX)
   - Agrega el código de seguimiento al proyecto

### Archivos SEO Incluidos

- ✅ `robots.txt` - Instrucciones para rastreadores web
- ✅ `sitemap.xml` - Mapa del sitio para motores de búsqueda
- ✅ Meta tags en `layout.tsx` - Títulos, descripciones, Open Graph
- ✅ Estructura semántica HTML5
- ✅ Responsive design para móviles

### Mejores Prácticas SEO

1. **Contenido de Calidad**
   - Actualiza regularmente el contenido
   - Usa palabras clave relevantes naturalmente
   - Crea contenido valioso para usuarios

2. **Velocidad del Sitio**
   - Optimiza imágenes antes de subirlas
   - Minimiza el uso de scripts externos
   - Usa caché del navegador (configurado en .htaccess)

3. **Mobile-First**
   - El diseño es responsive por defecto
   - Prueba en múltiples dispositivos
   - Usa Google Mobile-Friendly Test

---

## Mantenimiento

### Actualización de Contenido

Para actualizar el contenido del sitio:

1. Edita los archivos en el repositorio
2. Haz commit y push a GitHub
3. **Para Vercel**: Se desplegará automáticamente
4. **Para cPanel**: Repite el proceso de construcción y subida

### Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Construcción para producción
npm run build

# Verificar errores
npm run lint

# Ver el sitio construido localmente
npm run start
```

### Actualizaciones de Dependencias

```bash
# Actualizar dependencias menores
npm update

# Verificar vulnerabilidades
npm audit

# Corregir vulnerabilidades automáticamente
npm audit fix
```

---

## Soporte

Para problemas o preguntas sobre el despliegue:
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- HostGator Support: [hostgator.com/support](https://hostgator.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

## Checklist de Despliegue

### Antes del Lanzamiento
- [ ] Actualizar información de contacto real
- [ ] Reemplazar contenido placeholder con información real
- [ ] Agregar logo de la firma
- [ ] Optimizar imágenes
- [ ] Probar en múltiples navegadores
- [ ] Verificar responsive design
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console
- [ ] Revisar y actualizar meta descriptions
- [ ] Verificar que todos los enlaces funcionen

### Post-Lanzamiento
- [ ] Enviar sitemap a Google
- [ ] Monitorear Google Search Console
- [ ] Revisar Google Analytics
- [ ] Obtener feedback de usuarios
- [ ] Planear actualizaciones de contenido
