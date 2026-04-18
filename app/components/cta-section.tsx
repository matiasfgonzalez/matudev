"use client";

import { Rocket } from "lucide-react";
import { ScrollReveal } from "./scroll-animations";

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="glass-card relative overflow-hidden p-8 sm:p-12 lg:p-16 text-center">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-20 -left-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-neon-violet/10 rounded-full blur-[100px]" />
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-[16px] p-[1px] overflow-hidden">
              <div
                className="absolute inset-0 animate-gradient"
                style={{
                  background:
                    "linear-gradient(135deg, var(--neon-blue), var(--neon-violet), var(--neon-cyan), var(--neon-blue))",
                  backgroundSize: "300% 300%",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                  borderRadius: "16px",
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 border border-[var(--glass-border)] mb-6">
                <Rocket size={28} className="text-neon-blue" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                ¿Tenés un proyecto{" "}
                <span className="neon-text">en mente</span>?
              </h2>

              <p className="mt-4 text-base sm:text-lg opacity-50 max-w-xl mx-auto">
                Estoy listo para convertir tu idea en realidad. Hablemos y 
                construyamos algo increíble juntos.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="glow-button px-10 py-4 text-base font-semibold"
                >
                  Trabajemos Juntos 🚀
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
