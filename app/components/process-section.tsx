'use client';

import { Check } from 'lucide-react';
import { Reveal, RevealGroup, RevealItem } from './reveal';

/**
 * Acá los números sí corresponden: es una secuencia real y el orden importa.
 * Nadie llega al paso 3 sin pasar por el 2.
 */
const steps = [
  {
    n: '01',
    title: 'Conversamos',
    time: '30 minutos',
    body: 'Me contás qué problema tenés y a quién le duele. No hablamos de tecnología todavía. Si lo que necesitás no es un desarrollo, te lo digo en esa llamada.',
  },
  {
    n: '02',
    title: 'Propuesta cerrada',
    time: '2 a 4 días',
    body: 'Te mando por escrito el alcance, el plazo y el precio. Qué entra, qué no entra y qué se puede agregar después. Sin ese documento no arranco.',
  },
  {
    n: '03',
    title: 'Construcción a la vista',
    time: 'Según alcance',
    body: 'Trabajo en entregas que podés abrir y probar. No esperás al final para enterarte de cómo quedó: lo vas viendo y lo vas corrigiendo.',
  },
  {
    n: '04',
    title: 'Publicación',
    time: '1 a 2 semanas',
    body: 'Despliegue, dominio, correos, respaldos y —si es una app— la ficha de tienda con sus capturas y su política de privacidad. Te entrego el código y las llaves.',
  },
  {
    n: '05',
    title: 'Acompañamiento',
    time: 'Mientras lo uses',
    body: 'El producto que se usa cambia. Quedo disponible para correcciones y mejoras, con prioridades acordadas y no a las corridas.',
  },
];

/** La contraparte: sin esto el proyecto se estira y nadie sabe por qué. */
const needs = [
  'Una persona que decida, no un comité',
  'Los datos que hoy ya tenés, aunque estén en Excel',
  'Respuesta en 48 horas cuando te pregunto algo',
  'Decir que no te gusta mientras se puede cambiar barato',
];

export function ProcessSection() {
  return (
    <section id="proceso" className="band band--sunken">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-14">
          <Reveal>
            <p className="eyebrow">Proceso</p>
            <h2 className="title-lg mt-5" style={{ maxWidth: '14ch' }}>
              Cómo se trabaja acá.
            </h2>
            <p className="lede mt-5">
              Cinco pasos, en este orden. La parte que más ahorra plata es la
              segunda: ponerse de acuerdo por escrito antes de escribir la
              primera línea de código.
            </p>

            {/* La otra mitad del trato: qué tiene que poner el cliente. */}
            <div
              className="neu-sunken mt-8"
              style={{ padding: '1.25rem 1.4rem' }}
            >
              <p
                className="mono"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: 'var(--signal-strong)',
                }}
              >
                Lo que necesito de vos
              </p>
              <ul className="mt-3 flex flex-col gap-2 list-none p-0">
                {needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-2.5 body-muted"
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
                    {need}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <RevealGroup as="ol" className="list-none p-0 m-0" step={0.08}>
            {steps.map((step, i) => (
              <RevealItem as="li" key={step.n}>
                <div
                  className="relative flex gap-5 pb-8 last:pb-0"
                  style={{ paddingLeft: '0.25rem' }}
                >
                  {/* Hilo que une los pasos: la secuencia se ve, no se deduce. */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        left: '1.85rem',
                        top: '3.5rem',
                        bottom: '0.25rem',
                        width: 1,
                        background:
                          'linear-gradient(to bottom, var(--line-strong), transparent)',
                      }}
                    />
                  )}

                  <span
                    className="neu grid place-items-center shrink-0 mono"
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: 999,
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: 'var(--signal-strong)',
                    }}
                  >
                    {step.n}
                  </span>

                  <div className="min-w-0 pt-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="title-md" style={{ fontSize: '1.1875rem' }}>
                        {step.title}
                      </h3>
                      <span
                        className="mono"
                        style={{
                          fontSize: '0.6875rem',
                          color: 'var(--fg-dim)',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {step.time}
                      </span>
                    </div>
                    <p
                      className="body-muted mt-2"
                      style={{
                        fontSize: '0.9375rem',
                        lineHeight: 1.64,
                        maxWidth: '58ch',
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
