import { Quote, Star } from "lucide-react";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

const ITEMS = [1, 2, 3, 4, 5, 6];

export function Testimonials() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page text-center">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Depoimentos</p>
          <h2 className="display-2 stack-head mt-4 ">
            Quem Fez, <span className="text-primary">Se SUPEROU!</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i, idx) => (
            <Reveal key={i} delay={(idx % 3) * 90} as="figure" className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              </div>
              <Placeholder
                label={`IMAGEM DEPOIMENTO ${i}`}
                className="mt-5 aspect-[4/3] w-full rounded-xl"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
