import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "O que é o ForgeFit?",
    a: <p>O ForgeFit é um aplicativo para montar, organizar e consultar sua rotina de treinos.</p>,
  },
  {
    q: "O ForgeFit tem mensalidade?",
    a: <p>Não. O plano de R$ 19,90 possui pagamento único e acesso vitalício.</p>,
  },
  {
    q: "Qual a diferença entre o pacote de R$ 9,90 e o ForgeFit?",
    a: (
      <p>
        O pacote de R$ 9,90 reúne os conteúdos digitais da oferta. O ForgeFit é uma experiência
        interativa em aplicativo, permitindo montar e organizar os próprios treinos, consultar
        execuções, receitas e outras funções.
      </p>
    ),
  },
  {
    q: "Consigo escolher meus exercícios?",
    a: <p>Sim. Você escolhe os exercícios e pode alterar a ordem, séries, repetições e descanso.</p>,
  },
  {
    q: "Consigo combinar diferentes músculos?",
    a: <p>Sim. Você pode personalizar sua rotina de acordo com sua preferência.</p>,
  },
  {
    q: "Consigo escolher os equipamentos?",
    a: <p>Sim. Existem exercícios associados a diferentes tipos de equipamentos.</p>,
  },
  {
    q: "Os exercícios possuem explicação?",
    a: <p>Sim. Existem mais de 300 execuções explicativas disponíveis no aplicativo.</p>,
  },
  {
    q: "Tem receitas?",
    a: <p>Sim. O ForgeFit possui opções de receitas para complementar sua rotina.</p>,
  },
  {
    q: "Tem desafio?",
    a: <p>Sim. O ForgeFit possui um desafio de 4 dias.</p>,
  },
  {
    q: "Como recebo meu acesso?",
    a: <p>Após a confirmação do pagamento, as instruções são enviadas para o e-mail cadastrado. Confira se digitou o endereço corretamente.</p>,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-pad bg-background">
      <div className="container-page text-center">
        <h2 className="display-2 stack-head">Perguntas frequentes</h2>
        <p className="lead mx-auto mt-5 max-w-xl">Tudo o que você precisa saber antes de escolher.</p>

        <div className="mx-auto mt-14 max-w-2xl space-y-3 text-left">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-lg border border-border bg-white/[0.03]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-display text-[0.95rem] font-bold transition-colors duration-300 hover:text-primary sm:px-6"
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
