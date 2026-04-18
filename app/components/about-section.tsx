"use client";

import Image from "next/image";
import { Code2, Users, Briefcase, Coffee } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const stats = [
  { icon: Code2, value: "+5", label: "Años experiencia", color: "text-neon-blue" },
  { icon: Briefcase, value: "+10", label: "Proyectos", color: "text-neon-violet" },
  { icon: Users, value: "Sumando", label: "Clientes", color: "text-neon-cyan" },
  { icon: Coffee, value: "∞", label: "Mates", color: "text-neon-orange" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Sobre mí</span>
            <h2 className="section-title mt-4">
              Código con propósito,<br />
              diseño con pasión
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
              <div className="absolute inset-4 bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 rounded-3xl blur-[60px]" />
              <div className="glass-card relative w-full overflow-hidden rounded-3xl p-1">
                <div className="relative w-full rounded-[14px] overflow-hidden">
                  <Image
                    src="/images/about-portrait.png"
                    alt="MatuDev - Matías Francisco González"
                    width={1024}
                    height={1024}
                    className="w-full h-auto object-contain"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 50vw"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <p className="text-base sm:text-lg leading-relaxed opacity-70">
                Soy <strong className="text-[var(--foreground)] opacity-100">Matías Francisco González</strong>, 
                un desarrollador Full Stack apasionado por crear soluciones digitales 
                que marquen la diferencia. Desde que escribí mi primer "Hello World" 
                en un viejo notebook a los 19, supe que el código sería mi lenguaje.
              </p>
              <p className="text-base sm:text-lg leading-relaxed opacity-70">
                Me especializo en el ecosistema <strong className="text-neon-cyan opacity-100">React/Next.js</strong> para 
                el frontend y <strong className="text-neon-violet opacity-100">Node.js</strong> para el backend, 
                construyendo desde landing pages que convierten hasta plataformas SaaS 
                que escalan. Creo en el código limpio, las buenas prácticas y en que 
                la mejor tecnología es la que resuelve problemas reales.
              </p>
              <p className="text-base sm:text-lg leading-relaxed opacity-70">
                Cuando no estoy programando, probablemente estoy explorando nuevas 
                herramientas de IA, tomando mate o pensando en cómo automatizar algo 
                que no debería ser automatizado. 🚀
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glass-card p-6 text-center group">
                <stat.icon
                  size={28}
                  className={`mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                />
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm opacity-50 mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
