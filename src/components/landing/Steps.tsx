import { MailCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  ["1", "Finalize sua compra", "Escolha o Pacote Completo Digital ou o ForgeFit App e conclua o pagamento."],
  ["2", "Aguarde a confirmação", "Assim que o pagamento for confirmado, preparamos as instruções da opção escolhida."],
  ["3", "Confira seu e-mail", "O acesso é enviado para o mesmo e-mail informado no momento da compra."],
  ["4", "Comece a utilizar", "No app, siga as instruções de entrada. No pacote digital, use o link recebido para solicitar acesso ao Google Drive."],
];

export function Steps() {
  return (
    <section className="section-light section-pad">
      <div className="container-page text-center">
        <Reveal>
          <MailCheck className="mx-auto h-8 w-8 text-primary" />
          <h2 className="display-2 mt-5">Como recebo meu acesso?</h2>
          <p className="lead mx-auto mt-5 max-w-2xl">Todo o processo começa pelo e-mail utilizado na compra.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {STEPS.map(([number, title, text], index) => (
            <Reveal key={number} delay={index * 60} className="app-panel p-6 text-left">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary font-display font-extrabold text-primary-foreground">{number}</span>
              <h3 className="mt-5 font-display text-base font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl rounded-lg border border-primary/25 bg-primary/10 px-5 py-4 text-sm font-bold">IMPORTANTE: confira se o e-mail informado está correto.</p>
      </div>
    </section>
  );
}
