"use client";

import {
  Globe,
  Server,
  Palette,
  Zap,
  LayoutDashboard,
  Bot,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Landing pages, sitios institucionales y aplicaciones web completas con Next.js y React, optimizadas para SEO y performance.",
    accent: "from-neon-blue to-neon-cyan",
    iconColor: "text-neon-blue",
  },
  {
    icon: Server,
    title: "APIs & Backend",
    description:
      "APIs REST y GraphQL robustas con Node.js, autenticación, bases de datos y arquitecturas escalables en la nube.",
    accent: "from-neon-violet to-neon-blue",
    iconColor: "text-neon-violet",
  },
  {
    icon: LayoutDashboard,
    title: "Plataformas SaaS",
    description:
      "Desarrollo de productos SaaS desde cero: multi-tenancy, suscripciones, dashboards y métricas de negocio.",
    accent: "from-neon-cyan to-neon-green",
    iconColor: "text-neon-cyan",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Diseño de interfaces modernas, intuitivas y visualmente impactantes con foco en conversión y experiencia de usuario.",
    accent: "from-neon-pink to-neon-violet",
    iconColor: "text-neon-pink",
  },
  {
    icon: Zap,
    title: "Automatizaciones",
    description:
      "Integración de APIs, workflows automatizados, scraping y bots que ahorran horas de trabajo manual.",
    accent: "from-neon-orange to-neon-pink",
    iconColor: "text-neon-orange",
  },
  {
    icon: Bot,
    title: "Integración con IA",
    description:
      "Incorporación de modelos de IA, chatbots inteligentes y features basados en machine learning a tus productos.",
    accent: "from-neon-green to-neon-cyan",
    iconColor: "text-neon-green",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Servicios</span>
            <h2 className="section-title mt-4">
              Soluciones de punta<br />
              a punta
            </h2>
            <p className="mt-4 text-base sm:text-lg opacity-50 max-w-2xl mx-auto">
              No solo escribo código, construyo soluciones completas. 
              Desde la idea inicial hasta el deploy en producción.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="glass-card p-6 sm:p-8 group h-full relative overflow-hidden">
                {/* Hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${service.accent} bg-opacity-10 border border-[var(--glass-border)] group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))`,
                  }}
                >
                  <service.icon size={26} className={service.iconColor} />
                </div>

                <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
