import { Reveal } from "./Reveal";
import lowCarbImage from "@/assets/bonus-low-carb.jpg.asset.json";
import anabolicasImage from "@/assets/bonus-anabolicas.jpg.asset.json";
import fitImage from "@/assets/bonus-fit.jpg.asset.json";

const BONUSES = [
  {
    tag: "Bônus #1",
    image: lowCarbImage.url,
    title: "500 Receitas Low Carb",
    text: "Preparado para você que está com dificuldades em montar cardápios para o seu dia a dia com foco em dietas Low Carb.",
  },
  {
    tag: "Bônus #2",
    image: anabolicasImage.url,
    title: "300 Receitas Anabólicas",
    text: "Para você que deseja escolher um estilo de vida saudável com alimentação limpa, concentrada em alimentos integrais não refinados, em vez de alternativas pré-cozidas ou processadas.",
  },
  {
    tag: "Bônus #3",
    image: fitImage.url,
    title: "100 Receitas Saudáveis Fit",
    text: "Receitas para Secar! Este guia prático elaborado para proporcionar a você uma coleção irresistível de receitas saudáveis, projetadas especificamente para apoiar seus objetivos de perda de peso e bem estar.",
  },
];

export function Bonus() {
  return (
    <section className="section-light section-pad">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head">
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
              <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden bg-white p-6">
                <img
                  src={b.image}
                  alt={b.title}
                  loading="lazy"
                  className="h-full w-auto max-w-full rounded-md object-contain shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]"
                />
                <span className="absolute left-4 top-4 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                  {b.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="display-3 ">{b.title}</h3>
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
