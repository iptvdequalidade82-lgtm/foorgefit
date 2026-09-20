import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="section-deep py-12">
      <div className="container-page text-center">
        <BrandLogo className="mx-auto mb-6 max-w-48" />
        <p className="font-sans text-xs tracking-wide text-white/50">
          © 2026. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  );
}
