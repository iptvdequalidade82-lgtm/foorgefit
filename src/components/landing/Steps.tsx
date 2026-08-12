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
    <section className="section-emerald py-14 sm:py-20">
      <div className="container-page text-center">
        <h2 className="text-2xl font-extrabold sm:text-3xl">Como Tenho Acesso ao Material?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          Após realizar o seu pedido e o pagamento você irá receber seu acesso diretamente no seu
          whatsapp e no seu email.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="rounded-2xl border border-primary/40 bg-surface p-6 shadow-card transition-colors duration-300 hover:border-primary"
            >
              <span className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-extrabold text-primary-foreground">
                {s.n}
              </span>
              <h3 className="mt-4 text-sm font-extrabold sm:text-base">{s.title}</h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
