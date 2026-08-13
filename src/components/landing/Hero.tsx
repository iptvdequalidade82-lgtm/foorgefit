import { Check, Dumbbell, Flame, Star, Users } from "lucide-react";
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
    <section className="section-deep relative overflow-hidden pb-14 pt-8 sm:pb-24 sm:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-30%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px] sm:h-[40rem] sm:w-[40rem]"
      />
      <div className="container-page relative">
        <div className="flex justify-center">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-primary">
            <Flame className="h-3.5 w-3.5 shrink-0" />
            93% OFF · Somente Hoje
          </span>
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="text-center lg:text-left">
            <h1 className="display-1 mx-auto max-w-[12ch] lg:mx-0">
              Seu treino.
              <br />
              Seu objetivo.
              <br />
              <span className="text-gradient-primary">Seu resultado.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-md font-sans text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Acesso imediato a uma biblioteca completa de <strong className="font-semibold text-foreground">+100 treinos e planilhas</strong> para todos os objetivos e grupos musculares.
            </p>

            <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-2.5 lg:mx-0">
              {[
                { n: "+100", l: "Treinos" },
                { n: "+275", l: "GIFs" },
                { n: "12", l: "Meses" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3 text-center"
                >
                  <p className="font-display text-xl font-extrabold tracking-tight text-primary">
                    {s.n}
                  </p>
                  <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <ul className="mx-auto mt-7 max-w-md space-y-3 text-left lg:mx-0">
              {BENEFITS.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-sans text-[0.95rem] leading-relaxed text-foreground/85"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 ring-1 ring-primary/35">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onCta}
              className="tap mt-9 flex min-h-14 w-full max-w-md items-center justify-center gap-2.5 rounded-2xl bg-gradient-cta px-6 py-4 font-display text-base font-extrabold uppercase tracking-[0.02em] text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Flame className="h-5 w-5 shrink-0" />
              Quero acessar os treinos
            </button>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:justify-start">
              <p className="flex items-center gap-2 font-sans text-xs font-medium text-muted-foreground">
                <Users className="h-4 w-4 shrink-0 text-primary" />
                +2.347 alunos
              </p>
              <p className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 font-sans text-xs font-medium text-muted-foreground">
                  4,9/5
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative mx-auto w-full max-w-sm">
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-3">
              <Placeholder
                label="IMAGEM HERO"
                className="aspect-[4/5] w-full rounded-[1.25rem]"
              />
              <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                93% OFF
              </span>
            </div>
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15">
                <Dumbbell className="h-5 w-5 text-primary" />
              </span>
              <div className="min-w-0 text-left">
                <p className="font-display text-sm font-bold">Biblioteca completa</p>
                <p className="truncate text-xs text-muted-foreground">
                  Organizada por objetivo e grupo muscular
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
