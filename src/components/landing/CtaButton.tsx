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
    "group inline-flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-center font-sans text-[0.95rem] font-bold leading-tight tracking-[0.01em] transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base";
  const variants = {
    primary:
      "bg-cta text-white shadow-[0_14px_30px_-16px_oklch(0.443_0.093_163/0.85)] hover:bg-[var(--cta-hover)] hover:shadow-[0_20px_40px_-18px_oklch(0.443_0.093_163/0.9)]",
    success:
      "bg-cta text-white shadow-[0_14px_30px_-16px_oklch(0.443_0.093_163/0.85)] hover:bg-[var(--cta-hover)] hover:shadow-[0_20px_40px_-18px_oklch(0.443_0.093_163/0.9)]",
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
