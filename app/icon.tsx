import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/** El ícono de pestaña: el mismo azulejo de la marca, sin tipografía. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          background: 'linear-gradient(135deg, #19E3A5, #22B8FF 50%, #8B5CF6)',
        }}
      >
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="9" fill="#04060B" fillOpacity="0.28" />
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
    ),
    size
  );
}
