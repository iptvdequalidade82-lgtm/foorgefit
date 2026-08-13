import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export function StickyCta({ onCta }: { onCta: () => void }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-background/85 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        type="button"
        onClick={onCta}
        className="tap flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-cta px-5 py-3.5 font-display text-[0.95rem] font-extrabold uppercase tracking-[0.02em] text-white shadow-glow"
      >
        <Flame className="h-4.5 w-4.5 shrink-0" />
        Quero acessar +100 treinos
      </button>
    </div>
  );
}
