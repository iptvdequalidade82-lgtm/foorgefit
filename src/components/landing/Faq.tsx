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
          +100 Planilhas de Treinos personalizadas para hipertrofia, emagrecimento, definição
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
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-background pb-16 pt-4 sm:pb-24">
      <div className="container-page text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Perguntas Frequentes</h2>
        <p className="mt-4 text-sm opacity-70">Tire suas dúvidas sobre o produto</p>

        <div className="mx-auto mt-10 max-w-2xl space-y-3 text-left">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="overflow-hidden rounded-xl">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-gradient-primary px-5 py-4 text-left text-sm font-bold text-primary-foreground transition-opacity duration-200 hover:opacity-90"
                >
                  <span className="min-w-0">{item.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-300",
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
                    <div className="bg-surface px-5 py-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
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
