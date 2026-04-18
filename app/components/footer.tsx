'use client';

import { Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './github-icon';

const footerLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
];

const socialLinks = [
  {
    icon: GitHubIcon,
    href: 'https://github.com/matiasfgonzalez',
    label: 'GitHub',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/matias-gonzalez-1a75b6223/',
    label: 'LinkedIn',
  },
  {
    icon: InstagramIcon,
    href: 'https://instagram.com/matute_2gonzalez',
    label: 'Instagram',
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center font-bold text-white text-xs">
                M
              </div>
              <span className="font-bold text-lg tracking-tight">
                Matu<span className="neon-text">Dev</span>
              </span>
            </a>
            <p className="text-sm opacity-50 max-w-xs leading-relaxed">
              Desarrollador Full Stack apasionado por crear experiencias
              digitales que impactan y transforman negocios.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 opacity-70">
              Navegación
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-50 hover:opacity-100 transition-opacity duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-sm mb-4 opacity-70">Redes</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--surface-2)] border border-[var(--glass-border)] opacity-50 hover:opacity-100 hover:border-[var(--border-glow)] transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-40 flex items-center gap-1">
            © {new Date().getFullYear()} MatuDev. Hecho con{' '}
            <Heart size={12} className="text-neon-pink fill-neon-pink" /> en
            Argentina.
          </p>
          <p className="text-xs opacity-40">
            Diseño & Desarrollo por Matías Francisco González
          </p>
        </div>
      </div>
    </footer>
  );
}
