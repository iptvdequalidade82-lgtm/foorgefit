import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "success";
  href?: string;
  onClick?: () => void;
};

export function CtaButton({ children, className, variant = "primary", href, onClick }: Props) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-center text-sm font-extrabold uppercase tracking-wide transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base";
  const variants = {
    primary: "bg-cta text-white shadow-glow hover:bg-[var(--cta-hover)]",
    success: "bg-cta text-white shadow-glow hover:bg-[var(--cta-hover)]",
  } as const;

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
