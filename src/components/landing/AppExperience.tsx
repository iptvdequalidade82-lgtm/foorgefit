import {
  CalendarDays,
  Check,
  Download,
  Dumbbell,
  Heart,
  Play,
  SlidersHorizontal,
  Sparkles,
  Utensils,
} from "lucide-react";
import dashboardImage from "@/assets/forgefit-dashboard.png.asset.json";
import recommendationImage from "@/assets/forgefit-recomendacao.png.asset.json";
import executionsImage from "@/assets/forgefit-execucoes.png.asset.json";
import demoVideo from "@/assets/forgefit-demonstracao.mp4.asset.json";
import { Reveal } from "./Reveal";

const DAYS = [
  ["SEG", "Peito + tríceps"],
  ["TER", "Costas + bíceps"],
  ["QUA", "Pernas"],
  ["QUI", "Ombros"],
  ["SEX", "Braços"],
  ["SÁB", "Livre"],
  ["DOM", "Descanso"],
];

const EQUIPMENT = ["Halteres", "Barra", "Polia", "Máquina", "Cross", "Banco", "Peso corporal"];

const EXTRA_FEATURES = [
  { icon: Heart, title: "Favoritos", text: "Guarde os exercícios que mais combinam com sua rotina." },
  { icon: Download, title: "Downloads", text: "Mantenha seus materiais organizados em um só lugar." },
  { icon: CalendarDays, title: "Cronograma", text: "Distribua seus treinos pelos dias da sua semana." },
  { icon: SlidersHorizontal, title: "Treinos personalizados", text: "Ajuste exercícios, ordem, séries, repetições e descanso." },
  { icon: Play, title: "Biblioteca de execuções", text: "Consulte mais de 300 demonstrações diretamente no app." },
  { icon: Utensils, title: "Receitas", text: "Encontre ideias de refeições para complementar sua rotina." },
];

function AppScreenshot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`app-window overflow-hidden ${className}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
      </div>
      <img src={src} alt={alt} loading="lazy" className="w-full object-cover object-top" />
    </div>
  );
}

export function AppExperience() {
  return (
    <>
      <section id="app" className="section-pad bg-background scroll-mt-8">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-primary">Aplicativo completo de treinos</p>
            <h2 className="display-2 mt-4">Você monta seu treino do seu jeito.</h2>
            <p className="lead mx-auto mt-5 max-w-2xl">
              Escolha músculos, exercícios, equipamentos, ordem, séries, repetições e descanso. O ForgeFit se adapta à sua rotina.
            </p>
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-10 max-w-sm">
            <div className="app-window overflow-hidden border-primary/30 bg-card">
              <video
                src={demoVideo.url}
                poster={dashboardImage.url}
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full bg-background object-cover"
                aria-label="Demonstração em vídeo do aplicativo ForgeFit"
              />
            </div>
            <p className="mt-3 text-center text-xs font-semibold text-muted-foreground">Veja o ForgeFit funcionando na prática</p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal className="app-panel p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CalendarDays className="h-5 w-5" />
              </div>
              <h3 className="display-3 mt-6">Monte sua semana do seu jeito</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Personalize cada dia e combine os grupos musculares como preferir.
              </p>
              <div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-7">
                {DAYS.map(([day, workout], index) => (
                  <div key={day} className={`min-h-20 rounded-lg border p-2 text-center ${index === 0 ? "border-primary bg-primary/10" : "border-border bg-white/[0.03]"}`}>
                    <p className="text-[10px] font-bold text-primary">{day}</p>
                    <p className="mt-2 text-[10px] leading-tight text-foreground/75">{workout}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">Esse é apenas um exemplo. Você pode personalizar sua própria divisão.</p>
            </Reveal>
            <Reveal delay={100}>
              <AppScreenshot src={dashboardImage.url} alt="Painel real do ForgeFit com cronograma semanal e execuções por região" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-light section-pad">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-primary">Liberdade para escolher</p>
            <h2 className="display-2 mt-4">Treine com os equipamentos que você tem disponíveis</h2>
            <p className="lead mt-5 max-w-xl">Escolha os exercícios de acordo com sua academia, seus equipamentos e sua preferência.</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {EQUIPMENT.map((item) => (
                <span key={item} className="rounded-lg border border-border bg-white/[0.04] px-3 py-2 text-xs font-semibold text-foreground/85">{item}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="app-panel p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <div>
                <p className="font-display text-sm font-extrabold">RECOMENDAÇÃO FORGEFIT</p>
                <p className="mt-1 text-xs text-muted-foreground">Comece com uma sugestão e ajuste tudo.</p>
              </div>
            </div>
            <ol className="mt-6 space-y-3">
              {["Escolha uma região muscular", "Receba uma sugestão de treino", "Use como está ou faça alterações", "Salve no seu cronograma"].map((item, index) => (
                <li key={item} className="flex items-center gap-3 rounded-lg border border-border bg-background/70 p-3 text-sm">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary font-bold text-primary-foreground">{index + 1}</span>
                  {item}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-primary">+300 execuções explicativas</p>
            <h2 className="display-2 mt-4">Não sabe como fazer o exercício? Veja diretamente no app.</h2>
            <p className="lead mx-auto mt-5 max-w-2xl">Consulte a execução, músculos trabalhados, séries, repetições e descanso antes ou durante o treino.</p>
          </Reveal>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal><AppScreenshot src={executionsImage.url} alt="Tela real do ForgeFit com exercícios, séries, repetições e descanso" /></Reveal>
            <Reveal delay={100} className="space-y-3">
              {["GIF ou vídeo da execução", "Músculos trabalhados", "Séries e repetições", "Tempo de descanso", "Botão Ver como fazer"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-border bg-white/[0.03] p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/15"><Check className="h-4 w-4 text-primary" /></span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2">
            <Reveal className="app-panel p-7 sm:p-9">
              <Utensils className="h-7 w-7 text-primary" />
              <h2 className="display-3 mt-5">Treino e alimentação no mesmo app</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Acesse opções de receitas dentro do ForgeFit para complementar sua rotina.</p>
            </Reveal>
            <Reveal delay={80} className="app-panel p-7 sm:p-9">
              <Dumbbell className="h-7 w-7 text-primary" />
              <h2 className="display-3 mt-5">Desafio ForgeFit — 4 dias</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Uma experiência dentro do app para ajudar você a começar uma rotina e manter a consistência.</p>
              <div className="mt-6 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((day) => <span key={day} className={`rounded-lg border p-2 text-center text-xs font-bold ${day < 3 ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground"}`}>DIA {day}{day < 3 ? " ✓" : ""}</span>)}
              </div>
            </Reveal>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXTRA_FEATURES.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={(index % 3) * 60} className="app-panel p-6">
                <Icon className="h-5 w-5 text-primary" />
                <h3 className="mt-4 font-display text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
