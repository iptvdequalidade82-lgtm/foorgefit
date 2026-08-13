import { Layers, ListChecks, Target, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Layers,
    n: "+100",
    title: "Treinos",
    text: "Tenha diferentes opções para variar sua rotina.",
  },
  {
    icon: ListChecks,
    n: "100%",
    title: "Organizados",
    text: "Encontre rapidamente o treino que procura.",
  },
  {
    icon: Target,
    n: "+8",
    title: "Objetivos",
    text: "Hipertrofia, definição, fortalecimento e muito mais.",
  },
  {
    icon: Zap,
    n: "24h",
    title: "Acesso imediato",
    text: "Comece a treinar assim que adquirir.",
  },
];

export function Stats() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow text-primary">Por que vale a pena</p>
          <h2 className="display-2 stack-head mt-4">
            Uma biblioteca de treinos, não um PDF solto
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, n, title, text }, i) => (
            <Reveal key={title} delay={i * 80} as="article" className="card-premium p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 ring-1 ring-primary/25">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <p className="stat-number mt-5 text-primary">{n}</p>
              <h3 className="display-3 mt-1.5">{title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
