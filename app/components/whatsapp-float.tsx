'use client';

import { useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { WhatsAppIcon } from './brand';
import { links } from '../lib/site';

/**
 * Acceso permanente al canal que más se usa. Aparece recién después del hero,
 * donde ya hay un botón igual, para no repetir la misma acción dos veces en
 * la misma pantalla.
 */
export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) =>
    setShow(y > window.innerHeight * 0.85)
  );

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
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', duration: 0.45, bounce: 0.25 },
          }}
          exit={{
            opacity: 0,
            scale: 0.92,
            y: 8,
            transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
          }}
          aria-label="Escribir por WhatsApp"
        >
          <span
            className="neu press grid place-items-center"
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
