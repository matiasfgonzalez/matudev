'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WhatsAppIcon } from './brand';
import { links } from '../lib/site';

/**
 * Acceso permanente al canal que más se usa. Aparece recién después del hero,
 * donde ya hay un botón igual, para no repetir la misma acción dos veces en
 * la misma pantalla.
 */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-40 group flex items-center"
          style={{
            right: 'max(1rem, env(safe-area-inset-right))',
            bottom: 'max(1rem, env(safe-area-inset-bottom))',
          }}
          initial={{ opacity: 0, scale: 0.7, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 12 }}
          transition={{ duration: 0.28, ease: [0.34, 1.4, 0.64, 1] }}
          aria-label="Escribir por WhatsApp"
        >
          <span
            className="neu grid place-items-center"
            style={{
              width: '3.5rem',
              height: '3.5rem',
              borderRadius: 999,
              color: 'var(--signal-ink)',
              background:
                'linear-gradient(145deg, color-mix(in oklab, var(--signal) 92%, white), var(--signal))',
              border: '1px solid color-mix(in oklab, var(--signal) 60%, transparent)',
              boxShadow:
                'var(--neu-out), 0 14px 32px -12px color-mix(in oklab, var(--signal) 80%, transparent)',
            }}
          >
            <WhatsAppIcon size={24} />
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
