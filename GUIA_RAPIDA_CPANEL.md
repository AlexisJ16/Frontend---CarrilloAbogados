# ⚡ GUÍA RÁPIDA - SUBIR A CPANEL EN 5 PASOS

## 📂 PASO 1: Prepara los archivos

Los archivos estáticos ya están listos en la carpeta:
```
c:\GitHub Desktop\Frontend---CarrilloAbogados\out\
```

Esta carpeta contiene:
- ✅ index.html (página principal)
- ✅ logo-carrillo.svg (logo)
- ✅ _next/ (estilos y scripts)
- ✅ robots.txt, sitemap.xml

---

## 🌐 PASO 2: Accede a cPanel

1. Ve a: `https://carrilloabgd.com/cpanel` o el link que te dio HostGator
2. Ingresa tu usuario y contraseña
3. Una vez dentro, busca **"Administrador de archivos"** o **"File Manager"**

---

## 🗂️ PASO 3: Ve a la carpeta correcta

1. En el Administrador de Archivos, busca la carpeta: **`public_html`**
2. Haz doble clic para abrirla
3. **IMPORTANTE:** Esta debe quedar vacía. Si hay archivos, selecciónalos todos y elimínalos

---

## ⬆️ PASO 4: Sube los archivos

### Método A: Arrastrar y soltar (MÁS FÁCIL)
1. Abre en tu computadora: `c:\GitHub Desktop\Frontend---CarrilloAbogados\out\`
2. Selecciona **TODO** lo que está DENTRO de la carpeta `out`
3. Arrastra TODO a la ventana de cPanel (a `public_html`)
4. Espera a que termine de subir

### Método B: Usando el botón Upload
1. En cPanel, click en el botón **"Upload"** o **"Cargar"** (arriba a la derecha)
2. Click en **"Select File"** o arrastra los archivos
3. Sube TODOS los archivos de la carpeta `out`

---

## ✅ PASO 5: Verifica la estructura

Dentro de `public_html` debes tener:
```
public_html/
├── index.html          ← ¡MUY IMPORTANTE!
├── 404.html
├── logo-carrillo.svg
├── robots.txt
├── sitemap.xml
├── _next/
│   ├── static/
│   └── ...
└── ...
```

**⚠️ CRÍTICO:** 
- El archivo `index.html` DEBE estar directamente en `public_html/`
- NO debe estar en `public_html/out/index.html`
- Si ves una carpeta `out` dentro de `public_html`, MUEVE todo su contenido a la raíz

---

## 🎉 ¡LISTO!

Ahora ve a tu navegador y escribe:
```
https://carrilloabgd.com
```

Deberías ver tu landing page "Coming Soon" con:
- ✅ Logo de Carrillo Abogados
- ✅ Countdown timer funcionando
- ✅ Formulario de suscripción
- ✅ Botones de contacto
- ✅ Información del despacho

---

## 🔧 PROBLEMAS COMUNES

### ❌ Veo una página en blanco
**Solución:** 
- Verifica que `index.html` esté en `public_html/`, no en subcarpetas
- Presiona Ctrl + Shift + R para recargar sin caché

### ❌ Los estilos no cargan (página sin colores)
**Solución:** 
- Verifica que la carpeta `_next/` esté completa en el servidor
- Revisa que hayas subido TODOS los archivos de `out/`

### ❌ El logo no aparece
**Solución:** 
- Verifica que `logo-carrillo.svg` esté en `public_html/`
- Si tienes el logo PNG original, súbelo y avísame para cambiar el código

### ❌ Aparece un error 404
**Solución:** 
- El dominio puede tardar unos minutos en propagar
- Verifica que el archivo se llame exactamente `index.html` (minúsculas)

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:
1. Toma una captura de pantalla de lo que ves
2. Toma una captura del Administrador de Archivos (estructura de carpetas)
3. Avísame y te ayudo a resolver el problema

---

## 🚀 FUNCIONES EXTRA (OPCIONAL)

### Configurar HTTPS (Certificado SSL)
1. En cPanel, busca **"SSL/TLS Status"** o **"Let's Encrypt"**
2. Encuentra tu dominio `carrilloabgd.com`
3. Click en **"Run AutoSSL"** o **"Issue"**
4. Espera 5-10 minutos
5. Tu sitio estará en `https://carrilloabgd.com` (candado verde 🔒)

### Forzar HTTPS (Redirección)
1. En el Administrador de Archivos, crea un archivo llamado `.htaccess` en `public_html/`
2. Agrega este contenido:
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://carrilloabgd.com/$1 [L,R=301]
```
3. Guarda el archivo
4. Ahora todos los visitantes serán redirigidos a HTTPS automáticamente

---

**¡Tu landing page está lista para impactar! 🚀**

La expectativa comienza ahora. Los futuros clientes verán que Carrillo ABGD está innovando y preparando algo grande.

**Dominio:** carrilloabgd.com  
**Lanzamiento:** 27 de Marzo de 2026  
**Estado:** ✅ LISTO PARA DESPLEGAR
