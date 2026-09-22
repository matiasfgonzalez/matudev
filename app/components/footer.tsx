import { Logomark, Wordmark } from './brand';
import { links, nav, site } from '../lib/site';
import { products } from '../lib/products';

export function Footer() {
  const year = new Date().getFullYear();
  const featured = products.slice(0, 6);

  return (
    <footer
      className="relative"
      style={{ borderTop: '1px solid var(--line)', zIndex: 1 }}
    >
      <div className="shell" style={{ paddingBlock: '3.5rem 2rem' }}>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logomark size={34} />
              <Wordmark />
            </div>
            <p
              className="body-muted mt-4"
              style={{ fontSize: '0.9375rem', maxWidth: '34ch' }}
            >
              {site.tagline} Apps móviles, plataformas web y herramientas de
              escritorio, desde {site.location}.
            </p>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm mt-5"
            >
              Empezar una conversación
            </a>
          </div>

          <nav aria-label="Pie de página">
            <p
              className="mono"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: 'var(--fg-dim)',
              }}
            >
              Navegación
            </p>
            <ul className="mt-4 flex flex-col gap-2 list-none p-0">
              {[...nav, { label: 'Preguntas', href: '#preguntas' }, { label: 'Contacto', href: '#contacto' }].map(
                (item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="body-muted inline-flex items-center"
                      style={{ fontSize: '0.9375rem', minHeight: '2.25rem' }}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div>
            <p
              className="mono"
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: 'var(--fg-dim)',
              }}
            >
              Productos
            </p>
            <ul className="mt-4 flex flex-col gap-2 list-none p-0">
              {featured.map((p) => (
                <li key={p.id}>
                  <a
                    href="#productos"
                    className="body-muted inline-flex items-center"
                    style={{ fontSize: '0.9375rem', minHeight: '2.25rem' }}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--line)' }}
        >
          <p
            className="mono"
            style={{ fontSize: '0.75rem', color: 'var(--fg-dim)' }}
          >
            © {year} {site.brand} · {site.legalName}
          </p>
          <p
            className="mono"
            style={{ fontSize: '0.75rem', color: 'var(--fg-dim)' }}
          >
            Hecho con Next.js y Tailwind, en Entre Ríos
          </p>
        </div>
      </div>
    </footer>
  );
}
