import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Manrope, JetBrains_Mono } from 'next/font/google';
import { site } from './lib/site';
import './globals.css';

/* Display: grotesca variable con eje óptico — a 5rem no se ve igual que a 1rem,
   que es justamente lo que se le pide a una tipografía de titular. */
const bricolage = Bricolage_Grotesque({
  variable: '--font-bricolage',
  subsets: ['latin'],
  axes: ['opsz'],
  display: 'swap',
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — ${site.tagline}`,
    template: `%s · ${site.brand}`,
  },
  description:
    'Diseño y construyo apps y plataformas que llegan a producción: una app publicada en Google Play, sistemas de gestión en uso y herramientas de escritorio. Desarrollo a medida desde Paraná, Entre Ríos.',
  applicationName: site.brand,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  keywords: [
    'matutech',
    'desarrollo de software Argentina',
    'aplicaciones a medida',
    'desarrollo web Paraná',
    'Next.js',
    'React Native',
    'aplicaciones móviles',
    'sistemas de gestión',
    'Matías González',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — ${site.tagline}`,
    description:
      'Catálogo de productos y desarrollos: apps móviles, plataformas web y herramientas de escritorio, con lo que resuelve cada uno.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.brand} — ${site.tagline}`,
    description:
      'Apps y plataformas que salen a producción. Catálogo, beneficios y stack.',
  },
  robots: { index: true, follow: true },
};

/* En Next 16 el viewport es su propio export; dentro de `metadata` está
   deprecado desde la 14. */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#04060b' },
    { media: '(prefers-color-scheme: light)', color: '#e7ebf3' },
  ],
};

/* Fija el tema antes del primer pintado. Sin esto, quien eligió modo claro ve
   un destello oscuro en cada carga. */
const themeBootstrap = `(function(){try{var t=localStorage.getItem('matutech-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      data-theme="dark"
      className={`${bricolage.variable} ${manrope.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        {/* Red de seguridad: las animaciones de entrada dejan el contenido en
            opacity 0 hasta que corre el JavaScript. Si no corre, esto lo
            devuelve a la vista en lugar de mostrar una página en blanco. */}
        <noscript>
          <style>{`[style*="opacity"]{opacity:1!important}[style*="transform"]{transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
