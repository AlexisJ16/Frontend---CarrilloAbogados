# Guía de Deployment - cPanel/HostGator

## Estado: ✅ Listo para Deploy

Landing page compilada con archivos estáticos en carpeta `out/` lista para subir a cPanel.

---

## 📦 Pre-requisitos

1. **Build ejecutado:**
   ```bash
   npm run build
   ```
   Esto genera la carpeta `out/` con todos los archivos estáticos.

2. **Acceso a cPanel:**
   - URL: `https://tu-dominio.com/cpanel` o `https://tu-hosting.com:2083`
   - Usuario y contraseña de HostGator

---

## 🚀 Proceso de Deployment

### Paso 1: Compilar el Proyecto

```bash
cd "C:\GitHub Desktop\Frontend---CarrilloAbogados"
npm run build
```

**Resultado:** Carpeta `out/` con:
- `index.html` (página principal)
- `404.html` (página de error)
- `_next/` (JS, CSS, assets)
- `logo-carrillo.jpg`
- `robots.txt`, `sitemap.xml`

### Paso 2: Acceder a cPanel File Manager

1. Iniciar sesión en cPanel de HostGator
2. Buscar "File Manager" o "Administrador de Archivos"
3. Navegar a `public_html/` (dominio principal)
   - **Arrastra TODA la carpeta `out/`** desde tu computadora
   - O selecciona todos los archivos dentro de `out/` y súbelos
   
6. **IMPORTANTE: Los archivos deben estar EN LA RAÍZ**
   - `index.html` debe estar directamente en `public_html/`, NO en `public_html/out/`
   - Si subes la carpeta `out`, luego **mueve todo su contenido** a `public_html/`

7. **Verifica la estructura**
   ```
   public_html/
   ├── index.html
   ├── 404.html
   ├── sitemap.xml
   ├── robots.txt
   ├── logo-carrillo.svg
   └── _next/
   ```

8. **Visita tu dominio**
   - Abre tu navegador
   - Ve a `https://carrilloabgd.com`
   - ¡Deberías ver la landing page "Coming Soon"! 🎉

---

### Opción 2: Usando FTP (FileZilla)

1. **Descarga FileZilla** (si no lo tienes)
   - https://filezilla-project.org/

2. **Obtén las credenciales FTP de cPanel**
   - En cPanel, busca "Cuentas FTP" o "FTP Accounts"
   - Usa las credenciales principales o crea una nueva cuenta

3. **Conecta por FTP**
   - Host: `ftp.carrilloabgd.com` (o la IP de tu servidor)
   - Usuario: tu usuario de cPanel
   - Contraseña: tu contraseña FTP
   - Puerto: 21

4. **Navega a `public_html/`** en el panel derecho

5. **Sube los archivos**
   - En el panel izquierdo (tu computadora), navega a la carpeta `out/`
   - Selecciona TODOS los archivos y carpetas dentro de `out/`
   - Arrástralos al panel derecho (`public_html/`)

6. **Verifica y visita tu dominio**

---

## 🔧 Configuración Adicional (Opcional)

### Configurar HTTPS

Si tu dominio no tiene HTTPS configurado:

1. En cPanel, busca "SSL/TLS Status" o "Let's Encrypt"
2. Activa el certificado SSL gratuito para tu dominio
3. Espera 5-10 minutos para que se active
4. Tu sitio estará disponible en `https://carrilloabgd.com`

### Redirección WWW a No-WWW (o viceversa)

Si quieres forzar una versión específica del dominio:

1. Crea o edita el archivo `.htaccess` en `public_html/`
2. Agrega estas líneas:

**Para forzar HTTPS y sin WWW:**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\. [NC]
RewriteRule ^(.*)$ https://carrilloabgd.com/$1 [L,R=301]
```

---

## ✨ Características Implementadas

### ✅ Diseño y Estilo
- Paleta de colores oficial de Carrillo Abogados
- Fuente Lato de Google Fonts
- Gradientes animados de fondo
- Efectos de blur y glass morphism
- Responsive para móvil, tablet y desktop

### ✅ Funcionalidades
- **Countdown Timer** dinámico hasta el 27 de Marzo de 2026
- **Formulario de suscripción** para capturar leads
- Botones de contacto directo por email
- Animaciones suaves (fade-in, slide-up, pulse)
- Logo oficial de Carrillo Abogados

### ✅ SEO Optimizado
- Meta tags completos
- Open Graph para redes sociales
- Sitemap.xml generado
- Robots.txt configurado
- Palabras clave estratégicas

### ✅ Información Incluida
- Mensaje principal: "El futuro legal ahora es digital"
- 23 años de experiencia destacados
- 5 áreas de práctica mencionadas
- Información de contacto completa
- Dirección física (Torre de Cali)

---

## 🎨 Vista Previa Local

Si quieres ver la página antes de subirla:

```bash
# Navega al proyecto
cd "c:\GitHub Desktop\Frontend---CarrilloAbogados"

# Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en: `http://localhost:3000`

---

## 🔄 Actualizaciones Futuras

Si necesitas hacer cambios:

1. Edita los archivos necesarios en el proyecto
2. Ejecuta `npm run build`
3. Sube nuevamente los archivos de la carpeta `out/` a cPanel
4. Reemplaza los archivos antiguos

---

## 📧 Información de Contacto en la Página

- Email principal: director@carrilloabgd.com
- Email asesoría: asesora@carrilloabgd.com
- Dirección: Cra. 40 #27-26, Torre de Cali, Piso 21, Oficina 2102A, Cali

---

## 🎯 Próximos Pasos

1. ✅ **Subir los archivos a cPanel** (siguiendo esta guía)
2. ⏳ **Configurar SSL/HTTPS** (si no está activo)
3. ⏳ **Probar el formulario de suscripción** (conectar a mailchimp, sendgrid, etc.)
4. ⏳ **Compartir el link con el equipo**
5. ⏳ **Activar Google Analytics** (opcional)

---

## ❓ Solución de Problemas

### Problema: Veo una página en blanco
- Verifica que `index.html` esté en `public_html/`, no en subcarpetas
- Limpia el caché del navegador (Ctrl + Shift + R)

### Problema: Los estilos no cargan
- Verifica que la carpeta `_next/` esté completa en el servidor
- Revisa los permisos de archivos (644 para archivos, 755 para carpetas)

### Problema: El logo no aparece
- Verifica que `logo-carrillo.svg` esté en `public_html/`
- Si tienes el logo PNG original, reemplaza la extensión en el código

---

## 🚀 ¡Listo para el Lanzamiento!

Tu landing page está profesional, optimizada y lista para generar expectativa. Una vez subida a cPanel, estará visible al mundo y empezará a capturar la atención de potenciales clientes.

**¿Necesitas ayuda?** Solo avísame y te ayudo con cualquier ajuste.

---

**Desarrollado con ❤️ para Carrillo ABGD SAS**
