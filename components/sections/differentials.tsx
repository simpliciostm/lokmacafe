import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { features } from "@/lib/content";

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-olive-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Diferenciais"
          title="Curadoria premium para uma experiencia que vai alem do prato."
          description="Tecnica, autenticidade e hospitalidade sofisticada em cada detalhe da jornada."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn
              key={feature.title}
              delay={index * 0.06}
              className="group rounded-3xl border border-sand-50/10 bg-sand-50/5 p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/40 hover:bg-sand-50/10"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-300/40 text-gold-300 transition-transform duration-500 group-hover:scale-110">
                <feature.icon size={20} />
              </div>
              <h3 className="mt-5 font-display text-2xl text-sand-50">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-sand-50/75">{feature.description}</p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
