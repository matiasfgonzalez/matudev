"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./github-icon";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const projects = [
  {
    title: "NexCommerce",
    description:
      "Plataforma de e-commerce headless con panel de administración, pagos con Stripe, inventario en tiempo real y analytics avanzados.",
    image: "/images/project-ecommerce.png",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    demo: "#",
    repo: "#",
  },
  {
    title: "DataPulse Analytics",
    description:
      "Dashboard SaaS de analytics en tiempo real con visualizaciones interactivas, alertas inteligentes y reportes automatizados para equipos de producto.",
    image: "/images/project-saas.png",
    tags: ["React", "Node.js", "WebSocket", "D3.js"],
    demo: "#",
    repo: "#",
  },
  {
    title: "ConnectSphere",
    description:
      "Red social privada para comunidades tech con chat en tiempo real, foros temáticos, sistema de reputación y matching de mentores.",
    image: "/images/project-social.png",
    tags: ["Next.js", "Socket.io", "Redis", "Docker"],
    demo: "#",
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
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.repo}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                    >
                      <GitHubIcon size={16} />
                      Código
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
