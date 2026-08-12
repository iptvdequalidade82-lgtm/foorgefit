import { Check, Lock } from "lucide-react";
import { CtaButton } from "./CtaButton";

const CHECKOUT_URL = "https://checkpay.me/?p=100-planilhas-de-treinos";

const BONUSES = ["250 Receitas Low Carb", "128 Receitas Anabólicas", "50 Receitas Saudáveis"];

export function Offer() {
  return (
    <section id="oferta" className="section-deep scroll-mt-4">
      <div className="bg-gradient-cta py-3 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-primary-foreground sm:text-sm">
          ⚡ Oferta Especial Por Tempo Limitado! ⚡
        </p>
      </div>

      <div className="container-page py-14 text-center sm:py-20">
        <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-accent-foreground sm:text-xs">
          93% de desconto somente hoje
        </span>
        <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
          Pacote: +100 Planilhas de Treinos
        </h2>
        <p className="mt-4 text-sm text-muted-foreground">Pare de perder tempo!</p>
        <p className="text-sm text-muted-foreground">
          Saiba exatamente o que seguir e quais os melhores exercícios.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-2xl bg-gradient-offer p-6 shadow-glow sm:p-8">
          <span className="inline-block rounded-full bg-white/15/25 px-4 py-1 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground">
            ⭐ Super Oferta ⭐
          </span>
          <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide sm:text-base">
            🏋 Pacote Completo
          </h3>

          <div className="mt-5 rounded-xl bg-gradient-cta px-5 py-6 shadow-card">
            <p className="flex items-center justify-center gap-2 text-xs font-semibold text-primary-foreground/85">
              <span className="line-through">R$ 87,00</span>
              <span className="rounded bg-background/25 px-1.5 py-0.5 text-[10px] font-extrabold">
                93% OFF
              </span>
            </p>
            <p className="mt-2 text-4xl font-extrabold text-primary-foreground sm:text-5xl">
              R$ 5,90
            </p>
            <p className="mt-1 text-xs font-semibold text-primary-foreground/85">Pagamento único</p>
          </div>

          <p className="mt-6 text-xs font-extrabold uppercase tracking-wide sm:text-sm">
            🎁 + 3 Bônus Grátis
          </p>
          <ul className="mx-auto mt-4 max-w-xs space-y-2 text-left">
            {BONUSES.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs sm:text-sm">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-cta">
                  <Check className="h-2.5 w-2.5 text-primary-foreground" />
                </span>
                <span className="min-w-0">{b}</span>
              </li>
            ))}
          </ul>

          <CtaButton variant="success" href={CHECKOUT_URL} className="mt-7 animate-pulse-soft">
            SIM, QUERO GARANTIR MEU PACOTE AGORA!
          </CtaButton>

          <p className="mt-4 flex items-center justify-center gap-2 text-[11px] text-primary-foreground/80">
            <Lock className="h-3.5 w-3.5 shrink-0" /> Compra Segura
          </p>
        </div>

        <p className="mx-auto mt-8 inline-block rounded-xl border border-primary/50 px-5 py-3 text-xs font-bold text-primary sm:text-sm">
          + 2.347 pessoas já transformaram suas vidas!
        </p>
      </div>
    </section>
  );
}
