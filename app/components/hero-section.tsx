'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Dumbbell,
  UtensilsCrossed,
  DatabaseBackup,
  CalendarCheck,
  Trophy,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';
import { WhatsAppIcon } from './brand';
import { links, site } from '../lib/site';
import { catalogStats } from '../lib/products';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Cinco productos reales flotando alrededor de una captura real.
 * Reemplaza los emoji de tecnologías: un ícono de una sola familia dice más
 * que una carita, y acá cada pastilla es un producto que existe.
 */
const pods = [
  {
    name: 'GymTrack',
    note: 'Google Play',
    Icon: Dumbbell,
    tone: 'var(--au-jade)',
    pos: { top: '4%', left: '0%' },
    float: 6.5,
    small: true,
  },
  {
    name: 'Menú Listo',
    note: 'Suscripción',
    Icon: UtensilsCrossed,
    tone: 'var(--signal-strong)',
    pos: { top: '24%', right: '0%' },
    float: 7.5,
    small: true,
  },
  {
    name: 'DB Guardian',
    note: 'Escritorio',
    Icon: DatabaseBackup,
    tone: 'var(--au-cyan)',
    pos: { bottom: '28%', left: '-1%' },
    float: 8,
    small: false,
  },
  {
    name: 'TurnosPro',
    note: 'En producción',
    Icon: CalendarCheck,
    tone: 'var(--au-violet)',
    pos: { bottom: '6%', right: '1%' },
    float: 6,
    small: false,
  },
  {
    name: 'GOLAZO',
    note: 'En producción',
    Icon: Trophy,
    tone: 'var(--au-magenta)',
    pos: { top: '52%', left: '-2%' },
    float: 9,
    small: false,
  },
];

const proof = [
  { value: String(catalogStats.total), label: 'Productos' },
  { value: String(catalogStats.live), label: 'En producción' },
  { value: '1', label: 'En Google Play' },
  { value: `${site.since}`, label: 'Desde' },
];

export function HeroSection() {
  /* Entrada escalonada del bloque de texto. El movimiento reducido lo resuelve
     MotionProvider: acá no se pregunta por la preferencia, porque hacerlo al
     dibujar rompería la hidratación. */
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section
      id="top"
      className="relative"
      style={{
        paddingTop: 'clamp(8rem, 18vh, 11rem)',
        paddingBottom: 'clamp(3rem, 8vw, 6rem)',
      }}
    >
      <div className="shell">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
          {/* ── Tesis ─────────────────────────────────────────────── */}
          <div className="text-center lg:text-left">
            <motion.p {...rise(0)} className="eyebrow mb-6">
              <span
                className="status__dot"
                style={{ color: 'var(--ok)', background: 'var(--ok)' }}
              />
              {site.location}
            </motion.p>

            <motion.h1 {...rise(0.06)} className="title-xl">
              Software que
              <br />
              <span className="gleam">termina publicado</span>.
            </motion.h1>

            <motion.p
              {...rise(0.14)}
              className="lede mt-6 mx-auto lg:mx-0"
            >
              Soy {site.legalName}. Diseño y construyo apps móviles, plataformas
              web y herramientas de escritorio, y las llevo hasta donde se usan
              de verdad: la tienda de aplicaciones, el navegador de tu cliente,
              la computadora del negocio.
            </motion.p>

            <motion.div
              {...rise(0.22)}
              className="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--signal"
              >
                <WhatsAppIcon size={18} />
                Contame tu proyecto
              </a>
              <a href="#productos" className="btn btn--ghost">
                Ver el catálogo
                <ArrowRight size={17} />
              </a>
            </motion.div>

            {/* Prueba antes del scroll: cuatro números que se pueden verificar. */}
            <motion.dl
              {...rise(0.3)}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto lg:mx-0"
            >
              {proof.map((item) => (
                <div key={item.label} className="well">
                  <dd className="well__value">{item.value}</dd>
                  <dt className="well__label">{item.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* ── Constelación de producto ──────────────────────────── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {/* La caja es más ancha que el teléfono: las pastillas necesitan
                margen propio o terminan encimadas sobre la captura. */}
            <div
              className="relative"
              style={{
                width: 'min(27rem, 94vw)',
                perspective: '1400px',
              }}
            >
              {/* Halo detrás del teléfono: separa el objeto del fondo. */}
              <div
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                  inset: '6% 14%',
                  background:
                    'radial-gradient(circle, color-mix(in oklab, var(--au-jade) 30%, transparent), transparent 66%)',
                  filter: 'blur(52px)',
                }}
              />

              <motion.div
                className="frame-phone relative mx-auto"
                style={{ transformStyle: 'preserve-3d', width: '62%' }}
                animate={{ rotateY: [-7, 5, -7], rotateX: [3, -2, 3] }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  src="/products/gymtrack-1.jpg"
                  alt="GymTrack: pantalla de inicio con la rutina del día y el resumen de la semana"
                  width={746}
                  height={1600}
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 58vw, 17rem"
                  className="w-full h-auto"
                />
              </motion.div>

              {pods.map((pod, i) => (
                <motion.div
                  key={pod.name}
                  className={`glass glass--solid absolute items-center gap-2 ${
                    pod.small ? 'flex' : 'hidden sm:flex'
                  }`}
                  style={{
                    ...pod.pos,
                    padding: '0.45rem 0.75rem 0.45rem 0.55rem',
                    borderRadius: 999,
                    zIndex: 3,
                  }}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.7 + i * 0.1 },
                    scale: {
                      duration: 0.5,
                      delay: 0.7 + i * 0.1,
                      ease: [0.34, 1.4, 0.64, 1],
                    },
                    y: {
                      duration: pod.float,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.4,
                    },
                  }}
                >
                  <pod.Icon
                    size={15}
                    strokeWidth={1.9}
                    style={{ color: pod.tone, flex: 'none' }}
                    aria-hidden="true"
                  />
                  <span className="leading-tight">
                    <span
                      className="block font-semibold"
                      style={{ fontSize: '0.75rem' }}
                    >
                      {pod.name}
                    </span>
                    <span
                      className="mono block"
                      style={{ fontSize: '0.5625rem', color: 'var(--fg-dim)' }}
                    >
                      {pod.note}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#productos"
          {...rise(0.5)}
          className="hidden md:flex mt-16 items-center gap-2 mx-auto w-fit"
          style={{
            color: 'var(--fg-dim)',
            fontSize: '0.75rem',
            minHeight: '2.75rem',
            padding: '0 0.75rem',
          }}
        >
          <span
            className="mono"
            style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            El catálogo
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={15} />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
