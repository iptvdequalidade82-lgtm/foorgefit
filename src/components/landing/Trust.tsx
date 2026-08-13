import { Heart, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Heart,
    title: "+ 2.347 Satisfeitos",
    text: "Pessoas que já transfomaram suas vidas",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento Seguro",
    text: "Seus dados protegidos com criptografia",
  },
];

export function Trust() {
  return (
    <section className="section-light section-pad">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head ">Sua Confiança é Nossa Prioridade</h2>
          <p className="lead mx-auto mt-5 max-w-xl">
            Garantimos uma experiência segura e satisfatória
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-7 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90} as="article" className="card-premium p-9 text-left">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="display-3 mt-6 ">{title}</h3>
              <p className="mt-2.5 font-sans text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
