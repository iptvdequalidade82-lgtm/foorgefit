import { Check, ShoppingCart, Tag, Users } from "lucide-react";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

const BENEFITS = [
  "+100 Planilhas de Treinos",
  "+275 GIFs Ilustrados Mostrando o Exercício",
  "Prescrição de Treino para 12 Meses",
  "Protocolo: Desafio 24 Dias",
];

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="section-deep relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-[-20%] h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-page relative">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-lg border border-primary/30 bg-primary/[0.08] px-3.5 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary shadow-[inset_0_1px_0_oklch(1_0_0/0.06)] sm:px-4">
            <Tag className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <strong className="font-extrabold text-foreground">93% OFF</strong>
            <span className="h-3 w-px bg-primary/35" aria-hidden="true" />
            Somente hoje
          </span>
        </div>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="text-center lg:text-left">
            <h1 className="display-1 mx-auto max-w-[16ch] lg:mx-0">
              +100 Planilhas de Treinos Ajustado para o seu Biotipo
            </h1>
            <h2 className="mx-auto mt-6 max-w-xl font-sans text-base font-medium leading-relaxed text-white/70 sm:text-lg lg:mx-0">
              Pare de perder tempo! Saiba exatamente o que seguir e quais os melhores exercícios
            </h2>

            <p className="mt-8 flex items-center justify-center gap-2.5 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-white/60 lg:justify-start">
              <Users className="h-4 w-4 shrink-0 text-primary" />
              +2.347 pessoas já aprovaram
            </p>

            <ul className="mx-auto mt-8 max-w-md space-y-3.5 text-left lg:mx-0">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-sans text-sm leading-relaxed text-white/85 sm:text-[0.95rem]"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 ring-1 ring-primary/30">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onCta}
              className="mt-10 flex w-full max-w-md flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-xl bg-cta px-7 py-4 shadow-[0_16px_34px_-18px_oklch(0.443_0.093_163/0.9)] transition-[transform,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--cta-hover)] lg:mx-0"
            >
              <span className="font-sans text-xs font-medium text-white/70 line-through sm:text-sm">
                De: R$ 87,00
              </span>
              <span className="font-sans text-xs font-medium text-white/80 sm:text-sm">
                Por apenas:
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                R$ 5,90
              </span>
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
                93% OFF
              </span>
            </button>

            <p className="mt-5 flex items-center justify-center gap-2 font-sans text-xs font-medium text-white/60 lg:justify-start">
              <ShoppingCart className="h-4 w-4 shrink-0 text-primary" />+ 3 Bônus Exclusivos de
              GRAÇA
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-sm">
            <Placeholder
              label="IMAGEM HERO"
              className="aspect-[4/5] w-full rounded-2xl ring-1 ring-white/10"
            />
            <span className="absolute -right-2 -top-3 rounded-md bg-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground shadow-card">
              93% OFF
            </span>
            <div className="mt-4 rounded-xl border border-white/12 bg-white/[0.05] px-5 py-4 text-center backdrop-blur-sm">
              <p className="eyebrow text-accent">Somente Hoje!</p>
              <p className="mt-1.5 font-sans text-sm text-white/70">São +100 Planilhas de Treinos</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
