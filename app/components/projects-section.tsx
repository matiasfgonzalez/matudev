"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./github-icon";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const projects = [
  {
    title: "Club Cuotas",
    description:
      "Sistema completo para gestionar cuotas, torneos y pagos de jugadores. Simplifica la administración y mantén todo organizado.",
    image: "/images/project-ecommerce.png",
    tags: ["Next.js", "Prisma", "Vercel", "PostgreSQL"],
    demo: "https://club-cuotas.vercel.app/",
    repo: "#",
  },
  {
    title: "TurnosPro",
    description:
      "Gestión de Turnos, Nivel Premium. Automatiza tus reservas, recobra tu tiempo libre y eleva la imagen de tu marca con una experiencia que tus clientes amarán.",
    image: "/images/project-saas.png",
    tags: ["Next.js", "Node.js", "Prisma", "Vercel", "PostgreSQL", "Resend"],
    demo: "https://www.buscatusturnos.com.ar/",
    repo: "#",
  },
  {
    title: "Federal Futbol Club",
    description:
      "Identidad digital y presencia profesional a un grupo de amigos apasionados por el fútbol, que necesitaban una plataforma para mostrar su historia, logros y próximos partidos.",
    image: "/images/project-social.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion", "Radix UI"],
    demo: "https://federal-futbol-club-page.pages.dev/",
    repo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Portfolio</span>
            <h2 className="section-title mt-4">
              Proyectos que cuentan<br />
              historias
            </h2>
            <p className="mt-4 text-base sm:text-lg opacity-50 max-w-2xl mx-auto">
              Cada proyecto es un desafío resuelto. Desde MVPs hasta plataformas 
              enterprise, construyo con obsesión al detalle.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="glass-card overflow-hidden group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-transparent to-transparent opacity-60" />
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Visitar
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-60 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/20"
                      >
                        {tag}
                      </span>
                    ))}
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
