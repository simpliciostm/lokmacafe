"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-32 sm:items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1800&q=80')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-olive-950/35 via-olive-950/55 to-olive-950/90" />
      <div className="absolute inset-0 bg-grain bg-[length:9px_9px] opacity-30" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs uppercase tracking-luxe text-gold-300 sm:mb-6">
            Experiencia gastronomica contemporanea
          </p>
          <h1 className="font-display text-5xl leading-[1.05] text-sand-50 sm:text-6xl lg:text-7xl">
            Um refugio sensorial entre cafe de origem, brunch autoral e atmosfera memoravel.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-sand-50/80 sm:text-lg">
            Descubra uma jornada elegante onde cada detalhe foi desenhado para quem valoriza sabor,
            tempo e lifestyle premium.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="https://wa.me/5514990000000"
              className="inline-flex items-center justify-center rounded-full bg-gold-300 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-olive-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              Reservar mesa
            </Link>
            <Link
              href="#menu"
              className="inline-flex items-center justify-center rounded-full border border-sand-50/40 px-7 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-sand-50 backdrop-blur-sm transition-colors duration-300 hover:bg-sand-50/10"
            >
              Ver cardapio
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
