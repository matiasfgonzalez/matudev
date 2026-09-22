'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Check, ExternalLink, CircleDot } from 'lucide-react';
import { WhatsAppIcon } from './brand';
import { productIcon, platformIcon, accentVar } from './product-icons';
import { statusLabels, platformLabels, type Product } from '../lib/products';
import { links } from '../lib/site';

/**
 * Ficha completa del producto. Es donde se vende: primero el problema que
 * saca de encima, después por qué conviene, y recién al final qué hace.
 */
export function ProductSheet({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const Icon = productIcon[product.id];
  const PlatformIcon = platformIcon[product.platform];
  const status = statusLabels[product.status];
  const accent = accentVar[product.accent];
  const titleId = `sheet-${product.id}`;

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      /* El tabulador no debe salirse del panel mientras está abierto. */
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const shots = [
    ...(product.shot ? [product.shot] : []),
    ...(product.gallery ?? []).map((g) => ({
      ...g,
      frame: product.shot?.frame ?? ('browser' as const),
    })),
  ];

  const sheet = (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        className="absolute inset-0"
        style={{ background: 'rgba(2,4,8,0.72)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
        aria-label="Cerrar ficha"
        tabIndex={-1}
      />

      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="glass glass--solid relative w-full overflow-y-auto"
        style={
          {
            '--accent': accent,
            maxWidth: '54rem',
            maxHeight: '92dvh',
            margin: '0 auto',
            borderRadius: 'var(--r-xl)',
          } as React.CSSProperties
        }
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Franja de acento: identifica el producto sin repetir el nombre. */}
        <div
          aria-hidden="true"
          style={{
            height: 3,
            background: `linear-gradient(90deg, ${accent}, transparent)`,
          }}
        />

        <div style={{ padding: 'clamp(1.25rem, 4vw, 2.25rem)' }}>
          {/* ── Encabezado ─────────────────────────────────────────── */}
          <header className="flex items-start gap-4">
            <span
              className="neu grid place-items-center shrink-0"
              style={{ width: '3.25rem', height: '3.25rem' }}
            >
              <Icon size={23} strokeWidth={1.8} style={{ color: accent }} />
            </span>

            <div className="min-w-0 flex-1">
              <p
                className="mono"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.13em',
                  textTransform: 'uppercase',
                  color: 'var(--fg-dim)',
                }}
              >
                {product.kicker}
              </p>
              <h2 id={titleId} className="title-lg mt-1">
                {product.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-3">
                <span className={`status ${status.tone}`}>
                  <span className="status__dot" />
                  {status.label}
                </span>
                <span className="status">
                  <PlatformIcon size={12} strokeWidth={1.9} aria-hidden="true" />
                  {platformLabels[product.platform]}
                </span>
              </div>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="neu grid place-items-center shrink-0"
              style={{ width: '2.75rem', height: '2.75rem', borderRadius: 999 }}
              aria-label="Cerrar ficha"
            >
              <X size={18} />
            </button>
          </header>

          <p className="lede mt-6" style={{ maxWidth: '62ch' }}>
            {product.pitch}
          </p>

          {/* ── El problema ────────────────────────────────────────── */}
          <div
            className="neu-sunken mt-6"
            style={{ padding: '1.1rem 1.25rem' }}
          >
            <p
              className="mono"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: accent,
              }}
            >
              El problema
            </p>
            <p className="mt-2" style={{ fontSize: '0.9375rem' }}>
              {product.problem}
            </p>
          </div>

          {/* ── Capturas ───────────────────────────────────────────── */}
          {shots.length > 0 && (
            <div
              className={`mt-7 grid gap-3 ${
                shots[0].frame === 'phone'
                  ? 'grid-cols-2 sm:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {shots.map((shot) => (
                <figure
                  key={shot.src}
                  className={
                    shot.frame === 'phone' ? 'frame-phone' : 'frame-browser'
                  }
                  style={{ margin: 0 }}
                >
                  {shot.frame === 'browser' && (
                    <div className="frame-browser__bar" aria-hidden="true">
                      <span className="frame-browser__dot" />
                      <span className="frame-browser__dot" />
                      <span className="frame-browser__dot" />
                    </div>
                  )}
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.frame === 'phone' ? 746 : 1440}
                    height={shot.frame === 'phone' ? 1600 : 900}
                    sizes={
                      shot.frame === 'phone'
                        ? '(max-width: 640px) 45vw, 15rem'
                        : '(max-width: 880px) 92vw, 50rem'
                    }
                    loading="lazy"
                    className="w-full"
                    style={
                      shot.frame === 'phone'
                        ? {
                            /* Se recorta por arriba: la parte alta de la
                               pantalla es la que cuenta qué hace la app, y
                               así la ficha no se vuelve un tobogán. */
                            aspectRatio: '9 / 15',
                            objectFit: 'cover',
                            objectPosition: 'top',
                          }
                        : {
                            aspectRatio: '16 / 10',
                            objectFit: 'cover',
                            objectPosition: 'top',
                          }
                    }
                  />
                </figure>
              ))}
            </div>
          )}

          {/* ── Por qué conviene ───────────────────────────────────── */}
          <h3
            className="mono mt-8"
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--fg-dim)',
            }}
          >
            Por qué conviene
          </h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-3">
            {product.benefits.map((b) => (
              <li
                key={b.title}
                className="glass"
                style={{
                  padding: '1rem 1.1rem',
                  borderRadius: 'var(--r-md)',
                  boxShadow: 'none',
                }}
              >
                <p
                  className="font-semibold flex items-start gap-2"
                  style={{ fontSize: '0.9375rem', lineHeight: 1.4 }}
                >
                  <Check
                    size={16}
                    strokeWidth={2.4}
                    style={{ color: accent, flex: 'none', marginTop: 2 }}
                    aria-hidden="true"
                  />
                  {b.title}
                </p>
                <p
                  className="body-muted mt-1.5"
                  style={{ fontSize: '0.875rem', lineHeight: 1.6 }}
                >
                  {b.body}
                </p>
              </li>
            ))}
          </ul>

          {/* ── Qué hace ───────────────────────────────────────────── */}
          <h3
            className="mono mt-8"
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--fg-dim)',
            }}
          >
            Qué hace
          </h3>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5"
                style={{ fontSize: '0.9rem', lineHeight: 1.55 }}
              >
                <CircleDot
                  size={13}
                  strokeWidth={2}
                  style={{ color: accent, flex: 'none', marginTop: 5 }}
                  aria-hidden="true"
                />
                <span className="body-muted">{f}</span>
              </li>
            ))}
          </ul>

          {/* ── Ficha técnica ──────────────────────────────────────── */}
          <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {product.specs.map((s) => (
              <div key={s.label} className="well">
                <dd className="well__value" style={{ fontSize: '0.9375rem' }}>
                  {s.value}
                </dd>
                <dt className="well__label">{s.label}</dt>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Stack técnico">
            {product.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          {/* ── Acciones ───────────────────────────────────────────── */}
          <div
            className="mt-8 pt-6 flex flex-col sm:flex-row gap-3"
            style={{ borderTop: '1px solid var(--line)' }}
          >
            <a
              href={links.whatsappProduct(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--signal flex-1"
            >
              <WhatsAppIcon size={17} />
              Quiero algo así
            </a>
            {product.link ? (
              <a
                href={product.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost flex-1"
              >
                {product.link.label}
                <ExternalLink size={16} />
              </a>
            ) : (
              <p
                className="body-muted flex-1 grid place-items-center text-center"
                style={{ fontSize: '0.8125rem', minHeight: '3rem' }}
              >
                Sin demo pública todavía. Te la muestro en vivo cuando quieras.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  /* El <main> tiene z-index propio, así que crea contexto de apilamiento y
     encierra a la ficha debajo de la barra fija. Montarla en el body la saca
     de ahí. Sólo se abre por un clic, así que nunca se dibuja en el servidor;
     la guarda está por las dudas. */
  if (typeof document === 'undefined') return null;
  return createPortal(sheet, document.body);
}
