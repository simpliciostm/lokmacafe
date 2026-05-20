import Image from "next/image";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/content";

export function Gallery() {
  return (
    <section className="bg-sand-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          label="Galeria"
          title="Recortes visuais de uma experiencia pensada para os sentidos."
          description="Texturas, luz, gastronomia e encontros em uma narrativa visual premium."
        />

        <div className="mt-14 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <FadeIn
              key={image.src}
              delay={index * 0.05}
              className={`group relative overflow-hidden rounded-2xl ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
