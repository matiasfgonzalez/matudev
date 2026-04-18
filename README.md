<div align="center">
  <img src="./public/images/hero-developer-sin-fondo.png" alt="MatuDev" width="200"/>
  
  # 🚀 MatuDev Portfolio

### Desarrollador Full Stack apasionado por crear experiencias digitales que impactan y transforman negocios

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.38-FF0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

[🌐 Ver Demo en Vivo](#) • [📧 Contacto](mailto:matiasgonzalez.652@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/matias-gonzalez-1a75b6223/)

</div>

---

## ✨ Características Principales

🎨 **Diseño Moderno & Responsivo**

- Diseño glassmorphism con efectos neon
- Tema oscuro/claro con transiciones suaves
- Completamente responsive para todos los dispositivos

⚡ **Animaciones Fluidas**

- Animaciones scroll-reveal con Framer Motion
- Transiciones suaves y naturales
- Efectos interactivos en hover y tap

🎯 **Optimizado para Conversión**

- CTA estratégicamente ubicados
- Integración directa con WhatsApp
- Formularios de contacto y enlaces sociales

🚀 **Performance Optimizado**

- Server-side rendering con Next.js
- Imágenes optimizadas con next/image
- Carga rápida y SEO-friendly

---

## 🛠️ Stack Tecnológico

### Frontend

- **Framework:** Next.js 16.2 (App Router)
- **UI Library:** React 19.2
- **Lenguaje:** TypeScript 5.0
- **Estilos:** Tailwind CSS 4.0
- **Animaciones:** Framer Motion 12.38
- **Iconos:** Lucide React 1.8

### Herramientas de Desarrollo

- **Linter:** ESLint 9 + eslint-config-next
- **PostCSS:** @tailwindcss/postcss
- **Control de Versiones:** Git

---

## 📁 Estructura del Proyecto

```
matudev/
├── app/
│   ├── components/
│   │   ├── about-section.tsx      # Sección sobre mí
│   │   ├── contact-section.tsx    # Contacto y redes sociales
│   │   ├── cta-section.tsx        # Call-to-actions
│   │   ├── footer.tsx             # Footer del sitio
│   │   ├── hero-section.tsx       # Hero principal
│   │   ├── navbar.tsx             # Navegación
│   │   ├── particles-background.tsx # Fondo animado
│   │   ├── projects-section.tsx   # Portafolio de proyectos
│   │   ├── scroll-animations.tsx  # Componentes de animación
│   │   ├── services-section.tsx   # Servicios ofrecidos
│   │   ├── skills-section.tsx     # Habilidades técnicas
│   │   ├── testimonials-section.tsx # Testimonios (opcional)
│   │   └── theme-provider.tsx     # Provider de tema claro/oscuro
│   ├── globals.css               # Estilos globales y variables CSS
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Página principal
├── public/
│   └── images/                   # Recursos visuales
├── .gitignore
├── eslint.config.mjs             # Configuración ESLint
├── next.config.ts                # Configuración Next.js
├── package.json
├── postcss.config.mjs            # Configuración PostCSS
├── tailwind.config.ts            # Configuración Tailwind
└── tsconfig.json                 # Configuración TypeScript
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20+ instalado
- npm, yarn, pnpm o bun

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/matiasfgonzalez/matudev.git
   cd matudev
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Ejecutar el servidor de desarrollo**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**

   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

---

## 📜 Scripts Disponibles

```bash
# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Ejecutar versión de producción
npm run start

# Ejecutar linter
npm run lint
```

---

## 🎨 Personalización

### Tema y Colores

Los colores y variables del sistema de diseño se encuentran en `app/globals.css`:

```css
:root {
  --neon-blue: #3b82f6;
  --neon-violet: #8b5cf6;
  --neon-cyan: #06b6d4;
  --neon-orange: #f97316;
  --neon-pink: #ec4899;
  --neon-green: #10b981;
}
```

### Componentes Reutilizables

El proyecto incluye componentes de animación reutilizables en `scroll-animations.tsx`:

- `<ScrollReveal>` - Revela elementos al hacer scroll
- `<StaggerContainer>` - Contenedor con animación escalonada
- `<StaggerItem>` - Items con entrada escalonada

---

## 🌐 Deployment

### Vercel (Recomendado)

La forma más fácil de deployar es usando [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/matiasfgonzalez/matudev)

### Otras Plataformas

El proyecto también puede ser deployado en:

- Netlify
- Railway
- AWS Amplify
- Cloudflare Pages

Consulta la [documentación de Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

---

## 📸 Screenshots

<div align="center">
  <img src="./public/images/about-portrait.png" alt="About Section" width="400"/>
  
  *Sección profesional con diseño glassmorphism*
</div>

---

## 🎯 Secciones del Portfolio

- **Hero** - Presentación impactante con CTA
- **Sobre Mí** - Información profesional y personal
- **Habilidades** - Stack técnico organizado por categorías
- **Proyectos** - Portfolio de trabajos destacados
- **Servicios** - Servicios ofrecidos con detalles
- **Call-to-Action** - Invitaciones estratégicas a la acción
- **Contacto** - Múltiples formas de contacto (Email, WhatsApp, Redes)

---

## 🤝 Contacto

<div align="center">

### Matías González

**Desarrollador Full Stack**

📧 [matiasgonzalez.652@gmail.com](mailto:matiasgonzalez.652@gmail.com)

📱 [WhatsApp](https://wa.me/5493454432164)

🔗 [LinkedIn](https://www.linkedin.com/in/matias-gonzalez-1a75b6223/) • [GitHub](https://github.com/matiasfgonzalez) • [Instagram](https://instagram.com/matute_2gonzalez)

📍 Paraná - Entre Ríos, Argentina 🇦🇷

</div>

---

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

<div align="center">

**Hecho con ❤️ y ☕ por [MatuDev](https://github.com/matiasfgonzalez)**

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

</div>
