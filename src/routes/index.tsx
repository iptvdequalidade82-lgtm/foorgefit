import { createFileRoute } from "@tanstack/react-router";
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

const TITLE = "+100 Planilhas de Treinos Ajustado para o seu Biotipo";
const DESCRIPTION =
  "Pare de perder tempo! +100 planilhas de treinos, +275 GIFs explicativos, prescrição para 12 meses e 3 bônus grátis por R$ 6,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${TITLE} | Info Cursos Brasil` },
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
