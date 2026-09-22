'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Reveal } from './reveal';
import { WhatsAppIcon } from './brand';
import { links } from '../lib/site';

/** Las preguntas que frenan una decisión, contestadas antes de que las hagan. */
const faqs = [
  {
    q: '¿Cuánto sale?',
    a: 'Depende del alcance, y por eso nunca vas a ver un precio de lista acá. Lo que sí es fijo: después de la primera charla te mando una propuesta con un número cerrado, no con un “estimado”. Si durante el proyecto pedís algo que no estaba, se cotiza aparte y lo decidís vos.',
  },
  {
    q: '¿Cuánto tarda?',
    a: 'Una landing o un sitio institucional, entre dos y cuatro semanas. Un sistema de gestión con usuarios y roles, entre uno y tres meses. Una app publicada en la tienda, sumale dos semanas de revisión de Google. El plazo va por escrito en la propuesta.',
  },
  {
    q: '¿El código es mío?',
    a: 'Sí, desde el primer día. Trabajo en un repositorio al que tenés acceso mientras se construye, y al entregar quedan tuyos el código, el dominio, las cuentas de los servicios y la documentación. No queda nada atado a mí.',
  },
  {
    q: '¿Trabajás con gente de otra provincia o país?',
    a: 'Sí. Estoy en Paraná, Entre Ríos, y trabajo en remoto. Las reuniones son por videollamada y el día a día por WhatsApp. Los proyectos del catálogo se hicieron así.',
  },
  {
    q: '¿Qué pasa si ya tengo algo empezado?',
    a: 'Lo miro y te digo la verdad: qué se salva, qué conviene rehacer y cuánto cuesta cada camino. A veces el informe honesto es que sigas con quien lo hizo. Esa revisión inicial la cobro aparte del desarrollo, así la decisión no queda contaminada.',
  },
  {
    q: '¿Y después de entregar?',
    a: 'Un mes de garantía sobre lo entregado: si algo que estaba acordado no funciona, se corrige sin cargo. De ahí en más se puede acordar mantenimiento mensual o trabajar por pedido. No hay permanencia ni contrato que te ate.',
  },
  {
    q: '¿Hacés apps para iPhone?',
    a: 'Las construyo con React Native, así que la misma base sirve para iOS. Hoy tengo el camino de publicación de Android recorrido de punta a punta; para iOS hace falta la cuenta de desarrollador de Apple, que corre por cuenta del cliente. Te aviso antes, no después.',
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="preguntas" className="band">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-10 lg:gap-14">
          <Reveal>
            <p className="eyebrow">Preguntas</p>
            <h2 className="title-lg mt-5" style={{ maxWidth: '14ch' }}>
              Lo que casi todos preguntan.
            </h2>
            <p className="lede mt-5">
              Si tu duda no está acá, escribime y la contesto. Después la
              agrego a esta lista.
            </p>

            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost mt-7"
            >
              <WhatsAppIcon size={17} />
              Preguntar por WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                const panelId = `faq-panel-${i}`;
                const buttonId = `faq-button-${i}`;
                return (
                  <li key={faq.q} className="glass" style={{ padding: 0 }}>
                    <h3 style={{ margin: 0 }}>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="w-full flex items-center justify-between gap-4 text-left"
                        style={{
                          minHeight: '3.5rem',
                          padding: '1rem 1.25rem',
                          background: 'transparent',
                          border: 0,
                          cursor: 'pointer',
                          color: 'inherit',
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.0625rem',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.35,
                        }}
                      >
                        {faq.q}
                        <motion.span
                          className="neu grid place-items-center shrink-0"
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: 999,
                          }}
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Plus
                            size={15}
                            strokeWidth={2.2}
                            style={{ color: isOpen ? 'var(--signal-strong)' : 'inherit' }}
                            aria-hidden="true"
                          />
                        </motion.span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <p
                            className="body-muted"
                            style={{
                              padding: '0 1.25rem 1.25rem',
                              fontSize: '0.9375rem',
                              lineHeight: 1.66,
                              maxWidth: '62ch',
                            }}
                          >
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
