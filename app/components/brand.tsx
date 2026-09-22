/**
 * Marca y logotipos de terceros.
 *
 * El resto de la iconografía sale de lucide-react: una sola familia, mismo
 * grosor de trazo y mismos vértices en toda la página.
 */

export function Logomark({
  size = 36,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="matutech"
      className={className}
    >
      <defs>
        <linearGradient id="mt-tile" x1="2" y1="2" x2="30" y2="30">
          <stop offset="0" stopColor="#19E3A5" />
          <stop offset="0.5" stopColor="#22B8FF" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#mt-tile)" />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9"
        fill="#04060B"
        fillOpacity="0.28"
      />
      {/* La "m" como monolínea geométrica: dos arcos sobre tres astas. */}
      <path
        d="M9 23v-7.5a3.25 3.25 0 0 1 6.5 0V23m0-7.5a3.25 3.25 0 0 1 6.5 0V23"
        stroke="#F4F8FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* El único punto cálido del logo: el mismo ámbar de las acciones. */}
      <circle cx="25.5" cy="8" r="2.2" fill="#FFB224" />
    </svg>
  );
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span
      className={className}
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        letterSpacing: '-0.045em',
        fontSize: '1.2rem',
      }}
    >
      matu<span style={{ color: 'var(--signal-strong)' }}>tech</span>
    </span>
  );
}

type IconProps = { size?: number; className?: string };

export function GitHubIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 .5C5.73.5.9 5.36.9 11.66c0 4.94 3.19 9.13 7.61 10.61.56.1.76-.24.76-.54l-.01-2.11c-3.1.68-3.75-1.32-3.75-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.7.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16 1 1.72 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.08-1.25-5.08-5.56 0-1.23.44-2.23 1.15-3.02-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.08 1.15a10.6 10.6 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.54.23 2.68.11 2.96.72.79 1.15 1.79 1.15 3.02 0 4.32-2.61 5.28-5.1 5.55.4.35.76 1.04.76 2.1l-.01 3.11c0 .3.2.65.77.54 4.41-1.49 7.6-5.67 7.6-10.61C23.1 5.36 18.27.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V21H2.4V9.5Zm7.74 0h4.95v1.57h.07c.69-1.24 2.38-2.55 4.9-2.55 5.24 0 6.2 3.34 6.2 7.68V21h-5.16v-4.03c0-.96-.02-2.2-1.37-2.2-1.37 0-1.58 1.05-1.58 2.13V21h-5.16V9.5h1.15Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className = '' }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.16 6.45 6.6 2.02 12.05 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.41Z" />
    </svg>
  );
}
