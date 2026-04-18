"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        {/* Orbiting ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03]">
          <div className="w-full h-full rounded-full border border-[var(--neon-blue)] animate-spin-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04]">
          <div
            className="w-full h-full rounded-full border border-[var(--neon-violet)] animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "15s" }}
          />
        </div>
        {/* Glow orbs */}
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-neon-violet/10 rounded-full blur-[120px] animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-badge mb-6 inline-flex">
              <Sparkles size={14} />
              Disponible para proyectos
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            Hola, soy{" "}
            <span className="neon-text">MatuDev</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-neon-cyan"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-base sm:text-lg opacity-60 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Transformo ideas en experiencias digitales que impactan. 
            Especializado en crear aplicaciones web modernas, rápidas y 
            escalables con las tecnologías más innovadoras del mercado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#projects"
              className="glow-button px-8 py-4 text-base font-semibold text-center"
            >
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 text-base font-semibold text-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-md hover:border-[var(--border-glow)] hover:bg-[var(--surface-2)] transition-all duration-300"
            >
              Contactarme
            </a>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[480px] lg:h-[480px]">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 rounded-full blur-[80px] animate-pulse-glow" />
            <div className="relative w-full h-full animate-float">
              <Image
                src="/images/hero-developer-sin-fondo.png"
                alt="MatuDev - Full Stack Developer"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 384px, 480px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity"
      >
        <span className="text-xs font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.a>
    </section>
  );
}
