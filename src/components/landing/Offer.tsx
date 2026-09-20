import { Check, FileText, Infinity, Lock, Mail, ShieldCheck, Smartphone } from "lucide-react";
import completoImage from "@/assets/oferta-completo.jpg.asset.json";
import dashboardImage from "@/assets/forgefit-dashboard.png.asset.json";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";
import { CHECKOUT_FORGEFIT } from "@/lib/checkout";

const DIGITAL_ITEMS = [
  "+200 planilhas de treino",
  "Guia Prático: Dominando a Fome",
  "Fichas de treino",
  "Emagrecimento Sem Dietas",
  "Cardápio para comer fora sem sair da dieta",
  "200 Receitas de Café da Manhã Nutritivas",
  "80 Receitas de Refeições Saudáveis para Congelar",
  "+200 Exercícios de Musculação Ilustrados em GIF",
  "500 Receitas Low Carb",
  "300 Receitas Anabólicas",
  "100 Receitas Saudáveis Fit",
];

const APP_ITEMS = [
  "Aplicativo completo",
  "Monte sua própria semana",
  "Escolha músculos, exercícios e equipamentos",
  "+300 execuções explicativas",
  "Receitas dentro do app",
  "Desafio ForgeFit de 4 dias",
  "Favoritos e downloads",
  "Acesso vitalício",
];

function OfferItem({ children }: { children: React.ReactNode }) {
  return <li className="flex items-start gap-2.5 text-sm leading-snug text-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{children}</span></li>;
}

export function Offer() {
  return (
    <section id="oferta" className="section-pad bg-background scroll-mt-6">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-primary">Escolha sua experiência</p>
          <h2 className="display-2 mt-4">Comece hoje com pagamento único</h2>
          <p className="lead mx-auto mt-5 max-w-2xl">Conteúdo digital para consultar ou um aplicativo completo para montar e organizar sua rotina.</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 lg:grid-cols-2">
          <Reveal className="offer-card p-5 sm:p-8">
            <div className="overflow-hidden rounded-lg border border-border bg-white">
              <img src={completoImage.url} alt="Conteúdos do Pacote Completo Digital" loading="lazy" className="aspect-[16/9] w-full object-cover" />
            </div>
            <div className="mt-7 flex items-start justify-between gap-4">
              <div><p className="eyebrow text-muted-foreground">Conteúdo digital completo</p><h3 className="display-3 mt-2">Pacote Completo</h3></div>
              <FileText className="h-6 w-6 shrink-0 text-primary" />
            </div>
            <p className="mt-6 font-display text-5xl font-extrabold">R$ 9,90</p>
            <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">Pagamento único</p>
            <div className="mt-5 rounded-lg border border-border bg-white/[0.03] p-4 text-sm text-foreground/75">
              Materiais prontos para consultar. <strong className="text-foreground">Não inclui acesso ao ForgeFit App.</strong>
            </div>
            <ul className="mt-6 space-y-3">{DIGITAL_ITEMS.map((item) => <OfferItem key={item}>{item}</OfferItem>)}</ul>
            <CtaButton to="/oferta-especial" className="mt-8">QUERO O PACOTE DE R$ 9,90</CtaButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><Mail className="h-4 w-4 text-primary" /> Acesso aos materiais enviado por e-mail.</p>
          </Reveal>

          <Reveal delay={100} className="offer-card offer-card-featured relative p-5 sm:p-8">
            <span className="absolute right-4 top-4 rounded-md bg-primary px-2.5 py-1 text-[10px] font-extrabold uppercase text-primary-foreground">Mais completo</span>
            <div className="overflow-hidden rounded-lg border border-primary/25 bg-background">
              <img src={dashboardImage.url} alt="Aplicativo ForgeFit" loading="lazy" className="aspect-[16/9] w-full object-cover object-top" />
            </div>
            <div className="mt-7 flex items-start justify-between gap-4">
              <div><p className="eyebrow text-primary">Experiência ForgeFit</p><h3 className="display-3 mt-2">ForgeFit App</h3></div>
              <Smartphone className="mr-28 h-6 w-6 shrink-0 text-primary sm:mr-32" />
            </div>
            <p className="mt-6 font-display text-5xl font-extrabold">R$ 19,90</p>
            <p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">Pagamento único • sem mensalidade</p>
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4 text-sm font-bold"><Infinity className="h-5 w-5 text-primary" /> Acesso vitalício ao aplicativo</div>
            <ul className="mt-6 space-y-3">{APP_ITEMS.map((item) => <OfferItem key={item}>{item}</OfferItem>)}</ul>
            <CtaButton href={CHECKOUT_FORGEFIT} className="mt-8">QUERO ACESSO AO APP</CtaButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground"><Mail className="h-4 w-4 text-primary" /> Instruções enviadas por e-mail após a confirmação.</p>
          </Reveal>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold text-muted-foreground">
          <span className="flex items-center gap-2"><Lock className="h-4 w-4 text-primary" /> Compra segura</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Pagamento protegido</span>
        </div>
      </div>
    </section>
  );
}
