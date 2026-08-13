import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

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
    <section className="section-light section-pad">
      <div className="container-page text-center">
        <Reveal>
          <span className="eyebrow inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-[oklch(0.55_0.1_84)]">
            Bônus Exclusivos
          </span>
          <h2 className="display-2 stack-head mt-7 text-teal">
            +3 Bônus Exclusivos Para Quem Adquirir Hoje
          </h2>
          <p className="lead mx-auto mt-5 max-w-2xl">
            Além do produto principal, você recebe acesso imediato a estes bônus incríveis
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {BONUSES.map((b, i) => (
            <Reveal
              key={b.tag}
              delay={i * 90}
              as="article"
              className="card-premium flex flex-col overflow-hidden p-0 text-left"
            >
              <div className="relative">
                <Placeholder label={b.image} className="aspect-[16/10] w-full rounded-none" />
                <span className="absolute left-4 top-4 rounded-md bg-teal px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {b.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="display-3 text-teal">{b.title}</h3>
                <p className="mt-3.5 font-sans text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
