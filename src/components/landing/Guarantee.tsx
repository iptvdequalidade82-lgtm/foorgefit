import { CalendarCheck, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export function Guarantee() {
  return (
    <section className="section-light border-y border-white/10">
      <div className="container-page section-pad">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center md:flex-row md:text-left">
          <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/10">
            <ShieldCheck className="h-10 w-10 text-primary" aria-hidden="true" />
          </div>

          <div className="flex-1">
            <p className="eyebrow text-primary">Sua compra sem risco</p>
            <h2 className="display-2 mt-3">Garantia de 7 dias sem complicação</h2>
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/70">
              Você tem 7 dias após a compra para conhecer o material. Se entender que ele não é
              para você, basta solicitar o reembolso dentro desse prazo. Sem burocracia e sem
              complicação.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/90">
              <CalendarCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              7 dias para decidir com tranquilidade
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}