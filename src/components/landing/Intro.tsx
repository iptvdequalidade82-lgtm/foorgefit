import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="section-light section-pad">
      <div className="container-page text-center">
        <Reveal>
          <span className="mx-auto inline-block max-w-3xl rounded-full border border-primary/20 bg-primary/[0.07] px-5 py-2.5 font-sans text-[0.72rem] font-semibold leading-relaxed tracking-wide text-primary sm:text-xs">
            Treinos personalizados como phat (power hypertrophy adaptive training) upper/lower
            push/pull, fullbody, metabólico e muito mais.
          </span>
          <h2 className="display-2 stack-head mt-9 ">
            Treinos focado em cada grupo muscular é o fim das dúvidas sobre volume e alteração de
            treino.
          </h2>
          <p className="lead mx-auto mt-7 max-w-2xl">
            Mais de <strong className="font-semibold text-foreground">2.347 pessoas</strong> já
            estão fazendo o acompanhamento direcionado e dando adeus as fichinhas de academia.{" "}
            <strong className="font-semibold text-foreground">E você?</strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
