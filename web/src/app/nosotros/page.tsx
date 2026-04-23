import { NosotrosCTA } from "@/components/nosotros/NosotrosCTA";
import { NosotrosHero } from "@/components/nosotros/NosotrosHero";
import { NosotrosMisionVision } from "@/components/nosotros/NosotrosMisionVision";
import { NosotrosStory } from "@/components/nosotros/NosotrosStory";
import { NosotrosValores } from "@/components/nosotros/NosotrosValores";

export default function NosotrosPage() {
  return (
    <>
      <NosotrosHero />
      <NosotrosStory />
      <NosotrosMisionVision />
      <NosotrosValores />
      <NosotrosCTA />
    </>
  );
}
