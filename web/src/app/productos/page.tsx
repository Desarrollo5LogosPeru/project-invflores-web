import { ProductFAQ } from "@/components/productos/ProductFAQ";
import { ProductHero } from "@/components/productos/ProductHero";
import { ProductQuality } from "@/components/productos/ProductQuality";
import { ProductsGrid } from "@/components/productos/ProductsGrid";

export default function ProductosPage() {
  return (
    <>
      <ProductHero />
      <ProductsGrid />
      <ProductQuality />
      <ProductFAQ />
    </>
  );
}
