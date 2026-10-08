'use client';

import { Reveal, RevealGroup, RevealItem } from './reveal';
import { products } from '../lib/products';

/**
 * El stack, agrupado por para qué sirve cada cosa. La cuenta de proyectos sale
 * del catálogo: si mañana se suma un producto, el número se corrige solo.
 */
const groups = [
  {
    label: 'Producto web',
    tone: 'var(--au-jade)',
    items: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Radix UI',
      'Framer Motion',
    ],
  },
  {
    label: 'Móvil',
    tone: 'var(--au-cyan)',
    items: [
      'React Native',
      'Expo SDK 57',
      'Expo Router',
      'Zustand',
      'SQLite',
      'Módulos nativos Android',
    ],
  },
  {
    label: 'Datos',
    tone: 'var(--au-violet)',
    items: ['PostgreSQL', 'Prisma 7', 'Neon', 'SQLite', 'Zod'],
  },
  {
    label: 'Identidad y correo',
    tone: 'var(--au-magenta)',
    items: ['Clerk', 'Resend', 'UploadThing', 'JWT', 'API Keys'],
  },
  {
    label: 'Escritorio y visión',
    tone: 'var(--signal-strong)',
    items: ['Electron', 'Python 3.12', 'ONNX Runtime', 'OpenCV', 'PyAV'],
  },
  {
    label: 'Operación',
    tone: 'var(--au-jade)',
    items: ['Vercel', 'Cloudflare Pages', 'Docker', 'Sentry', 'Vitest', 'Git'],
  },
];

function countUses(tech: string) {
  return products.filter((p) =>
    p.stack.some((s) => s.toLowerCase().startsWith(tech.toLowerCase().slice(0, 6)))
  ).length;
}

export function StackSection() {
  return (
    <section id="stack" className="band">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <Reveal>
          <h2 className="title-lg" style={{ maxWidth: '20ch' }}>
            Herramientas elegidas,
            <br />
            no coleccionadas.
          </h2>
          <p className="lede mt-5">
            Cada una entró a la caja porque resolvió algo en un proyecto real.
            No hay tecnologías acá que no estén corriendo en alguno de los doce
            productos del catálogo.
          </p>
        </Reveal>

        {/* Un solo panel, agrupado por función. Seis tarjetas iguales acá
            repetirían el bento de Servicios y se leerían como relleno. */}
        <Reveal delay={0.06}>
          <div
            className="glass mt-10"
            style={{ padding: 'clamp(1.4rem, 3.4vw, 2.25rem)' }}
          >
            <RevealGroup
              as="ul"
              className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 list-none p-0 m-0"
            >
              {groups.map((g) => (
                <RevealItem as="li" key={g.label}>
                  <p
                    className="font-semibold"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.0625rem',
                      letterSpacing: '-0.02em',
                      paddingLeft: '0.75rem',
                      borderLeft: `2px solid ${g.tone}`,
                    }}
                  >
                    {g.label}
                  </p>
                  <ul className="mt-3.5 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="well">
              <dd className="well__value">{countUses('Next.js')}</dd>
              <dt className="well__label">Proyectos con Next.js</dt>
            </div>
            <div className="well">
              <dd className="well__value">{countUses('Prisma')}</dd>
              <dt className="well__label">Con Prisma + PostgreSQL</dt>
            </div>
            <div className="well">
              <dd className="well__value">{countUses('React Native')}</dd>
              <dt className="well__label">Apps React Native</dt>
            </div>
            <div className="well">
              <dd className="well__value">TypeScript</dd>
              <dt className="well__label">En todos, sin excepción</dt>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
