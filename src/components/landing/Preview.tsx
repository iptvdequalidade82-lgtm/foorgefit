import { Check } from "lucide-react";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

const SHOTS = [
  { label: "PRÉVIA PLANILHA 1", caption: "Planilha ABC · Hipertrofia" },
  { label: "PRÉVIA PLANILHA 2", caption: "Full Body · Iniciante" },
  { label: "PRÉVIA PLANILHA 3", caption: "HIIT · Definição" },
];

const POINTS = [
  "Séries, repetições e descanso já definidos",
  "GIF de execução em cada exercício",
  "Funciona no celular, tablet e computador",
];

export function Preview() {
  return (
    <section className="section-light section-pad">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow text-primary">Veja por dentro</p>
          <h2 className="display-2 stack-head mt-4">Você vai receber tudo isso</h2>
          <p className="lead mx-auto mt-4 max-w-xl">
            Prévia real da organização das planilhas e dos treinos disponíveis.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="edge-scroll no-scrollbar mt-9 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:m-0 sm:p-0">
            {SHOTS.map((s) => (
              <figure
                key={s.label}
                className="card-premium w-[15rem] shrink-0 overflow-hidden p-3 sm:w-auto"
              >
                <Placeholder label={s.label} className="aspect-[9/16] w-full rounded-xl" />
                <figcaption className="px-1 py-3 text-center font-sans text-xs font-semibold text-muted-foreground">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 font-sans text-sm leading-relaxed"
              >
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/20 ring-1 ring-primary/35">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                <span className="min-w-0">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
