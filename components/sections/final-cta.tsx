import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-olive-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,191,141,0.24),transparent_38%),radial-gradient(circle_at_85%_80%,rgba(125,92,63,0.28),transparent_42%)]" />
      <div className="absolute inset-0 bg-arabesque-dark opacity-20" />

      <Container className="relative z-10">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-luxe text-gold-300">Seu proximo momento especial comeca aqui</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-sand-50 sm:text-6xl">
            Reserve sua mesa e viva uma experiencia arabe contemporanea memoravel.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-sand-50/80 sm:text-lg">
            Hospitalidade calorosa, aromas de especiarias e uma jornada sensorial desenhada para encantar.
          </p>
          <Link
            href="https://wa.me/5514990000000"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-olive-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <MessageCircleMore size={18} />
            Reservar no WhatsApp
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
