import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Faça o Pedido do Material",
    text: "No final da pagina acesse a opção comprar para abrir o pedido e efetuar a compra",
  },
  {
    n: "2",
    title: "Receba no seu Whatsapp e Email",
    text: "Enviaremos para o seu whatsapp e email as instruções de como acessar seu novo material",
  },
  {
    n: "3",
    title: "Pagamento Único e Acesso Vitalício",
    text: "Sem taxas ou pegadinhas, pagamento único e acesso liberado para sempre",
  },
];

export function Steps() {
  return (
    <section className="section-emerald section-pad">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head">Como Tenho Acesso ao Material?</h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            Após realizar o seu pedido e o pagamento você irá receber seu acesso diretamente no seu
            whatsapp e no seu email.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              as="article"
              className="rounded-2xl border border-white/12 bg-white/[0.06] p-8 text-left backdrop-blur-sm transition-colors duration-300 hover:border-white/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 font-display text-base font-extrabold text-white">
                {s.n}
              </span>
              <h3 className="display-3 mt-6">{s.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
