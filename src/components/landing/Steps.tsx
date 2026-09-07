import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "1",
    title: "Faça a Compra",
    text: "Escolha o seu pacote e finalize o pagamento de forma segura. Você receberá tudo por e-mail.",
  },
  {
    n: "2",
    title: "Peça Acesso ao Google Drive",
    text: "Dentro do e-mail terá o link do Google Drive. É só clicar e solicitar acesso ao material.",
  },
  {
    n: "3",
    title: "Acesso Liberado na Hora",
    text: "Assim que aceitarmos o seu pedido — ou automaticamente — você já terá acesso a todo o conteúdo para sempre.",
  },
];

export function Steps() {
  return (
    <section className="section-emerald section-pad">
      <div className="container-page text-center">
        <Reveal>
          <h2 className="display-2 stack-head">Como Tenho Acesso ao Material?</h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            É simples e rápido: você compra, recebe o e-mail e acessa tudo pelo Google Drive.
            Não precisa baixar nada no seu celular, basta ter o app do Drive instalado.
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
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/15 ring-1 ring-primary/35 font-display text-base font-extrabold text-primary">
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
