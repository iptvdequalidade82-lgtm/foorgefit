import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "O que vou receber?",
    a: (
      <div className="space-y-3">
        <p>
          Ao adquirir as planilhas de treino, você terá acesso a um conteúdo completo para
          transformar seus resultados, incluindo:
        </p>
        <p>
          +200 Planilhas de Treinos personalizadas para hipertrofia, emagrecimento, definição
          muscular, resistência, mobilidade e flexibilidade.
        </p>
        <p>
          Programas variados para iniciantes e avançados (ABC, ABCD, ABCDE, full body, HIIT, entre
          outros).
        </p>
        <p>Prescrição de Treinos para 12 meses, garantindo evolução constante.</p>
        <p>+3 Bônus Exclusivo</p>
      </div>
    ),
  },
  {
    q: "Como receberei o conteúdo?",
    a: (
      <p>
        Após a confirmação do pagamento, você receberá o seu acesso diretamente no seu whatsapp e no
        seu email, disponibilidade imediata. Poderá acessá-los no seu celular, tablet ou computador
        a qualquer momento!
      </p>
    ),
  },
  {
    q: "Por quanto tempo poderei acessar o conteúdo?",
    a: (
      <p>
        O acesso é vitalício! Uma vez que você compra, pode acessar sempre que precisar, sem limite
        de tempo.
      </p>
    ),
  },
  {
    q: "Posso acessar pelo celular?",
    a: <p>Sim. O conteúdo foi pensado para ser acessado facilmente pelo celular.</p>,
  },
  {
    q: "Os treinos são separados por grupos musculares?",
    a: (
      <p>
        Sim. Os conteúdos são organizados para facilitar a localização dos diferentes tipos de
        treino.
      </p>
    ),
  },
  {
    q: "Posso começar a usar os treinos imediatamente?",
    a: <p>Sim. Após receber o acesso, você já poderá consultar os conteúdos disponíveis.</p>,
  },
  {
    q: "É pagamento único?",
    a: (
      <p>
        Sim. O acesso é adquirido através de um pagamento único de{" "}
        <strong className="font-semibold text-foreground">R$ 6,90</strong>.
      </p>
    ),
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-background">
      <div className="container-page text-center">
        <h2 className="display-2 stack-head ">Perguntas Frequentes</h2>
        <p className="lead mx-auto mt-5 max-w-xl">Tire suas dúvidas sobre o produto</p>

        <div className="mx-auto mt-14 max-w-2xl space-y-3 text-left">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-xl border border-border bg-white/[0.03] shadow-[0_1px_2px_oklch(0.325_0.041_208/0.04)]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-[0.95rem] font-bold tracking-[-0.01em] transition-colors duration-300 hover:text-primary"
                >
                  <span className="min-w-0">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-border px-6 pb-6 pt-5 font-sans text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
