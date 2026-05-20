import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { GastronomicExperience } from "@/components/sections/gastronomic-experience";
import { Differentials } from "@/components/sections/differentials";
import { MenuPreview } from "@/components/sections/menu-preview";
import { Gallery } from "@/components/sections/gallery";
import { AmbienceExperience } from "@/components/sections/ambience-experience";
import { Location } from "@/components/sections/location";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="bg-sand-50 text-olive-900">
      <Header />
      <Hero />
      <GastronomicExperience />
      <Differentials />
      <MenuPreview />
      <Gallery />
      <AmbienceExperience />
      <Location />
      <FinalCta />
      <Footer />
    </main>
  );
}
