import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { gastronomicHighlights } from "@/lib/content";

export function GastronomicExperience() {
  return (
    <section id="experiencia" className="bg-sand-50 py-20 sm:py-28">
      <Container className="space-y-14 sm:space-y-20">
        <SectionHeading
          label="Experiencia Gastronomica"
          title="Cada momento e pensado como uma narrativa de sabor, textura e atmosfera."
          description="Um encontro entre cafe de origem, culinaria artesanal e design sensorial para tornar seu tempo mais valioso."
        />

        <div className="space-y-12 sm:space-y-16">
          {gastronomicHighlights.map((item, index) => {
            const reversed = index % 2 !== 0;
            return (
              <FadeIn key={item.title} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className={reversed ? "lg:order-2" : ""}>
                  <div className="relative overflow-hidden rounded-3xl shadow-luxe">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      width={1000}
                      height={700}
                      className="h-[320px] w-full object-cover sm:h-[420px]"
                    />
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="text-xs uppercase tracking-luxe text-gold-400">{item.eyebrow}</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-olive-900 sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-olive-900/75">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
