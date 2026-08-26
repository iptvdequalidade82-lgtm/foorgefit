import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { trackViewContent, trackInitiateCheckout } from "@/lib/pixel";
import { CHECKOUT_SIMPLES, CHECKOUT_COMPLETO_DESCONTO } from "@/lib/checkout";
import simplesImage from "@/assets/oferta-simples.jpg.asset.json";
import completoImage from "@/assets/oferta-completo.jpg.asset.json";

const TITLE = "Oferta Especial: Versão Completa por R$ 15,90";
const DESCRIPTION =
  "Antes de finalizar, leve a Versão Completa do ForgeFit com desconto exclusivo: de R$ 19,90 por R$ 15,90. Por apenas R$ 6,00 a mais.";

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

const SIMPLES_ITEMS = [
  "+200 Planilhas de Treinos",
  "+275 GIFs Explicativos",
  "Prescrição para 12 Meses",
  "500 Receitas Low Carb",
  "300 Receitas Anabólicas",
  "100 Receitas Saudáveis Fit",
];

const COMPLETO_EXTRA_ITEMS = [
  "Guia Prático: Dominando a Fome",
  "Fichas de Treino",
  "Emagrecimento Sem Dietas",
  "Desafio 24 Dias",
  "Cardápio para comer fora sem sair da dieta",
  "200 Receitas de Café da Manhã Nutritivas",
  "80 Receitas de Refeições Saudáveis para Congelar",
  "+200 Exercícios de Musculação Ilustrado (GIF)",
];

const TRUST = [
  { icon: Lock, label: "Compra segura" },
  { icon: Zap, label: "Acesso imediato" },
  { icon: ShieldCheck, label: "Pagamento protegido" },
  { icon: Smartphone, label: "Compatível com celular" },
];

function CheckItem({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <li className="flex items-start gap-2.5 font-sans text-sm text-white/85">
      <span
        className={`mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full ${highlight ? "bg-primary" : "bg-primary/25"}`}
      >
        <Check className={`h-2.5 w-2.5 ${highlight ? "text-white" : "text-primary"}`} />
      </span>
      <span className={`min-w-0 ${highlight ? "font-semibold text-white" : ""}`}>{children}</span>
    </li>
  );
}

function TrustRow() {
  return (
    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-[11px] font-medium text-white/60">
      {TRUST.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
          {label}
        </li>
      ))}
    </ul>
  );
}

function OfertaEspecial() {
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
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="display-2 stack-head">ESPERE! VOCÊ PODE LEVAR A VERSÃO COMPLETA</h1>
            <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-white/65 sm:mt-5 sm:text-base">
              Você escolheu a versão de R$ 9,90. Antes de finalizar, você pode adicionar todo o conteúdo
              extra por uma condição especial válida apenas agora.
            </p>
          </Reveal>

          {/* Comparison */}
          <Reveal delay={120} className="mx-auto mt-10 max-w-5xl">
            <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
              {/* Simples */}
              <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8">
                <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-white">
                  <img
                    src={simplesImage.url}
                    alt="Versão de R$ 9,90"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <h2 className="display-3 text-center">Versão de R$ 9,90</h2>
                <p className="mt-1 text-center font-sans text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                  Tudo o que você já escolheu
                </p>

                <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left sm:space-y-3">
                  {SIMPLES_ITEMS.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>

              {/* Completo */}
              <div className="relative rounded-2xl border border-primary/50 bg-white/[0.07] p-6 shadow-glow backdrop-blur-sm sm:p-8">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-primary px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  Você recebe a mais
                </span>
                <div className="mb-5 overflow-hidden rounded-xl border border-white/10 bg-black">
                  <img
                    src={completoImage.url}
                    alt="Versão Completa"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <h2 className="display-3 text-center">Versão Completa</h2>
                <p className="mt-1 text-center font-sans text-xs font-medium uppercase tracking-[0.16em] text-white/55">
                  Tudo do R$ 9,90 + conteúdo extra
                </p>

                <ul className="mx-auto mt-6 max-w-sm space-y-2.5 text-left sm:space-y-3">
                  {COMPLETO_EXTRA_ITEMS.map((item) => (
                    <CheckItem key={item} highlight>
                      {item}
                    </CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Price & CTA */}
          <Reveal
            delay={200}
            className="mx-auto mt-8 max-w-2xl rounded-2xl border border-primary/50 bg-white/[0.07] p-5 shadow-glow backdrop-blur-sm sm:mt-12 sm:p-10"
          >
            <div className="text-center">
              <p className="font-sans text-sm font-medium text-white/70">
                De <span className="line-through">R$ 19,90</span> por apenas
              </p>
              <p className="price-xl mt-1 text-white">R$ 15,90</p>
              <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 font-sans text-xs font-bold uppercase tracking-wider text-primary">
                20% OFF
              </p>
              <p className="mx-auto mt-4 max-w-md font-sans text-sm font-semibold leading-relaxed text-white/90">
                Por apenas <span className="text-primary">R$ 6,00 a mais</span>, você leva todo o conteúdo
                adicional listado acima.
              </p>
            </div>

            <CtaButton variant="success" href={CHECKOUT_COMPLETO_DESCONTO} className="mt-7 sm:mt-9">
              SIM, QUERO A VERSÃO COMPLETA POR R$ 15,90
            </CtaButton>

            <a
              href={CHECKOUT_SIMPLES}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout()}
              className="tap mt-3 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/[0.06] px-4 py-3.5 text-center font-display text-[0.8rem] font-extrabold uppercase leading-tight tracking-[0.01em] text-white/85 transition-colors duration-300 hover:border-white/45 hover:bg-white/[0.1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-3.5 sm:min-h-14 sm:px-7 sm:py-4 sm:text-sm"
            >
              Não, quero continuar com a versão de R$ 9,90
              <ArrowRight className="h-4 w-4 shrink-0" />
            </a>

            <TrustRow />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
