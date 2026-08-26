import { Check, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import simplesImage from "@/assets/oferta-simples.jpg.asset.json";

const BONUSES = ["500 Receitas Low Carb", "300 Receitas Anabólicas", "100 Receitas Saudáveis Fit"];

const SIMPLES_ITEMS = [
  "+200 Planilhas de Treinos",
  "+275 GIFs Explicativos",
  "Prescrição para 12 Meses",
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
    <li className="flex items-start gap-2.5 font-sans text-sm text-white/85">
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

        <Reveal
          delay={120}
          className="mx-auto mt-14 max-w-xl rounded-2xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10"
        >
          <div className="mb-7 overflow-hidden rounded-xl border border-white/10 bg-white">
            <img
              src={simplesImage.url}
              alt="Planilhas de treino do Pacote Simples"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <h3 className="display-3">Pacote Simples</h3>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] px-6 py-8">
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

          <ul className="mx-auto mt-8 max-w-xs space-y-3 text-left">
            {SIMPLES_ITEMS.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ul>

          <p className="eyebrow mt-8 text-white/70">+ 3 Bônus Grátis</p>
          <ul className="mx-auto mt-5 max-w-xs space-y-3 text-left">
            {BONUSES.map((b) => (
              <Item key={b}>{b}</Item>
            ))}
          </ul>

          <CtaButton variant="success" to="/oferta-especial" className="mt-9">
            SIM, QUERO GARANTIR MEU PACOTE AGORA!
          </CtaButton>

          <TrustRow />
        </Reveal>

        <p className="mx-auto mt-10 inline-block rounded-xl border border-white/15 px-6 py-3.5 font-sans text-sm font-medium text-white/75">
          + 2.347 pessoas já transformaram suas vidas!
        </p>
      </div>
    </section>
  );
}
