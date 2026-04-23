import { ServiceHero } from "@/components/servicios/ServiceHero";
import { ServiceProcess } from "@/components/servicios/ServiceProcess";
import { ServicesGrid } from "@/components/servicios/ServicesGrid";
import { BrandsCarousel } from "@/components/ui/BrandsCarousel";

export default function ServiciosPage() {
  return (
    <>
      <ServiceHero />
      <ServicesGrid />
      <ServiceProcess />
      <BrandsCarousel />
    </>
  );
}
