'use client';

import { Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Reveal } from './reveal';
import {
  WhatsAppIcon,
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from './brand';
import { links, site } from '../lib/site';

const socials = [
  { Icon: GitHubIcon, label: 'GitHub', href: links.github },
  { Icon: LinkedInIcon, label: 'LinkedIn', href: links.linkedin },
  { Icon: InstagramIcon, label: 'Instagram', href: links.instagram },
];

export function ContactSection() {
  return (
    <section id="contacto" className="band band--sunken">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <Reveal>
          <div
            className="glass glass--edge relative overflow-hidden"
            style={
              {
                '--accent': 'var(--signal)',
                padding: 'clamp(1.75rem, 5vw, 3.5rem)',
                borderRadius: 'var(--r-xl)',
              } as React.CSSProperties
            }
          >
            {/* Brillo ámbar: el único de la página, y está donde se decide. */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                top: '-40%',
                right: '-10%',
                width: '32rem',
                height: '32rem',
                background:
                  'radial-gradient(circle, color-mix(in oklab, var(--signal) 26%, transparent), transparent 66%)',
                filter: 'blur(70px)',
              }}
            />

            <div className="relative grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] gap-10 items-center">
              <div>
                <p className="eyebrow">Contacto</p>
                <h2 className="title-lg mt-5" style={{ maxWidth: '15ch' }}>
                  Contame qué necesitás.
                </h2>
                <p className="lede mt-5">
                  La primera charla no se cobra y dura media hora. Salís de ahí
                  sabiendo si tu idea se puede hacer, cuánto cuesta más o menos
                  y cuánto tarda. Si no es para mí, te lo digo en esa llamada.
                </p>

                <ul className="mt-7 grid sm:grid-cols-2 gap-2.5 list-none p-0">
                  <li className="well">
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={14}
                        strokeWidth={1.9}
                        style={{ color: 'var(--signal-strong)' }}
                        aria-hidden="true"
                      />
                      <span className="well__value" style={{ fontSize: '0.875rem' }}>
                        {site.location}
                      </span>
                    </div>
                    <p className="well__label">Remoto a todo el país</p>
                  </li>
                  <li className="well">
                    <div className="flex items-center gap-2">
                      <Clock
                        size={14}
                        strokeWidth={1.9}
                        style={{ color: 'var(--signal-strong)' }}
                        aria-hidden="true"
                      />
                      <span className="well__value" style={{ fontSize: '0.875rem' }}>
                        {site.timezone}
                      </span>
                    </div>
                    <p className="well__label">Respuesta el mismo día hábil</p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                {/* Una sola acción principal por pantalla: esta. */}
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--signal"
                  style={{
                    minHeight: '4.5rem',
                    fontSize: '1.0625rem',
                    borderRadius: 'var(--r-lg)',
                  }}
                >
                  <WhatsAppIcon size={22} />
                  Escribime por WhatsApp
                </a>
                <p
                  className="mono text-center"
                  style={{ fontSize: '0.8125rem', color: 'var(--fg-dim)' }}
                >
                  {site.phoneDisplay}
                </p>

                <a
                  href={links.email}
                  className="glass flex items-center gap-3 mt-2"
                  style={{
                    padding: '1rem 1.15rem',
                    borderRadius: 'var(--r-md)',
                    boxShadow: 'none',
                  }}
                >
                  <span
                    className="neu grid place-items-center shrink-0"
                    style={{ width: '2.5rem', height: '2.5rem' }}
                  >
                    <Mail size={17} strokeWidth={1.9} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold" style={{ fontSize: '0.9375rem' }}>
                      Prefiero el correo
                    </span>
                    <span
                      className="mono block truncate"
                      style={{ fontSize: '0.75rem', color: 'var(--fg-dim)' }}
                    >
                      {site.email}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    style={{ color: 'var(--fg-dim)', flex: 'none' }}
                    aria-hidden="true"
                  />
                </a>

                <ul className="flex gap-2.5 mt-2 list-none p-0">
                  {socials.map((s) => (
                    <li key={s.label} className="flex-1">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu grid place-items-center w-full"
                        style={{ height: '3rem' }}
                        aria-label={`${s.label} de Matías González`}
                      >
                        <s.Icon size={18} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
