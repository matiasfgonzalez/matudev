import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MatuDev | Full Stack Developer — Matías Francisco González',
  description:
    'Transformo ideas en experiencias digitales. Desarrollo web moderno con React, Next.js y Node.js. Portfolio de Matías Francisco González, Full Stack Developer en Argentina.',
  keywords: [
    'MatuDev',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Desarrollo Web',
    'Argentina',
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'MatuDev | Full Stack Developer',
    description:
      'Transformo ideas en experiencias digitales impactantes. React, Next.js, Node.js.',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MatuDev | Full Stack Developer',
    description: 'Transformo ideas en experiencias digitales impactantes.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased grid-pattern">
        {children}
      </body>
    </html>
  );
}
