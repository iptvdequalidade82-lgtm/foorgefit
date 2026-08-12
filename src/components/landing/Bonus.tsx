import { Placeholder } from "./Placeholder";

const BONUSES = [
  {
    tag: "Bônus #1",
    image: "IMAGEM BÔNUS 1",
    title: "250 Receitas Low Carb",
    text: "Preparado para você que está com dificuldades em montar cardápios para o seu dia a dia com foco em dietas Low Carb.",
  },
  {
    tag: "Bônus #2",
    image: "IMAGEM BÔNUS 2",
    title: "128 Receitas Anabólicas",
    text: "Para você que deseja escolher um estilo de vida saudável com alimentação limpa, concentrada em alimentos integrais não refinados, em vez de alternativas pré-cozidas ou processadas.",
  },
  {
    tag: "Bônus #3",
    image: "IMAGEM BÔNUS 3",
    title: "50 Receitas Saudáveis",
    text: "Receitas para Secar! Este guia prático elaborado para proporcionar a você uma coleção irresistível de receitas saudáveis, projetadas especificamente para apoiar seus objetivos de perda de peso e bem estar.",
  },
];

export function Bonus() {
  return (
    <section className="section-light py-14 sm:py-20">
      <div className="container-page text-center">
        <span className="inline-block rounded-full bg-gradient-primary px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-primary-foreground sm:text-xs">
          🎁 Bônus Exclusivos
        </span>
        <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
          +3 Bônus Exclusivos Para Quem Adquirir Hoje
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm opacity-70">
          Além do produto principal, você recebe acesso imediato a estes bônus incríveis
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BONUSES.map((b) => (
            <article
              key={b.tag}
              className="overflow-hidden rounded-2xl border border-border bg-surface text-surface-foreground shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <Placeholder label={b.image} className="aspect-[16/10] w-full rounded-none" />
                <span className="absolute left-3 top-3 rounded-md bg-gradient-primary px-2.5 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">
                  {b.tag}
                </span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-base font-extrabold">{b.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {b.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
