import { FileText, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

export function ExperienceChoice() {
  return (
    <section className="section-light section-pad">
      <div className="container-page">
        <Reveal className="text-center">
          <p className="eyebrow text-primary">Duas formas de começar</p>
          <h2 className="display-2 mt-4">Qual experiência você prefere?</h2>
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          <Reveal className="app-panel p-7">
            <FileText className="h-7 w-7 text-primary" />
            <h3 className="display-3 mt-5">Pacote Completo Digital</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Materiais prontos para consultar: planilhas, GIFs, guias, receitas e bônus.</p>
          </Reveal>
          <Reveal delay={80} className="app-panel border-primary/35 p-7">
            <Smartphone className="h-7 w-7 text-primary" />
            <h3 className="display-3 mt-5">ForgeFit App</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Uma ferramenta interativa para montar, personalizar e organizar sua própria rotina.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
