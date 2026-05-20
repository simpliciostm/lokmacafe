import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { menuCategories } from "@/lib/content";

export function MenuPreview() {
  return (
    <section id="menu" className="bg-[#f3ecdf] py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Menu Premium"
          title="Um preview do nosso cardapio contemporaneo"
          description="Categorias criadas para harmonizar cafe, gastronomia artesanal e momentos de celebracao cotidiana."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {menuCategories.map((category, categoryIndex) => (
            <FadeIn
              key={category.name}
              delay={categoryIndex * 0.05}
              className="rounded-3xl border border-olive-900/10 bg-offwhite p-6 shadow-soft sm:p-8"
            >
              <h3 className="font-display text-3xl text-olive-900">{category.name}</h3>
              <div className="mt-7 space-y-5">
                {category.items.map((item) => (
                  <div key={item.title} className="border-b border-olive-900/10 pb-4 last:border-none last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-semibold text-olive-900">{item.title}</h4>
                      <span className="text-sm tracking-wide text-coffee-700/85">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-olive-900/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
