import { Heart, ShieldCheck } from "lucide-react";

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
    <section className="section-light py-14 sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Sua Confiança é Nossa Prioridade</h2>
        <p className="mt-4 text-sm opacity-70">Garantimos uma experiência segura e satisfatória</p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-primary/30 bg-surface p-8 text-surface-foreground shadow-card transition-colors duration-300 hover:border-primary"
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15">
                <Icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-4 text-sm font-extrabold sm:text-base">{title}</h3>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
