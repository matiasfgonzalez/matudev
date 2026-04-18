"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-animations";

const skills = [
  {
    name: "React",
    level: 95,
    icon: "⚛️",
    color: "from-[#61dafb] to-[#3b82f6]",
  },
  {
    name: "Next.js",
    level: 92,
    icon: "▲",
    color: "from-[#ffffff] to-[#a0a0a0]",
  },
  {
    name: "TypeScript",
    level: 90,
    icon: "📘",
    color: "from-[#3178c6] to-[#6366f1]",
  },
  {
    name: "Node.js",
    level: 88,
    icon: "🟢",
    color: "from-[#68a063] to-[#10b981]",
  },
  {
    name: "Prisma",
    level: 85,
    icon: "◆",
    color: "from-[#5a67d8] to-[#8b5cf6]",
  },
  {
    name: "PostgreSQL",
    level: 82,
    icon: "🐘",
    color: "from-[#336791] to-[#06b6d4]",
  },
  {
    name: "Docker",
    level: 78,
    icon: "🐳",
    color: "from-[#2496ed] to-[#3b82f6]",
  },
  {
    name: "TailwindCSS",
    level: 94,
    icon: "🎨",
    color: "from-[#06b6d4] to-[#3b82f6]",
  },
];

function SkillBar({
  name,
  level,
  icon,
  color,
  index,
}: {
  name: string;
  level: number;
  icon: string;
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="glass-card p-5 sm:p-6 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          <span className="font-semibold text-sm sm:text-base">{name}</span>
        </div>
        <span className="text-sm font-bold neon-text">{level}%</span>
      </div>

      <div className="skill-bar-track">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: level / 100 } : { scaleX: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-violet/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-badge">Tech Stack</span>
            <h2 className="section-title mt-4">
              Herramientas que<br />
              domino a diario
            </h2>
            <p className="mt-4 text-base sm:text-lg opacity-50 max-w-2xl mx-auto">
              Cada tecnología elegida con propósito. Mi stack evoluciona constantemente 
              para ofrecer las mejores soluciones a cada proyecto.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <StaggerItem key={skill.name}>
              <SkillBar {...skill} index={i} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
