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
    "group inline-flex w-full items-center justify-center gap-2 tap min-h-14 rounded-2xl px-7 py-4 text-center font-display text-[0.95rem] font-extrabold uppercase leading-tight tracking-[0.01em] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base";
  const variants = {
    primary:
      "bg-gradient-cta text-white shadow-glow hover:shadow-[0_26px_50px_-18px_oklch(0.686_0.221_42/0.65)]",
    success:
      "bg-gradient-cta text-white shadow-glow hover:shadow-[0_26px_50px_-18px_oklch(0.686_0.221_42/0.65)]",
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
