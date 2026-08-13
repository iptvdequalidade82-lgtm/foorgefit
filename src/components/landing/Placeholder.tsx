import { cn } from "@/lib/utils";

export function Placeholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("placeholder-box overflow-hidden rounded-xl", className)} aria-label={label}>
      <span className="px-2">[{label}]</span>
    </div>
  );
}
