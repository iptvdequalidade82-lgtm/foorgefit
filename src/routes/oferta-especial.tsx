import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { trackViewContent, trackInitiateCheckout } from "@/lib/pixel";
import { CHECKOUT_SIMPLES, CHECKOUT_COMPLETO_DESCONTO } from "@/lib/checkout";
import { useTrackedUrl } from "@/hooks/use-tracking-params";

import completoImage from "@/assets/oferta-completo.jpg.asset.json";

const TITLE = "Oferta Especial: Pacote Completo por R$ 15,90";
const DESCRIPTION =
  "Antes de finalizar, leve o Pacote Completo com desconto exclusivo: de R$ 19,90 por R$ 15,90 — todos os materiais e os 3 bônus grátis.";

export const Route = createFileRoute("/oferta-especial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OfertaEspecial,
});

const ITEMS = [
  "Guia Prático: Dominando a Fome",
  "Fichas de Treino",
  "Emagrecimento Sem Dietas",
  "Desafio 24 Dias",
  "Cardápio para comer fora sem sair da dieta",
  "200 Receitas de Café da Manhã Nutritivas",
  "80 Receitas de Refeições Saudáveis para Congelar",
  "+200 Exercícios de Musculação Ilustrado (GIF)",
  "500 Receitas Low Carb",
  "300 Receitas Anabólicas",
  "100 Receitas Saudáveis Fit",
];

const TRUST = [
  { icon: Lock, label: "Compra segura" },
  { icon: Zap, label: "Acesso imediato" },
  { icon: ShieldCheck, label: "Pagamento protegido" },
  { icon: Smartphone, label: "Compatível com celular" },
];

function OfertaEspecial() {
  const simplesHref = useTrackedUrl(CHECKOUT_SIMPLES);

  useEffect(() => {
    trackViewContent();
  }, []);


  return (
    <main className="min-h-screen bg-background">
      <section className="section-deep">
        <div className="bg-cta py-3.5 text-center">
          <p className="eyebrow text-white">Espere! Liberamos um desconto exclusivo para você</p>
        </div>

        <div className="container-page section-pad">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h1 className="display-2 stack-head">
              Aproveite agora o Pacote Completo com desconto
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">
              Você está a um passo de garantir o Pacote Simples. Antes disso, libere todo o método
              completo por menos de R$ 6 a mais — só nesta página.
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/50 bg-white/[0.07] p-5 shadow-glow backdrop-blur-sm sm:mt-12 sm:p-10"
          >
            <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-black sm:mb-7">
              <img
                src={completoImage.url}
                alt="Materiais do Pacote Completo"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>

            <h2 className="display-3 text-center">Pacote Completo</h2>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-6 text-center sm:mt-7 sm:px-6 sm:py-8">
              <p className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 font-sans text-xs font-medium text-white/60">
                <span className="line-through">R$ 19,90</span>
                <span className="rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  DESCONTO EXCLUSIVO
                </span>
              </p>
              <p className="price-xl mt-3 text-white">R$ 15,90</p>
              <p className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-xs sm:tracking-[0.18em]">
                Pagamento único
              </p>
            </div>

            <p className="eyebrow mt-7 text-center text-white/70 sm:mt-8">Você recebe tudo isto</p>
            <ul className="mx-auto mt-5 max-w-sm space-y-2.5 text-left sm:space-y-3">
              {ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-white/85">
                  <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-primary/25">
                    <Check className="h-2.5 w-2.5 text-primary" />
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>

            <CtaButton variant="success" href={CHECKOUT_COMPLETO_DESCONTO} className="mt-7 sm:mt-9">
              SIM! QUERO O PACOTE COMPLETO POR R$ 15,90
            </CtaButton>

            <a
              href={simplesHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout()}
              className="tap mt-3 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/[0.06] px-4 py-3.5 text-center font-display text-[0.8rem] font-extrabold uppercase leading-tight tracking-[0.01em] text-white/85 transition-colors duration-300 hover:border-white/45 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-3.5 sm:min-h-14 sm:px-7 sm:py-4 sm:text-sm"
            >
              Continuar somente com o Pacote Simples — R$ 9,90
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>

            <p className="mt-4 text-center font-sans text-xs text-white/50">
              Tem certeza de que deseja continuar somente com o Pacote Simples?
            </p>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-[11px] font-medium text-white/60">
              {TRUST.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-1.5">
                  <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
