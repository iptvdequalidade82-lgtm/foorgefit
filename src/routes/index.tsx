import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackViewContent } from "@/lib/pixel";

import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { Features } from "@/components/landing/Features";
import { Bonus } from "@/components/landing/Bonus";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { Trust } from "@/components/landing/Trust";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const TITLE = "+200 Planilhas de Treinos Ajustado para o seu Biotipo";
const DESCRIPTION =
  "Pare de perder tempo! +200 planilhas de treinos, +275 GIFs explicativos, prescrição para 12 meses e 3 bônus grátis por R$ 9,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    trackViewContent();
  }, []);

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <main className="min-h-screen bg-background">
      <Hero onCta={scrollToOffer} />
      <Intro />
      <Features />
      <Bonus />
      <Steps />
      <Testimonials />
      <Offer />
      <Trust />
      <Faq />
      <Footer />
    </main>
  );
}
