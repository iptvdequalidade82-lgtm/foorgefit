import { Placeholder } from "./Placeholder";

const ITEMS = [
  {
    image: "IMAGEM CARD 1",
    title: "+ DE 100 PLANILHAS",
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
    <section className="bg-background py-14 sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-extrabold text-teal sm:text-3xl">Veja o que você vai Aprender e Receber</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Você vai encontrar métodos exclusivos e que funcionam para ajudá-lo a atingir seus
          objetivos. Com treinos personalizados para iniciantes, intermediários e avançados.
        </p>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-wide text-primary">
          Chega de depender de fichinhas da academia!
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-card transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <Placeholder label={item.image} className="mx-auto aspect-square w-36 rounded-full" />
              <h3 className="mt-5 text-sm font-extrabold uppercase tracking-wide text-primary sm:text-base">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
