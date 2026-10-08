'use client';

import {
  Rocket,
  Smartphone,
  Boxes,
  LineChart,
  Wrench,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './reveal';
import { WhatsAppIcon } from './brand';
import { links } from '../lib/site';

const services = [
  {
    Icon: Rocket,
    tone: 'var(--au-jade)',
    title: 'Producto a medida, de cero a producción',
    body: 'Tenés una idea o un proceso que hoy se resuelve con planillas. Lo convierto en un producto que funciona, con su panel, sus usuarios y su despliegue.',
    includes: [
      'Relevamiento del problema real, no de la lista de funciones',
      'Diseño de interfaz y de base de datos',
      'Despliegue, dominio y puesta en marcha',
      'Código fuente tuyo desde el primer día',
    ],
  },
  {
    Icon: Smartphone,
    tone: 'var(--au-cyan)',
    title: 'App móvil publicada en la tienda',
    body: 'No termina cuando compila: termina cuando está en Google Play. Ya recorrí ese camino con GymTrack, permisos y rechazos incluidos.',
    includes: [
      'App Android con React Native y Expo',
      'Build firmado y ficha de tienda con capturas',
      'Política de privacidad y cumplimiento de permisos',
      'Modo sin conexión cuando el uso lo pide',
    ],
  },
  {
    Icon: Boxes,
    tone: 'var(--au-violet)',
    title: 'Sistema de gestión interno',
    body: 'Turnos, pacientes, cuotas, stock, socios o expedientes. Con roles, permisos y el historial de quién hizo qué.',
    includes: [
      'Roles y permisos diferenciados',
      'Panel con las métricas que mirás todos los días',
      'Importación de lo que hoy vive en Excel',
      'Respaldos y registro de auditoría',
    ],
  },
  {
    Icon: LineChart,
    tone: 'var(--signal-strong)',
    title: 'Landing que trae consultas',
    body: 'Una página rápida, clara y pensada para que el visitante termine escribiéndote, no para que admire animaciones.',
    includes: [
      'Carga rápida y buen puntaje en Core Web Vitals',
      'Metadatos, sitemap y vista previa al compartir',
      'Contacto directo por WhatsApp y correo',
      'Medición de visitas y conversiones',
    ],
  },
  {
    Icon: Wrench,
    tone: 'var(--au-magenta)',
    title: 'Rescate de proyectos',
    body: 'Un desarrollo que quedó a mitad de camino, sin documentación y sin quien lo mantenga. Lo tomo, lo entiendo y lo termino.',
    includes: [
      'Auditoría del código y del estado real',
      'Informe honesto: qué se salva y qué conviene rehacer',
      'Actualización de dependencias y seguridad',
      'Documentación para que no vuelva a pasar',
    ],
  },
  {
    Icon: ShieldCheck,
    tone: 'var(--au-jade)',
    title: 'Mantenimiento y evolución',
    body: 'El software que se usa cambia. Acompaño el producto después de entregarlo, con mejoras planificadas y no a las corridas.',
    includes: [
      'Correcciones y mejoras con prioridad acordada',
      'Monitoreo de errores en producción',
      'Actualizaciones de seguridad',
      'Respaldos verificados, no supuestos',
    ],
  },
];

/** Lo que va en todos los proyectos, se pida o no. */
const baseline = [
  'Responsive real, probado desde 360 px',
  'Modo claro y oscuro',
  'Accesible por teclado y lector de pantalla',
  'Código fuente y documentación',
  'Alcance, plazo y precio cerrados antes de empezar',
];

export function ServicesSection() {
  return (
    <section id="servicios" className="band">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <Reveal>
          <h2 className="title-lg" style={{ maxWidth: '16ch' }}>
            En qué te puedo ayudar.
          </h2>
          <p className="lede mt-5">
            Cinco formas de trabajar juntos, más una de quedarnos. Todas
            arrancan con la misma conversación: qué problema tenés y a quién le
            duele.
          </p>
        </Reveal>

        {/* Bento con ritmo: ancha + chica, un trío, y el cierre a lo ancho.
            Las anchas son el punto de entrada y la promesa de después. */}
        <RevealGroup
          as="ul"
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 list-none p-0"
        >
          {services.map((s, i) => {
            const wide = i === 0 || i === services.length - 1;
            return (
              <RevealItem
                as="li"
                key={s.title}
                className={`h-full ${
                  wide
                    ? i === 0
                      ? 'md:col-span-2'
                      : 'md:col-span-2 lg:col-span-3'
                    : ''
                }`}
              >
                <article
                  className={`glass glass--edge h-full ${
                    wide ? 'md:grid md:grid-cols-2 md:gap-8 md:items-start' : 'flex flex-col'
                  }`}
                  style={
                    {
                      '--accent': s.tone,
                      padding: wide
                        ? 'clamp(1.4rem, 3.4vw, 2.1rem)'
                        : 'clamp(1.25rem, 3vw, 1.6rem)',
                      /* Las anchas llevan una luz del color del servicio: le
                         da cuerpo al bento sin sumar otro acento. */
                      ...(wide && {
                        background: `radial-gradient(120% 140% at 0% 0%, color-mix(in oklab, ${s.tone} 13%, transparent), transparent 55%), var(--glass-bg)`,
                      }),
                    } as React.CSSProperties
                  }
                >
                  <div>
                    <span
                      className="neu grid place-items-center"
                      style={{
                        width: wide ? '3.25rem' : '2.875rem',
                        height: wide ? '3.25rem' : '2.875rem',
                      }}
                    >
                      <s.Icon
                        size={wide ? 22 : 20}
                        strokeWidth={1.8}
                        style={{ color: s.tone }}
                      />
                    </span>

                    <h3
                      className="title-md mt-5"
                      style={{
                        fontSize: wide ? '1.5rem' : '1.1875rem',
                        lineHeight: 1.2,
                        maxWidth: '22ch',
                      }}
                    >
                      {s.title}
                    </h3>

                    <p
                      className="body-muted mt-2.5"
                      style={{
                        fontSize: wide ? '1rem' : '0.9375rem',
                        lineHeight: 1.62,
                        maxWidth: '52ch',
                      }}
                    >
                      {s.body}
                    </p>
                  </div>

                  <ul
                    className={`flex flex-col gap-1.5 ${
                      wide ? 'mt-5 md:mt-1 md:gap-2.5' : 'mt-4'
                    }`}
                  >
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2"
                        style={{
                          fontSize: wide ? '0.9063rem' : '0.8438rem',
                          lineHeight: 1.5,
                        }}
                      >
                        <Check
                          size={14}
                          strokeWidth={2.4}
                          style={{ color: s.tone, flex: 'none', marginTop: 3 }}
                          aria-hidden="true"
                        />
                        <span className="body-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div
            className="neu-sunken mt-8 flex flex-col lg:flex-row lg:items-center gap-5"
            style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            <div className="lg:flex-1">
              <p
                className="mono"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: 'var(--signal-strong)',
                }}
              >
                Incluido siempre
              </p>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {baseline.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 body-muted"
                    style={{ fontSize: '0.875rem', lineHeight: 1.55 }}
                  >
                    <Check
                      size={14}
                      strokeWidth={2.4}
                      style={{
                        color: 'var(--signal-strong)',
                        flex: 'none',
                        marginTop: 4,
                      }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--signal shrink-0"
            >
              <WhatsAppIcon size={17} />
              Escribime por WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
