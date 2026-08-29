import { Check, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import simplesImage from "@/assets/oferta-simples.jpg.asset.json";
import completoImage from "@/assets/oferta-completo.jpg.asset.json";

import { CHECKOUT_COMPLETO } from "@/lib/checkout";

const CHECKOUT_URL_COMPLETO = CHECKOUT_COMPLETO;

const BONUSES = ["500 Receitas Low Carb", "300 Receitas Anabólicas", "100 Receitas Saudáveis Fit"];

const COMPLETO_ITEMS = [
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

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 font-sans text-[12px] leading-snug text-white/85 sm:gap-2.5 sm:text-sm">
      <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-primary/25">
        <Check className="h-2.5 w-2.5 text-primary" />
      </span>
      <span className="min-w-0">{children}</span>
    </li>
  );
}

export function Offer() {
  return (
    <section id="oferta" className="section-deep scroll-mt-4">
      <div className="bg-cta py-3.5 text-center">
        <p className="eyebrow text-white">Oferta Especial Por Tempo Limitado!</p>
      </div>

      <div className="container-page section-pad text-center">
        <Reveal>
          <h2 className="display-2 stack-head">Pacote: +200 Planilhas de Treinos</h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/65">
            Pare de perder tempo! Saiba exatamente o que seguir e quais os melhores exercícios.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 items-start gap-3 sm:gap-7 lg:mt-14">
          {/* Pacote Simples */}
          <Reveal
            delay={120}
            className="rounded-2xl border border-white/12 bg-white/[0.05] p-4 backdrop-blur-sm sm:p-8 lg:p-10"
          >
            <div className="mb-4 overflow-hidden sm:mb-7 rounded-xl border border-white/10 bg-white">
              <img
                src={simplesImage.url}
                alt="Planilhas de treino do Pacote Simples"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <h3 className="display-3">Pacote Simples</h3>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-5 sm:mt-7 sm:px-6 sm:py-8">
              <p className="flex items-center justify-center gap-2.5 font-sans text-xs font-medium text-white/60">
                <span className="line-through">R$ 87,00</span>
                <span className="rounded bg-white/12 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  93% OFF
                </span>
              </p>
              <p className="price-xl mt-3 text-white">R$ 9,90</p>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                Pagamento único
              </p>
            </div>

            <p className="eyebrow mt-6 text-white/70 sm:mt-8">+ 3 Bônus Grátis</p>
            <ul className="mx-auto mt-4 max-w-xs space-y-2.5 text-left sm:mt-5 sm:space-y-3">
              {BONUSES.map((b) => (
                <Item key={b}>{b}</Item>
              ))}
            </ul>

            <CtaButton variant="success" to="/oferta-especial" className="mt-6 sm:mt-9">
              SIM, QUERO GARANTIR MEU PACOTE AGORA!
            </CtaButton>

            <TrustRow />
          </Reveal>

          {/* Pacote Completo */}
          <Reveal
            delay={200}
            className="relative rounded-2xl border border-primary/50 bg-white/[0.07] p-4 shadow-glow backdrop-blur-sm sm:p-8 lg:p-10"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-md bg-primary px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Mais completo
            </span>
            <div className="mb-4 overflow-hidden sm:mb-7 rounded-xl border border-white/10 bg-black">
              <img
                src={completoImage.url}
                alt="Fichas e materiais do Pacote Completo"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
            <h3 className="display-3">Pacote Completo</h3>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-5 sm:mt-7 sm:px-6 sm:py-8">
              <p className="flex items-center justify-center gap-2.5 font-sans text-xs font-medium text-white/60">
                <span className="line-through">R$ 197,00</span>
                <span className="rounded bg-white/12 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  90% OFF
                </span>
              </p>
              <p className="price-xl mt-3 text-white">R$ 19,90</p>
              <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                Pagamento único
              </p>
            </div>

            <p className="eyebrow mt-6 text-white/70 sm:mt-8">Tudo do Pacote Simples +</p>
            <ul className="mx-auto mt-4 max-w-sm space-y-2.5 text-left sm:mt-5 sm:space-y-3">
              {COMPLETO_ITEMS.map((b) => (
                <Item key={b}>{b}</Item>
              ))}
            </ul>

            <p className="eyebrow mt-6 text-white/70 sm:mt-8">+ 3 Bônus Grátis</p>
            <ul className="mx-auto mt-4 max-w-xs space-y-2.5 text-left sm:mt-5 sm:space-y-3">
              {BONUSES.map((b) => (
                <Item key={b}>{b}</Item>
              ))}
            </ul>

            <CtaButton variant="success" href={CHECKOUT_URL_COMPLETO} className="mt-6 sm:mt-9">
              QUERO O PACOTE COMPLETO POR R$ 19,90
            </CtaButton>

            <TrustRow />
          </Reveal>
        </div>

        <p className="mx-auto mt-10 inline-block rounded-xl border border-white/15 px-6 py-3.5 font-sans text-sm font-medium text-white/75">
          + 2.347 pessoas já transformaram suas vidas!
        </p>
      </div>
    </section>
  );
}
