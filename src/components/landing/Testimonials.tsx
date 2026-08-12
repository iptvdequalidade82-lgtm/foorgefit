import { Quote, Star } from "lucide-react";
import { Placeholder } from "./Placeholder";

const ITEMS = [1, 2, 3, 4, 5, 6];

export function Testimonials() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <div className="container-page text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] opacity-60">Depoimentos</p>
        <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
          Quem Fez, <span className="text-primary">Se SUPEROU!</span>
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((i) => (
            <figure
              key={i}
              className="rounded-2xl border border-border bg-surface p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 shrink-0 text-muted-foreground" />
              </div>
              <Placeholder
                label={`IMAGEM DEPOIMENTO ${i}`}
                className="mt-4 aspect-[4/3] w-full rounded-lg"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
