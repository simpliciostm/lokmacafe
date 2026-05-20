import Link from "next/link";
import { MapPin, Clock3, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { operatingHours } from "@/lib/content";

export function Location() {
  return (
    <section id="localizacao" className="bg-[#efe5d5] py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <SectionHeading
            label="Localizacao"
            title="No coracao da cidade, com atmosfera de destino gastronomico."
            description="Um espaco premium pensado para quem busca conforto, sabor e atendimento impecavel em todos os horarios."
          />

          <FadeIn className="mt-8 space-y-6 rounded-3xl border border-olive-900/10 bg-offwhite p-6 shadow-soft">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 text-coffee-700" size={20} />
              <div>
                <p className="text-xs uppercase tracking-luxe text-coffee-700">Endereco</p>
                <p className="mt-1 text-sm text-olive-900/80 sm:text-base">
                  Rua das Acacias, 245 - Centro, Bauru - SP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 text-coffee-700" size={20} />
              <div className="w-full">
                <p className="text-xs uppercase tracking-luxe text-coffee-700">Funcionamento</p>
                <div className="mt-2 space-y-2">
                  {operatingHours.map((slot) => (
                    <div key={slot.day} className="flex justify-between gap-3 text-sm text-olive-900/80 sm:text-base">
                      <span>{slot.day}</span>
                      <span>{slot.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="https://wa.me/5514990000000"
              className="inline-flex items-center gap-2 rounded-full bg-olive-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-sand-50 transition-colors hover:bg-olive-950"
            >
              <MessageCircle size={18} />
              Reservar via WhatsApp
            </Link>
          </FadeIn>
        </div>

        <FadeIn className="overflow-hidden rounded-3xl border border-olive-900/10 shadow-luxe">
          <iframe
            title="Mapa da cafeteria"
            src="https://www.google.com/maps?q=Bauru+SP&output=embed"
            className="h-[420px] w-full border-0 sm:h-full sm:min-h-[520px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </Container>
    </section>
  );
}
