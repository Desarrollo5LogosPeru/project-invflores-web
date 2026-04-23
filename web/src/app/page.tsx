import { CtaBanner } from "@/components/inicio/CtaBanner";
import { Diferenciales } from "@/components/inicio/Diferenciales";
import { Hero } from "@/components/inicio/Hero";
import { Portafolio } from "@/components/inicio/Portafolio";
import { SobreNosotros } from "@/components/inicio/SobreNosotros";
import { TestimoniosCarousel } from "@/components/inicio/TestimoniosCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Diferenciales />
      <CtaBanner />
      <Portafolio />
      <TestimoniosCarousel />
    </>
  );
}
