"use client";

import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./github-icon";

const socialLinks = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/matudev",
    color: "hover:text-white",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/matudev",
    color: "hover:text-neon-blue",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com/matudev",
    color: "hover:text-neon-pink",
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — replace with real form logic
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:opacity-40 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 opacity-70">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:opacity-40 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 opacity-70">
                  Mensaje
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  placeholder="Contame sobre tu proyecto..."
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface-2)] border border-[var(--glass-border)] text-[var(--foreground)] placeholder:opacity-40 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/30 transition-all duration-300 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="glow-button w-full sm:w-auto px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>✓ ¡Mensaje enviado!</>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Contact info cards */}
              <StaggerContainer className="space-y-4">
                <StaggerItem>
                  <div className="glass-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center shrink-0">
                      <Mail size={20} className="text-neon-blue" />
                    </div>
                    <div>
                      <div className="text-xs opacity-50 font-medium">Email</div>
                      <div className="text-sm font-semibold">hola@matudev.com</div>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="glass-card p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-violet/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-neon-violet" />
                    </div>
                    <div>
                      <div className="text-xs opacity-50 font-medium">Ubicación</div>
                      <div className="text-sm font-semibold">Argentina 🇦🇷</div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              {/* Social */}
              <div className="glass-card p-5">
                <div className="text-xs opacity-50 font-medium mb-4 uppercase tracking-wider">
                  Seguime en redes
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--surface-2)] border border-[var(--glass-border)] opacity-60 ${link.color} hover:opacity-100 hover:border-[var(--border-glow)] transition-all duration-300`}
                      aria-label={link.label}
                    >
                      <link.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
