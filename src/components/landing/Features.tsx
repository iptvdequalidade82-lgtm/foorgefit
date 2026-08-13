import heroImage from "@/assets/hero-planilhas.png.asset.json";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    image: "IMAGEM CARD 1",
    title: "+ DE 200 PLANILHAS",
    text: "Pare de perder tempo montando treinos ou copiando treinos genéricos da internet. Tudo aqui já está pronto, com instruções claras, séries, reps e GIFs.",
  },
  {
    image: "IMAGEM CARD 2",
    title: "+ 275 GIFS EXPLICATIVOS",
    text: "Gifs explicando cada exercício para te ajudar na execução correta de cada exercício.",
  },
  {
    image: "IMAGEM CARD 3",
    title: "DESAFIO 24 DIAS",
    text: "O protocolo oculto que desperta o seu metabolismo para entrar em modo de queima extrema 24 horas por dia. Inspirado nos atletas de elite.",
  },
];

export function Features() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head ">Veja o que você vai Aprender e Receber</h2>
          <p className="lead mx-auto mt-6 max-w-2xl">
            Você vai encontrar métodos exclusivos e que funcionam para ajudá-lo a atingir seus
            objetivos. Com treinos personalizados para iniciantes, intermediários e avançados.
          </p>
          <p className="eyebrow mt-8 text-primary">Chega de depender de fichinhas da academia!</p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} as="article" className="card-premium p-8">
              {i === 0 ? (
                <div className="mx-auto aspect-square w-32 overflow-hidden rounded-full bg-white ring-1 ring-border sm:w-36">
                  <img
                    src={heroImage.url}
                    alt="Planilhas de treino organizadas"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <Placeholder
                  label={item.image}
                  className="mx-auto aspect-square w-32 rounded-full sm:w-36"
                />
              )}
              <h3 className="display-3 mt-7 ">{item.title}</h3>
              <p className="mt-3.5 font-sans text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
