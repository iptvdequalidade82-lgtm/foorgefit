import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, Check, Infinity, Lock, Mail, ShieldCheck, Smartphone } from "lucide-react";
import dashboardImage from "@/assets/forgefit-dashboard.png.asset.json";
import recommendationImage from "@/assets/forgefit-recomendacao.png.asset.json";
import executionsImage from "@/assets/forgefit-execucoes.png.asset.json";
import { BrandLogo } from "@/components/landing/BrandLogo";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/landing/Reveal";
import { trackInitiateCheckout, trackViewContent } from "@/lib/pixel";
import { CHECKOUT_FORGEFIT_PROMOCIONAL, CHECKOUT_PACOTE_DIGITAL } from "@/lib/checkout";
import { useTrackedUrl } from "@/hooks/use-tracking-params";

const TITLE = "Oferta exclusiva ForgeFit";
const DESCRIPTION = "Transforme seu pacote em um aplicativo completo por apenas R$ 6 a mais.";

export const Route = createFileRoute("/oferta-especial")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: OfertaEspecial,
});

const APP_ITEMS = [
  "Aplicativo completo de treinos",
  "Monte sua semana do seu jeito",
  "Escolha músculos, exercícios e equipamentos",
  "+300 execuções explicativas",
  "Receitas dentro do aplicativo",
  "Desafio ForgeFit de 4 dias",
  "Favoritos, downloads e cronograma",
  "Acesso vitalício e sem mensalidade",
];

function OfertaEspecial() {
  const pacoteHref = useTrackedUrl(CHECKOUT_PACOTE_DIGITAL);

  useEffect(() => {
    trackViewContent();
  }, []);

  return (
    <main className="min-h-screen bg-background pb-8">
      <div className="border-b border-primary/25 bg-primary/10 px-4 py-3 text-center text-xs font-extrabold uppercase text-primary">
        Oferta exibida somente nesta etapa
      </div>
      <section className="container-page py-10 sm:py-16">
        <a href="/" className="mx-auto mb-8 block w-40" aria-label="Voltar ao início do ForgeFit">
          <BrandLogo />
        </a>
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-primary">Antes de continuar...</p>
          <h1 className="display-2 mt-4">Por apenas R$ 6 a mais, você pode levar o ForgeFit App.</h1>
          <p className="lead mx-auto mt-5 max-w-2xl">Transforme seu pacote em um app completo para montar, organizar e acompanhar seus treinos.</p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="offer-card p-6">
            <p className="eyebrow text-muted-foreground">Sua escolha atual</p>
            <h2 className="display-3 mt-3">Pacote Digital</h2>
            <p className="mt-5 font-display text-4xl font-extrabold">R$ 9,90</p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["Materiais prontos", "Planilhas e GIFs", "Receitas e bônus", "Acesso pelo Google Drive"].map((item) => (
                <p key={item} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {item}</p>
              ))}
            </div>
            <p className="mt-6 rounded-lg border border-border bg-white/[0.03] p-3 text-xs text-muted-foreground">Não inclui o aplicativo.</p>
          </Reveal>

          <Reveal delay={80} className="offer-card offer-card-featured p-5 sm:p-7">
            <div className="mb-6 grid grid-cols-3 gap-2">
              {[dashboardImage, recommendationImage, executionsImage].map((image, index) => (
                <img key={image.url} src={image.url} alt={["Painel do ForgeFit", "Recomendação do ForgeFit", "Execuções no ForgeFit"][index]} className="aspect-[4/3] w-full rounded-md border border-primary/20 object-cover object-top" />
              ))}
            </div>
            <div className="flex items-start justify-between gap-4">
              <div><p className="eyebrow text-primary">Upgrade exclusivo</p><h2 className="display-3 mt-3">ForgeFit App</h2></div>
              <Smartphone className="h-6 w-6 shrink-0 text-primary" />
            </div>
            <div className="mt-5 flex flex-wrap items-end gap-3">
              <span className="text-sm text-muted-foreground line-through">R$ 19,90</span>
              <strong className="font-display text-5xl font-extrabold">R$ 15,90</strong>
            </div>
            <p className="mt-2 flex items-center gap-2 text-xs font-bold text-primary"><Infinity className="h-4 w-4" /> Pagamento único • acesso vitalício • sem mensalidade</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {APP_ITEMS.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{item}</li>)}
            </ul>
            <CtaButton href={CHECKOUT_FORGEFIT_PROMOCIONAL} className="mt-7">SIM, QUERO O FORGEFIT POR R$ 15,90</CtaButton>
          </Reveal>
        </div>

        <div className="mx-auto mt-5 max-w-3xl">
          <a href={pacoteHref} target="_blank" rel="noopener noreferrer" onClick={() => trackInitiateCheckout()} className="tap inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-3 text-center font-display text-xs font-extrabold uppercase text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground sm:text-sm">
            NÃO, QUERO CONTINUAR COM O PACOTE DE R$ 9,90 <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-muted-foreground">
            <span className="flex items-center gap-1.5"><Lock className="h-3.5 w-3.5 text-primary" /> Compra segura</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Pagamento protegido</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5 text-primary" /> Acesso por e-mail</span>
          </div>
        </div>
      </section>
    </main>
  );
}
