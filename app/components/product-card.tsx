'use client';

import { ArrowUpRight } from 'lucide-react';
import { productIcon, platformIcon, accentVar } from './product-icons';
import { statusLabels, platformLabels, type Product } from '../lib/products';

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  const Icon = productIcon[product.id];
  const PlatformIcon = platformIcon[product.platform];
  const status = statusLabels[product.status];
  const accent = accentVar[product.accent];

  return (
    <article
      className="glass glass--edge h-full flex flex-col"
      style={
        {
          '--accent': accent,
          padding: 'clamp(1.25rem, 3vw, 1.6rem)',
          transition: 'transform var(--t-mid), box-shadow var(--t-mid)',
        } as React.CSSProperties
      }
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--lift-hi)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <header className="flex items-start justify-between gap-3">
        <span
          className="neu grid place-items-center shrink-0"
          style={{ width: '2.875rem', height: '2.875rem' }}
        >
          <Icon size={20} strokeWidth={1.8} style={{ color: accent }} />
        </span>
        <span className={`status ${status.tone}`}>
          <span className="status__dot" />
          {status.label}
        </span>
      </header>

      <p
        className="mono mt-5"
        style={{
          fontSize: '0.6875rem',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          color: 'var(--fg-dim)',
        }}
      >
        {product.kicker}
      </p>

      <h3 className="title-md mt-1.5">{product.name}</h3>

      <p
        className="body-muted mt-3"
        style={{ fontSize: '0.9375rem', lineHeight: 1.62 }}
      >
        {product.pitch}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tecnologías">
        {product.stack.slice(0, 3).map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
        {product.stack.length > 3 && (
          <li className="chip" style={{ color: 'var(--fg-dim)' }}>
            +{product.stack.length - 3}
          </li>
        )}
      </ul>

      <footer
        className="mt-auto pt-5 flex items-center justify-between gap-3"
        style={{ borderTop: '1px solid var(--line)', marginTop: 'auto' }}
      >
        <span
          className="mono flex items-center gap-1.5"
          style={{ fontSize: '0.6875rem', color: 'var(--fg-dim)' }}
        >
          <PlatformIcon size={13} strokeWidth={1.8} aria-hidden="true" />
          {platformLabels[product.platform]}
        </span>

        <button
          type="button"
          onClick={onOpen}
          className="btn btn--ghost btn--sm"
        >
          Ver detalle
          <ArrowUpRight size={15} />
          <span className="sr-only"> de {product.name}</span>
        </button>
      </footer>
    </article>
  );
}
