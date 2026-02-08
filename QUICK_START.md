# 🚀 Guía Rápida - Carrillo Abogados Frontend

Esta es una guía rápida para comenzar a trabajar con el proyecto.

## ⚡ Inicio Rápido

### 1. Instalación
```bash
npm install
```

### 2. Desarrollo Local
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 3. Construcción para Producción
```bash
npm run build
```

---

## 📋 Checklist de Personalización

Antes de desplegar a producción, personaliza estos elementos:

### Contenido Esencial
- [ ] **Logo**: Añade tu logo en `/public/logo.png`
- [ ] **Información de Contacto** en `app/page.tsx`:
  - [ ] Email: Cambia `contacto@carrilloabogados.com`
  - [ ] Teléfono: Cambia `+1 (555) 123-4567`
  - [ ] Dirección: Cambia `Dirección de la oficina`
- [ ] **Dominio**: Actualiza URLs en:
  - [ ] `public/robots.txt` (línea del Sitemap)
  - [ ] `app/sitemap.ts` (URL base)

### Servicios
- [ ] Revisa y personaliza los servicios en `app/page.tsx`
- [ ] Actualiza descripciones según tus especialidades

### SEO
- [ ] Google Search Console: Obtén código de verificación
- [ ] Actualiza `verification.google` en `app/layout.tsx`
- [ ] Configura Google Analytics (opcional)

### Diseño
- [ ] Personaliza colores en `tailwind.config.ts` si lo deseas
- [ ] Añade imágenes profesionales en `/public`

---

## 🌐 Despliegue Rápido

### Opción A: Vercel (Recomendado - Gratis)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu cuenta de GitHub
3. Importa este repositorio
4. ¡Vercel desplegará automáticamente!

### Opción B: cPanel (HostGator)
1. Ejecuta: `npm run build`
2. Sube el contenido de `/out` a `public_html/` en cPanel
3. Listo

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.

---

## 📞 ¿Necesitas Ayuda?

- **Documentación Completa**: Ver [README.md](./README.md)
- **Guía de Despliegue**: Ver [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## ⚠️ Notas Importantes

- El proyecto está configurado para exportación estática (`output: 'export'`)
- Esto permite despliegue tanto en Vercel como en hosting tradicional
- La primera compilación puede tardar más; las siguientes serán más rápidas
- Asegúrate de tener Node.js 18+ instalado

---

## 🎯 Próximos Pasos Recomendados

1. ✅ Personaliza el contenido (ver checklist arriba)
2. ✅ Prueba localmente con `npm run dev`
3. ✅ Despliega a Vercel o cPanel
4. ✅ Configura tu dominio personalizado
5. ✅ Envía el sitio a Google Search Console
6. ✅ Monitorea el rendimiento con Google Analytics

¡Éxito con tu sitio web! 🎉
