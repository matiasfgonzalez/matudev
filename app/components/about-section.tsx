'use client';

import Image from 'next/image';
import { MapPin, Clock, Zap } from 'lucide-react';
import { Reveal } from './reveal';
import { site } from '../lib/site';

const facts = [
  { Icon: MapPin, label: 'Paraná, Entre Ríos', note: 'Trabajo remoto a todo el país' },
  { Icon: Clock, label: site.timezone, note: 'Respondo el mismo día hábil' },
  { Icon: Zap, label: 'Español', note: 'Sin traducir ni intermediarios' },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="band band--sunken">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-10 lg:gap-14 items-center">
          <Reveal>
            <div className="relative mx-auto" style={{ maxWidth: '22rem' }}>
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, color-mix(in oklab, var(--au-violet) 38%, transparent), transparent 70%)',
                  filter: 'blur(58px)',
                }}
              />
              <div
                className="glass relative overflow-hidden"
                style={{ borderRadius: 'var(--r-xl)' }}
              >
                <Image
                  src="/images/about-portrait.png"
                  alt={`${site.legalName}, desarrollador detrás de matutech`}
                  width={760}
                  height={860}
                  sizes="(max-width: 1024px) 80vw, 22rem"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="eyebrow">Sobre mí</p>
            <h2 className="title-lg mt-5" style={{ maxWidth: '18ch' }}>
              Matías González,
              <br />
              el que responde.
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              <p className="lede">
                Trabajo solo y eso es parte de lo que ofrezco: hablás con la
                misma persona que escribe el código, que decide cómo se ve y
                que aprieta el botón de publicar. No hay cuenta que pasar ni
                versión del pedido que se pierda en el camino.
              </p>
              <p className="lede">
                Me interesa lo que pasa después de entregar. Por eso el catálogo
                de acá arriba está lleno de cosas que están funcionando, y no de
                maquetas: una app en Google Play con gente real usándola, un
                sistema de cuotas que un club abre todos los meses, una
                herramienta de respaldos que alguien confía con su base de
                datos.
              </p>
              <p className="lede">
                Y cuando algo no da, lo digo. Preferir un “esto no te conviene”
                temprano a una factura tarde es la parte menos vistosa del
                oficio y la que más cuida al que paga.
              </p>
            </div>

            <ul className="mt-7 grid sm:grid-cols-3 gap-2.5 list-none p-0">
              {facts.map((f) => (
                <li key={f.label} className="well">
                  <div className="flex items-center gap-2">
                    <f.Icon
                      size={14}
                      strokeWidth={1.9}
                      style={{ color: 'var(--signal-strong)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="well__value"
                      style={{ fontSize: '0.875rem' }}
                    >
                      {f.label}
                    </span>
                  </div>
                  <p className="well__label">{f.note}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
