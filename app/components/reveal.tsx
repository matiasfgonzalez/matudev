'use client';

import { useRef, type ReactNode } from 'react';
import { MotionConfig, motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Un único lugar donde se decide cómo se comporta el movimiento.
 *
 * `reducedMotion="user"` apaga transformaciones y layout cuando el sistema
 * pide menos movimiento, pero deja pasar la opacidad. Es importante que sea
 * así y no una rama en el render: preguntar por la preferencia al dibujar
 * daría un árbol en el servidor y otro en el cliente, la hidratación no
 * cuadraría y el contenido se quedaría en opacity 0 — invisible justo para
 * quien pidió menos animación.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Distancia del desplazamiento de entrada, en píxeles. */
  y?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
};

/** Aparece al entrar en pantalla, una sola vez. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  /* El tipo se fija en motion.div: la etiqueta real sigue siendo `as`, pero
     así los props no se intersectan entre todos los elementos posibles. */
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

/** Contenedor que escalona a sus hijos `RevealItem`. */
export function RevealGroup({
  children,
  className = '',
  step = 0.06,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  as?: 'div' | 'ul' | 'ol' | 'section';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-64px' });
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="off"
      animate={inView ? 'on' : 'off'}
      variants={{ on: { transition: { staggerChildren: step } } }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'li' | 'article';
}) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      variants={{
        off: { opacity: 0, y: 24 },
        on: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
      }}
    >
      {children}
    </MotionTag>
  );
}
