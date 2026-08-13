import { MapPin, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import cliente1 from "@/assets/cliente-download_4.jpg.asset.json";
import cliente2 from "@/assets/cliente-download_5.jpg.asset.json";
import cliente3 from "@/assets/cliente-download_6.jpg.asset.json";
import cliente4 from "@/assets/cliente-4.jpg.asset.json";

type Depoimento = {
  photo: string;
  alt: string;
  name?: string;
  location?: string;
  quote?: string;
};

// Fotos reais de clientes. Nome, cidade e depoimento serão preenchidos
// somente com as informações verdadeiras fornecidas pelo cliente.
const ITEMS: Depoimento[] = [
  { photo: cliente1.url, alt: "Cliente FORGEFIT" },
  { photo: cliente2.url, alt: "Cliente FORGEFIT" },
  { photo: cliente3.url, alt: "Cliente FORGEFIT" },
  { photo: cliente4.url, alt: "Cliente FORGEFIT" },
];

function Card({ item }: { item: Depoimento }) {
  return (
    <figure className="card-premium flex h-full w-[82vw] shrink-0 flex-col overflow-hidden text-left sm:w-auto">
      <div className="aspect-[4/5] w-full overflow-hidden bg-secondary">
        <img
          src={item.photo}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
      </div>

      <figcaption className="flex flex-1 flex-col p-6">
        <span className="eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-[0.625rem] text-primary">
          Relato de cliente
        </span>

        <h3 className="display-3 mt-4 min-w-0 truncate">
          {item.name ?? "Nome do cliente"}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 font-sans text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
          {item.location ?? "Cidade/Estado"}
        </p>

        <div className="mt-5 flex-1">
          <Quote className="h-4 w-4 text-primary/70" />
          <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
            {item.quote ? `“${item.quote}”` : "Depoimento real a ser adicionado."}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <Reveal className="text-center">
          <h2 className="display-2 stack-head">
            Quem começou, está <span className="text-primary">colocando em prática.</span>
          </h2>
          <p className="lead mx-auto mt-6 max-w-2xl">
            Veja relatos de pessoas que já estão utilizando os materiais do FORGEFIT na rotina.
          </p>
        </Reveal>

        {/* Mobile: carrossel */}
        <div className="edge-scroll mt-12 gap-5 sm:hidden">
          {ITEMS.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>

        {/* Desktop: grade */}
        <div className="mt-14 hidden gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={(i % 4) * 90} className="h-full">
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
