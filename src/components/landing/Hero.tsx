import { Check, ShoppingCart, Users } from "lucide-react";
import { Placeholder } from "./Placeholder";

const BENEFITS = [
  "+100 Planilhas de Treinos",
  "+275 GIFs Ilustrados Mostrando o Exercício",
  "Prescrição de Treino para 12 Meses",
  "Protocolo: Desafio 24 Dias",
];

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="section-deep relative overflow-hidden pb-12 pt-6 sm:pb-16">
      <div className="container-page">
        <div className="flex justify-center">
          <span className="rounded-full bg-gradient-cta px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground sm:text-xs">
            Oferta Especial - 93% de Desconto
          </span>
        </div>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-up text-center lg:text-left">
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">
              +100 Planilhas de Treinos Ajustado para o seu Biotipo
            </h1>
            <h2 className="mx-auto mt-4 max-w-xl text-base font-bold text-accent sm:text-lg lg:mx-0">
              Pare de perder tempo! Saiba exatamente o que seguir e quais os melhores exercícios
            </h2>

            <p className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground lg:justify-start">
              <Users className="h-4 w-4 shrink-0 text-primary" />
              +2.347 pessoas já aprovaram
            </p>

            <ul className="mx-auto mt-5 max-w-md space-y-2.5 text-left lg:mx-0">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onCta}
              className="mt-7 flex w-full max-w-md items-center justify-center gap-3 rounded-xl bg-gradient-cta px-6 py-4 shadow-glow transition-transform duration-200 hover:scale-[1.02] lg:mx-0"
            >
              <span className="text-xs font-semibold text-primary-foreground/85 line-through sm:text-sm">
                De: R$ 87,00
              </span>
              <span className="text-xs font-semibold text-primary-foreground/85 sm:text-sm">
                Por apenas:
              </span>
              <span className="text-xl font-extrabold text-primary-foreground sm:text-2xl">
                R$ 5,90
              </span>
              <span className="rounded-md bg-background/25 px-2 py-0.5 text-[10px] font-extrabold text-primary-foreground">
                93% OFF
              </span>
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground lg:justify-start">
              <ShoppingCart className="h-4 w-4 shrink-0 text-primary" />+ 3 Bônus Exclusivos de GRAÇA
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <Placeholder label="IMAGEM HERO" className="aspect-[4/3] w-full rounded-2xl" />
            <span className="absolute -right-2 -top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-extrabold uppercase text-accent-foreground shadow-card">
              93% OFF
            </span>
            <div className="mt-3 rounded-xl border border-border bg-surface px-4 py-3 text-center">
              <p className="text-xs font-extrabold uppercase tracking-wide text-accent">
                Somente Hoje!
              </p>
              <p className="mt-1 text-xs text-muted-foreground">São +100 Planilhas de Treinos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
