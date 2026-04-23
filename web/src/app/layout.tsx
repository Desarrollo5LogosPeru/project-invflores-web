import type { Metadata } from "next";
import { montserrat, raleway } from "@/fonts";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Inversiones Flores SAC",
  description: "Inversiones Flores SAC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans relative">
        <BackgroundPattern />
        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
          <FloatingWhatsApp />
        </div>
      </body>
    </html>
  );
}
