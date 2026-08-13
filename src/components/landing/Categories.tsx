import { Flame } from "lucide-react";
import { Reveal } from "./Reveal";

const GROUPS = [
  { name: "Pernas", n: "18 treinos" },
  { name: "Glúteos", n: "14 treinos" },
  { name: "Peito", n: "12 treinos" },
  { name: "Costas", n: "12 treinos" },
  { name: "Ombros", n: "10 treinos" },
  { name: "Bíceps", n: "9 treinos" },
  { name: "Tríceps", n: "9 treinos" },
  { name: "Abdômen", n: "16 treinos" },
];

export function Categories() {
  return (
    <section className="section-emerald section-pad">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow text-primary">Grupos musculares</p>
          <h2 className="display-2 stack-head mt-4">Tudo separado do jeito que você treina</h2>
          <p className="lead mx-auto mt-4 max-w-xl">
            Escolha o grupo muscular e comece na hora — sem montar nada do zero.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap carousel · Desktop: grid */}
        <Reveal delay={100}>
          <div className="edge-scroll no-scrollbar mt-9 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:p-0 sm:m-0 lg:grid-cols-4">
            {GROUPS.map((g) => (
              <article
                key={g.name}
                className="card-premium tap flex w-[9.5rem] shrink-0 flex-col justify-between p-5 sm:w-auto"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/12 ring-1 ring-primary/25">
                  <Flame className="h-4 w-4 text-primary" />
                </span>
                <h3 className="mt-6 font-display text-base font-extrabold uppercase tracking-tight">
                  {g.name}
                </h3>
                <p className="mt-1 font-sans text-xs font-medium text-muted-foreground">{g.n}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
