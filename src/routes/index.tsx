import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { trackViewContent } from "@/lib/pixel";


import { Hero } from "@/components/landing/Hero";
import { AppExperience } from "@/components/landing/AppExperience";
import { ExperienceChoice } from "@/components/landing/ExperienceChoice";
import { Steps } from "@/components/landing/Steps";
import { Testimonials } from "@/components/landing/Testimonials";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { Trust } from "@/components/landing/Trust";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { CtaButton } from "@/components/landing/CtaButton";
import { MobileSticky } from "@/components/landing/MobileSticky";

const TITLE = "ForgeFit — Seu treino, do seu jeito";
const DESCRIPTION =
  "Escolha o pacote completo de conteúdos digitais ou monte sua rotina no ForgeFit App, com pagamento único e acesso vitalício.";

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
      <AppExperience />
      <ExperienceChoice />
      <Steps />
      <Testimonials />
      <Offer />
      <Guarantee />
      <Trust />
      <Faq />
      <section className="section-deep">
        <div className="container-page py-14 text-center">
          <h2 className="display-3">Pronto para começar?</h2>
          <p className="mx-auto mt-4 max-w-md font-sans text-sm leading-relaxed text-white/65">
            Escolha o seu pacote e receba o acesso no seu email logo após a compra.
          </p>
          <div className="mx-auto mt-7 max-w-sm">
            <CtaButton variant="success" onClick={scrollToOffer}>
              VER AS OFERTAS
            </CtaButton>
          </div>
        </div>
      </section>
      <Footer />
      <MobileSticky />
    </main>
  );
}
