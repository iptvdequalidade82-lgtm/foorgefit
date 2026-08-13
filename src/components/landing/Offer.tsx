import { Check, Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const CHECKOUT_URL = "https://checkpay.me/?p=100-planilhas-de-treinos";

const BONUSES = ["250 Receitas Low Carb", "128 Receitas Anabólicas", "50 Receitas Saudáveis"];

export function Offer() {
  return (
    <section id="oferta" className="section-deep scroll-mt-4">
      <div className="bg-cta py-3.5 text-center">
        <p className="eyebrow text-white">Oferta Especial Por Tempo Limitado!</p>
      </div>

      <div className="container-page section-pad text-center">
        <Reveal>
          <h2 className="display-2 stack-head">Pacote: +100 Planilhas de Treinos</h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/65">
            Pare de perder tempo! Saiba exatamente o que seguir e quais os melhores exercícios.
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="mx-auto mt-14 max-w-md rounded-2xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10"
        >
          <h3 className="display-3">Pacote Completo</h3>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] px-6 py-8">
            <p className="flex items-center justify-center gap-2.5 font-sans text-xs font-medium text-white/60">
              <span className="line-through">R$ 87,00</span>
              <span className="rounded bg-white/12 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                93% OFF
              </span>
            </p>
            <p className="price-xl mt-3 text-white">R$ 6,90</p>
            <p className="mt-2 font-sans text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              Pagamento único
            </p>
          </div>

          <p className="eyebrow mt-8 text-white/70">+ 3 Bônus Grátis</p>
          <ul className="mx-auto mt-5 max-w-xs space-y-3 text-left">
            {BONUSES.map((b) => (
              <li key={b} className="flex items-start gap-2.5 font-sans text-sm text-white/85">
                <span className="mt-0.5 grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-primary/25">
                  <Check className="h-2.5 w-2.5 text-primary" />
                </span>
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>

          <CtaButton variant="success" href={CHECKOUT_URL} className="mt-9">
            SIM, QUERO GARANTIR MEU PACOTE AGORA!
          </CtaButton>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-[11px] font-medium text-white/60">
            {[
              { icon: Lock, label: "Compra segura" },
              { icon: Zap, label: "Acesso imediato" },
              { icon: ShieldCheck, label: "Pagamento protegido" },
              { icon: Smartphone, label: "Compatível com celular" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-1.5">
                <Icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                {label}
              </li>
            ))}
          </ul>

        </Reveal>

        <p className="mx-auto mt-10 inline-block rounded-xl border border-white/15 px-6 py-3.5 font-sans text-sm font-medium text-white/75">
          + 2.347 pessoas já transformaram suas vidas!
        </p>
      </div>
    </section>
  );
}
