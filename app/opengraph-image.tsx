import { ImageResponse } from 'next/og';
import { site } from './lib/site';
import { products, catalogStats } from './lib/products';

export const alt = `${site.brand} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * La vista previa al compartir el enlace. En WhatsApp, que es por donde va a
 * circular, esta imagen es la primera impresión de la marca.
 *
 * Satori no soporta grid ni degradados sobre texto, así que la aurora se arma
 * con capas absolutas y la jerarquía se resuelve con tamaño y peso.
 */
export default function OpengraphImage() {
  const stats = [
    { value: String(catalogStats.total), label: 'productos' },
    { value: String(catalogStats.live), label: 'en producción' },
    { value: '1', label: 'en Google Play' },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#04060B',
          color: '#E9EEF7',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Aurora */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            left: -160,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(25,227,165,0.55), rgba(25,227,165,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -180,
            right: -200,
            width: 760,
            height: 760,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(139,92,246,0.5), rgba(139,92,246,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -280,
            left: 300,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background:
              'radial-gradient(circle, rgba(34,184,255,0.42), rgba(34,184,255,0) 70%)',
          }}
        />

        {/* Marca */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(135deg, #19E3A5, #22B8FF 50%, #8B5CF6)',
            }}
          >
            <svg width="62" height="62" viewBox="0 0 32 32" fill="none">
              <rect
                width="32"
                height="32"
                rx="9"
                fill="#04060B"
                fillOpacity="0.28"
              />
              <path
                d="M9 23v-7.5a3.25 3.25 0 0 1 6.5 0V23m0-7.5a3.25 3.25 0 0 1 6.5 0V23"
                stroke="#F4F8FF"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="25.5" cy="8" r="2.2" fill="#FFB224" />
            </svg>
          </div>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
            <span>matu</span>
            <span style={{ color: '#FFB224' }}>tech</span>
          </div>
        </div>

        {/* Tesis */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* Dos líneas fijas: dejar que Satori acomode los espacios entre
              varios spans en una fila abre huecos entre las palabras. */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -1,
              lineHeight: 1.04,
            }}
          >
            <span>Software que</span>
            <span style={{ color: '#19E3A5' }}>termina publicado.</span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 27,
              color: '#9AA7BD',
              lineHeight: 1.45,
              letterSpacing: 0,
            }}
          >
            <span>Apps móviles, plataformas web y herramientas de escritorio.</span>
            <span style={{ color: '#66748D' }}>{site.location}</span>
          </div>
        </div>

        {/* Prueba */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
                padding: '14px 24px',
                borderRadius: 16,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <span style={{ fontSize: 34, fontWeight: 700 }}>{s.value}</span>
              <span style={{ fontSize: 22, color: '#9AA7BD' }}>{s.label}</span>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              marginLeft: 'auto',
              fontSize: 20,
              color: '#66748D',
            }}
          >
            {products
              .slice(0, 4)
              .map((p) => p.name)
              .join('  ·  ')}
          </div>
        </div>
      </div>
    ),
    size
  );
}
