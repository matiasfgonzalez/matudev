'use client';

import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from './scroll-animations';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  WhatsAppIcon,
} from './github-icon';

const socialLinks = [
  {
    icon: GitHubIcon,
    label: 'GitHub',
    href: 'https://github.com/matiasfgonzalez',
    color: 'hover:text-white dark:hover:text-white',
    bgColor: 'hover:bg-white/10',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/matias-gonzalez-1a75b6223/',
    color: 'hover:text-neon-blue',
    bgColor: 'hover:bg-neon-blue/10',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://instagram.com/matute_2gonzalez',
    color: 'hover:text-neon-pink',
    bgColor: 'hover:bg-neon-pink/10',
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Contacto</span>
            <h2 className="section-title mt-4">
              Conectemos y<br />
              creemos algo
            </h2>
          </div>
        </ScrollReveal>

        {/* WhatsApp CTA */}
        <ScrollReveal delay={0.2} className="relative z-10">
          <motion.a
            href="https://wa.me/5493454432164?text=Hola%20Matías%2C%20me%20gustaría%20conversar%20sobre%20una%20posible%20colaboración.%20¿Tenés%20disponibilidad%3F"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -4, zIndex: 20 }}
            whileTap={{ scale: 0.98 }}
            className="group block max-w-2xl mx-auto mb-16 relative"
          >
            <div className="relative glass-card p-6 sm:p-8 border-2 border-[var(--border)] hover:border-[#25D366]/50 dark:hover:border-[#25D366]/40 hover:shadow-2xl dark:hover:shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all duration-500 rounded-2xl overflow-hidden">
              {/* Glow effect - más visible */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/10 to-[#25D366]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Background extra para modo claro */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col sm:flex-row items-center gap-6">
                {/* Icon */}
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-[#25D366]/30 blur-2xl group-hover:blur-3xl group-hover:scale-110 transition-all duration-500" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/30 group-hover:shadow-2xl group-hover:shadow-[#25D366]/50 group-hover:scale-105 transition-all duration-500">
                    <WhatsAppIcon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[var(--foreground)] group-hover:text-[#25D366] dark:group-hover:text-[#25D366] transition-colors duration-300">
                    ¿Preferís WhatsApp?
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--foreground)] opacity-70 group-hover:opacity-100 transition-all duration-300">
                    Hablemos directamente. Hacé clic para iniciar una
                    conversación ahora mismo.
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="hidden sm:block text-[var(--foreground)] group-hover:text-[#25D366] opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 shrink-0">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        </ScrollReveal>

        {/* Contact Info Grid */}
        <div className="max-w-4xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email Card */}
            <StaggerItem>
              <motion.a
                href="mailto:matiasgonzalez.652@gmail.com"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group block h-full"
              >
                <div className="glass-card p-6 sm:p-8 h-full flex flex-col items-center text-center hover:border-neon-blue/30 border-2 border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-neon-blue/10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-blue/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={32} className="text-neon-blue" />
                  </div>
                  <h3 className="text-sm font-medium opacity-60 mb-2 uppercase tracking-wider">
                    Email
                  </h3>
                  <p className="text-lg font-semibold text-[var(--foreground)] group-hover:text-neon-blue transition-colors duration-300">
                    matiasgonzalez.652@gmail.com
                  </p>
                </div>
              </motion.a>
            </StaggerItem>

            {/* Location Card */}
            <StaggerItem>
              <div className="glass-card p-6 sm:p-8 h-full flex flex-col items-center text-center border-2 border-transparent">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-neon-violet/20 to-neon-violet/5 flex items-center justify-center mb-4">
                  <MapPin size={32} className="text-neon-violet" />
                </div>
                <h3 className="text-sm font-medium opacity-60 mb-2 uppercase tracking-wider">
                  Ubicación
                </h3>
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  Paraná - Entre Ríos, Argentina 🇦🇷
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Social Links */}
          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <h3 className="text-sm font-medium opacity-60 mb-6 uppercase tracking-wider">
                Seguime en redes
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-[var(--surface-2)] border-2 border-[var(--glass-border)] ${link.color} ${link.bgColor} hover:border-[var(--border-glow)] transition-all duration-300 overflow-hidden`}
                    aria-label={link.label}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-current/5 to-transparent transition-opacity duration-300" />
                    <link.icon size={28} className="relative z-10" />
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
