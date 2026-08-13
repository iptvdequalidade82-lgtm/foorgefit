import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import cliente1 from "@/assets/cliente-download_4.jpg.asset.json";
import cliente2 from "@/assets/cliente-download_5.jpg.asset.json";
import cliente3 from "@/assets/cliente-download_6.jpg.asset.json";
import cliente4 from "@/assets/cliente-4.jpg.asset.json";

const ITEMS = [
  {
    photo: cliente1.url,
    name: "Marina Ribeiro",
    location: "Belo Horizonte / MG",
    text: "As planilhas me deram direção. Antes eu ia pra academia sem saber o que fazer, hoje é só abrir e treinar.",
  },
  {
    photo: cliente2.url,
    name: "Lucas Almeida",
    location: "Curitiba / PR",
    text: "Os GIFs ajudam demais na execução. Corrigi vários erros que eu fazia sem perceber.",
  },
  {
    photo: cliente3.url,
    name: "Paulo Mendes",
    location: "Salvador / BA",
    text: "Material muito completo pelo preço. Uso direto no celular durante o treino.",
  },
  {
    photo: cliente4.url,
    name: "Beatriz Souza",
    location: "Campinas / SP",
    text: "O desafio de 24 dias me tirou da estagnação. Voltei a ter constância na rotina.",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head">
            Quem Fez, <span className="text-primary">Se SUPEROU!</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, idx) => (
            <Reveal key={item.name} delay={(idx % 4) * 90} as="figure" className="card-premium p-6">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <Quote className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              </div>

              <div className="mx-auto mt-5 aspect-square w-28 overflow-hidden rounded-full ring-1 ring-border sm:w-32">
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <h3 className="display-3 mt-5">{item.name}</h3>
              <p className="mt-1 font-sans text-xs text-muted-foreground">{item.location}</p>
              <p className="mt-3.5 font-sans text-sm leading-relaxed text-muted-foreground">
                “{item.text}”
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
