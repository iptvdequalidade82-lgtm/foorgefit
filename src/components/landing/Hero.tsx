import { ArrowDown, ArrowRight, Check, Infinity, Smartphone } from "lucide-react";
import dashboardImage from "@/assets/forgefit-dashboard.png.asset.json";
import recommendationImage from "@/assets/forgefit-recomendacao.png.asset.json";
import executionsImage from "@/assets/forgefit-execucoes.png.asset.json";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Hero({ onCta }: { onCta: () => void }) {
  const scrollToApp = () => document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero-grid relative overflow-hidden border-b border-border pb-16 pt-7 sm:pb-24 sm:pt-10">
      <div className="container-page relative">
        <div className="flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-sm font-extrabold" aria-label="ForgeFit início">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-black text-primary-foreground">F</span>
            FORGEFIT
          </a>
          <span className="hidden items-center gap-2 text-xs font-semibold text-muted-foreground sm:flex">
            <Infinity className="h-4 w-4 text-primary" /> Acesso vitalício
          </span>
        </div>

        <div id="top" className="grid items-center gap-12 pt-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14 lg:pt-20">
          <Reveal className="text-center lg:text-left">
            <p className="eyebrow text-primary">Treino digital, do seu jeito</p>
            <h1 className="display-1 mt-5">Seu treino.<br /><span className="text-primary">Do seu jeito.</span></h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              Escolha entre o pacote completo de conteúdos ou tenha acesso ao ForgeFit, o aplicativo onde você monta sua própria rotina de treino.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <Button onClick={scrollToApp} size="lg" className="h-14 rounded-lg px-7 font-display font-extrabold">
                CONHECER O FORGEFIT <ArrowRight className="h-4 w-4" />
              </Button>
              <Button onClick={onCta} size="lg" variant="outline" className="h-14 rounded-lg px-7 font-display font-extrabold">
                VER OPÇÕES <ArrowDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground lg:justify-start">
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Planos a partir de R$ 9,90</span>
              <span className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Pagamento único</span>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative mx-auto w-full max-w-3xl pb-6">
            <div className="hero-screen relative z-10 ml-auto w-[88%] overflow-hidden sm:w-[82%]">
              <img src={dashboardImage.url} alt="Tela inicial real do aplicativo ForgeFit" loading="eager" className="aspect-[16/10] w-full object-cover object-top" />
            </div>
            <div className="hero-screen absolute -bottom-2 left-0 z-20 w-[47%] overflow-hidden rotate-[-2deg]">
              <img src={recommendationImage.url} alt="Recomendação de treino no ForgeFit" loading="eager" className="aspect-[4/3] w-full object-cover object-center" />
            </div>
            <div className="hero-screen absolute -bottom-5 right-0 z-20 w-[43%] overflow-hidden rotate-[2deg]">
              <img src={executionsImage.url} alt="Execuções explicativas no ForgeFit" loading="eager" className="aspect-[4/3] w-full object-cover object-center" />
            </div>
            <div className="absolute right-3 top-3 z-30 flex items-center gap-2 rounded-lg border border-primary/30 bg-background/90 px-3 py-2 text-[10px] font-extrabold backdrop-blur-md sm:text-xs">
              <Smartphone className="h-4 w-4 text-primary" /> APP FORGEFIT
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
