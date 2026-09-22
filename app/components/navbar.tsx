'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Logomark, Wordmark, WhatsAppIcon } from './brand';
import { links, nav } from '../lib/site';

type Theme = 'dark' | 'light';

/* El tema vive en el atributo `data-theme` del <html>, que el script del
   layout ya fijó antes del primer pintado. El botón lo lee desde ahí en vez
   de mantener una copia en estado, así no hay dos fuentes de verdad ni un
   segundo render para corregirse. */
function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

function readTheme(): Theme {
  return document.documentElement.getAttribute('data-theme') === 'light'
    ? 'light'
    : 'dark';
}

export function Navbar() {
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const theme = useSyncExternalStore(
    subscribeTheme,
    readTheme,
    () => 'dark' as Theme
  );

  useEffect(() => {
    const onScroll = () => setCondensed(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Resalta la sección en la que está el lector. */
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Con el panel abierto la página de atrás no se desplaza. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('matutech-theme', next);
    } catch {
      /* Navegación privada: el tema vale para esta sesión y ya. */
    }
  }

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          paddingTop: condensed ? '0.5rem' : '1rem',
          paddingBottom: condensed ? '0.5rem' : '1rem',
          transition: 'padding var(--t-mid)',
        }}
      >
        <div className="shell">
          <div
            className="glass flex items-center gap-3"
            style={{
              borderRadius: 999,
              padding: '0.5rem 0.5rem 0.5rem 0.875rem',
              boxShadow: condensed ? 'var(--lift-hi)' : 'var(--lift)',
              transition: 'box-shadow var(--t-mid)',
            }}
          >
            <a
              href="#top"
              className="flex items-center gap-2.5 shrink-0"
              style={{ minHeight: '2.75rem' }}
              aria-label="matutech, ir al inicio"
            >
              <Logomark size={32} />
              <Wordmark />
            </a>

            <nav
              aria-label="Secciones"
              className="hidden lg:flex items-center gap-1 mx-auto"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active === item.href ? 'true' : undefined}
                  className="rail__item"
                  data-active={active === item.href}
                  style={{ background: 'transparent', boxShadow: 'none' }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2 ml-auto lg:ml-0">
              <button
                type="button"
                onClick={toggleTheme}
                className="neu grid place-items-center"
                style={{ width: '2.75rem', height: '2.75rem', borderRadius: 999 }}
                aria-label={
                  theme === 'dark'
                    ? 'Cambiar a modo claro'
                    : 'Cambiar a modo oscuro'
                }
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>

              <span className="hidden sm:block">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--signal btn--sm"
                  style={{ borderRadius: 999 }}
                >
                  <WhatsAppIcon size={16} />
                  Hablemos
                </a>
              </span>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="neu grid place-items-center lg:hidden"
                style={{ width: '2.75rem', height: '2.75rem', borderRadius: 999 }}
                aria-label="Abrir menú"
                aria-expanded={open}
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Velo: oscurece lo de atrás lo suficiente para que el panel mande. */}
            <button
              type="button"
              className="absolute inset-0"
              style={{
                background: 'rgba(2, 4, 8, 0.66)',
                backdropFilter: 'blur(6px)',
              }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            />

            <motion.nav
              aria-label="Secciones"
              className="glass glass--solid absolute inset-x-3 top-3 p-5"
              style={{ borderRadius: 'var(--r-xl)' }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <Logomark size={30} />
                  <Wordmark />
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="neu grid place-items-center"
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: 999,
                  }}
                  aria-label="Cerrar menú"
                >
                  <X size={18} />
                </button>
              </div>

              <ul className="flex flex-col gap-1.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center rounded-[var(--r-md)] px-4"
                      style={{
                        minHeight: '3rem',
                        fontSize: '1.0625rem',
                        fontWeight: 600,
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn--signal w-full mt-4"
              >
                <WhatsAppIcon size={17} />
                Escribime por WhatsApp
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
