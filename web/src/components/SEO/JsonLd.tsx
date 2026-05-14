export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Inversiones Generales J&R Flores SAC",
          description:
            "Expertos en ventanas antiruido, vidrio antiruido, mamparas de vidrio y aluminio, fachadas de vidrio y puertas de vidrio templado en Lima.",
          url: "https://inversionesfloressac.com",
          logo: "https://inversionesfloressac.com/logo.png",
          image: "https://inversionesfloressac.com/HERO01.webp",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lima",
            addressCountry: "PE",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-12.0464",
            longitude: "-77.0428",
          },
          priceRange: "$$",
          telephone: "+51 1 1234567", // Reemplaza con el número real
          email: "info@inversionesfloressac.com", // Reemplaza con el email real
          sameAs: [
            "https://facebook.com/share/14cKTs4dgC7/",
            "https://www.instagram.com/inversiones_g_jrfloressac?igsh=YjFmdmxpazJpbHB3",
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "13:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicios de Acristalamiento",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Ventanas Antiruido",
                  description:
                    "Soluciones en ventanas de PVC y vidrio antiruido para hogares y oficinas.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mamparas de Vidrio",
                  description:
                    "Mamparas para sala, fachadas de vidrio y estructuras de aluminio.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Puertas de Vidrio Templado",
                  description:
                    "Puertas de vidrio templado para interior y exterior.",
                },
              },
            ],
          },
        }),
      }}
    />
  );
}
