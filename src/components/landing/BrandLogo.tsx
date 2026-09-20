import logoImage from "@/assets/forgefit-logo-transparent.png.asset.json";

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImage.url}
      alt="ForgeFit — Disciplina gera resultados"
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}