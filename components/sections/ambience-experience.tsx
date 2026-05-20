import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

const ambienceStatements = [
  "Arquitetura intimista com materiais naturais e iluminacao acolhedora.",
  "Atendimento atento, discreto e desenhado para fazer voce se sentir em casa.",
  "Ambiente ideal para encontros especiais, reunioes elegantes e pausas significativas."
];

export function AmbienceExperience() {
  return (
    <section id="ambiente" className="relative overflow-hidden bg-olive-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-gold-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-coffee-500/30 blur-3xl" />

      <Container className="relative z-10">
        <FadeIn>
          <p className="text-xs uppercase tracking-luxe text-gold-300">Experiencia do Ambiente</p>
          <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-sand-50 sm:text-5xl lg:text-6xl">
            Mais do que um restaurante-cafeteria: um cenario contemporaneo para viver bons encontros.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {ambienceStatements.map((statement, index) => (
            <FadeIn
              key={statement}
              delay={index * 0.08}
              className="rounded-2xl border border-sand-50/20 bg-sand-50/5 p-5 text-sm leading-relaxed text-sand-50/80 sm:text-base"
            >
              {statement}
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
