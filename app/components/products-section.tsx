'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Reveal } from './reveal';
import { ProductCard } from './product-card';
import { ProductSheet } from './product-sheet';
import { platformIcon } from './product-icons';
import {
  products,
  platformLabels,
  type Platform,
  type Product,
} from '../lib/products';

type Filter = Platform | 'todos';

export function ProductsSection() {
  const [filter, setFilter] = useState<Filter>('todos');
  const [open, setOpen] = useState<Product | null>(null);

  /* Sólo se ofrecen los filtros que tienen algo detrás. Un filtro que devuelve
     cero resultados es una promesa rota. */
  const filters = useMemo(() => {
    const platforms = (
      Object.keys(platformLabels) as Platform[]
    ).filter((p) => products.some((prod) => prod.platform === p));
    return [
      { id: 'todos' as const, label: 'Todos', count: products.length },
      ...platforms.map((p) => ({
        id: p,
        label: platformLabels[p],
        count: products.filter((prod) => prod.platform === p).length,
      })),
    ];
  }, []);

  const shown = useMemo(
    () =>
      filter === 'todos'
        ? products
        : products.filter((p) => p.platform === filter),
    [filter]
  );

  return (
    <section id="productos" className="band band--sunken">
      <div className="shell relative" style={{ zIndex: 1 }}>
        <Reveal>
          <p className="eyebrow">Catálogo</p>
          <h2 className="title-lg mt-5" style={{ maxWidth: '18ch' }}>
            Doce cosas que existen
            <br />y se pueden usar.
          </h2>
          <p className="lede mt-5">
            Cada ficha dice qué resuelve el producto, por qué conviene y con qué
            está hecho. Lo que está en producción lleva enlace; lo que todavía
            no, te lo muestro en vivo.
          </p>
        </Reveal>

        {/* El riel: el gesto que se repite en toda la página, acá como filtro. */}
        <Reveal delay={0.08}>
          {/* El riel se desplaza de costado en pantallas chicas; el degradado
              del borde avisa que hay más filtros a la derecha. */}
          <div
            className="mt-9 -mx-[var(--gutter)] px-[var(--gutter)] overflow-x-auto pb-1"
            style={{
              scrollbarWidth: 'none',
              maskImage:
                'linear-gradient(90deg, #000 0, #000 calc(100% - 3rem), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(90deg, #000 0, #000 calc(100% - 3rem), transparent 100%)',
            }}
          >
            <div
              className="rail"
              role="group"
              aria-label="Filtrar el catálogo por plataforma"
            >
              {filters.map((f) => {
                const Icon =
                  f.id === 'todos' ? null : platformIcon[f.id as Platform];
                return (
                  <button
                    key={f.id}
                    type="button"
                    className="rail__item"
                    aria-pressed={filter === f.id}
                    onClick={() => setFilter(f.id)}
                  >
                    {Icon && (
                      <Icon size={14} strokeWidth={1.9} aria-hidden="true" />
                    )}
                    {f.label}
                    <span
                      className="mono"
                      style={{ fontSize: '0.6875rem', color: 'var(--fg-dim)' }}
                    >
                      {f.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <motion.ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0"
          role="list"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((product, i) => (
              <motion.li
                key={product.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(i, 5) * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProductCard
                  product={product}
                  onOpen={() => setOpen(product)}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <p
          className="mono mt-8 text-center"
          style={{ fontSize: '0.8125rem', color: 'var(--fg-dim)' }}
        >
          Mostrando {shown.length} de {products.length} productos
        </p>
      </div>

      <AnimatePresence>
        {open && (
          <ProductSheet product={open} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
