import { ArrowRight } from "lucide-react";
import { CtaButton } from "./CtaButton";
import { CHECKOUT_FORGEFIT } from "@/lib/checkout";

export function MobileSticky() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-lg sm:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-extrabold">FORGEFIT</p>
          <p className="text-[11px] text-muted-foreground">R$ 19,90 • VITALÍCIO</p>
        </div>
        <CtaButton href={CHECKOUT_FORGEFIT} className="min-h-11 w-auto rounded-lg px-4 py-2 text-xs">
          VER APP <ArrowRight className="h-4 w-4" />
        </CtaButton>
      </div>
    </div>
  );
}
