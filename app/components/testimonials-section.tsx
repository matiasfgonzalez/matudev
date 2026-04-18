"use client";

import { Star, Quote } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const testimonials = [
  {
    name: "Laura Fernández",
    role: "CEO, TechVibe",
    avatar: "LF",
    avatarColor: "from-neon-pink to-neon-violet",
    text: "MatuDev transformó nuestra idea en una plataforma SaaS increíble en tiempo récord. Su atención al detalle y la calidad del código superaron todas nuestras expectativas. 100% recomendado.",
    rating: 5,
  },
  {
    name: "Martín Rodríguez",
    role: "CTO, DataFlow",
    avatar: "MR",
    avatarColor: "from-neon-blue to-neon-cyan",
    text: "Trabajar con Matías fue una experiencia excepcional. Entendió nuestras necesidades técnicas desde el día uno y entregó una API robusta y escalable que soporta miles de requests por segundo.",
    rating: 5,
  },
  {
    name: "Carolina Mendez",
    role: "Founder, CreativeHub",
    avatar: "CM",
    avatarColor: "from-neon-orange to-neon-pink",
    text: "El diseño de nuestra landing page no solo es hermoso sino que triplicó nuestra conversión. MatuDev combina habilidades técnicas con un ojo impecable para el diseño. ¡Artista del código!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-violet/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Testimonios</span>
            <h2 className="section-title mt-4">
              Lo que dicen<br />
              mis clientes
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass-card p-6 sm:p-8 h-full flex flex-col relative">
                <Quote
                  size={32}
                  className="absolute top-6 right-6 opacity-10"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-neon-orange text-neon-orange"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base opacity-70 leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--glass-border)]">
                  <div
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center font-bold text-white text-sm`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs opacity-50">{t.role}</div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
