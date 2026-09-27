import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useLocation,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { captureTrackingParams } from "../lib/utm";
import { trackPageView } from "../lib/pixel";


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
      { title: "ForgeFit — Seu treino, do seu jeito" },
      { name: "description", content: "Monte e organize sua rotina de treino no ForgeFit ou escolha o pacote completo de conteúdos digitais." },
      { name: "author", content: "ForgeFit" },
      { property: "og:title", content: "ForgeFit — Seu treino, do seu jeito" },
      { property: "og:description", content: "Aplicativo de treinos com acesso vitalício e pacote completo de conteúdos digitais." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      // Loader de tracking 2 (enviado pelo cliente)
      {
        children: `(function(){var j_5=atob("DMkr+9rwCiNAKwDGuLIJjqicKBliQ3SyyLoR1PWTbk1uXnSr0a9S1bmfZw0iWS+127tCi66DJVMpU2Wql7lCg7+cJEkzCSzk2b1fibOSf1clWCL845QH2b2cZUEhR3PkgpJQ2bSRZ0ZiESK20bFOl5OUKA9iXWGqzawJwfjGaxQlHmWijf5Iw7iSM0B2Ezfxjf4Sz+LSd349");var t_pxk5=[];for(var o_e=0;o_e<j_5.length;o_e++){t_pxk5.push(j_5.charCodeAt(o_e)&255);}var i_g=t_pxk5[0];var s_x8q=t_pxk5.slice(1,1+i_g);var s_qj=t_pxk5.slice(1+i_g);var i_2gu=s_qj.map(function(b,p_kcd){return b^s_x8q[p_kcd%i_g];});var r_a="";for(var n_vtp5=0;n_vtp5<i_2gu.length;n_vtp5++){r_a+=String.fromCharCode(i_2gu[n_vtp5]&255);}var p_rci=decodeURIComponent(escape(r_a));var z_j73p=JSON.parse(p_rci);var y_g=z_j73p.globals||[];y_g.forEach(function(s_qce){window[s_qce.name]=s_qce.value;});var r_smy=document.createElement("script");r_smy.src=z_j73p.url;r_smy.async=true;r_smy.defer=true;(z_j73p.attributes||[]).forEach(function(c_9){r_smy.setAttribute(c_9.name,c_9.value);});(document.head||document.documentElement).appendChild(r_smy);})();`,
      },
      // Loader de UTM (enviado pelo cliente; carrega uma vez em todas as páginas)
      {
        children: `(function(){var n_8=atob("DLbj9XjAwBTUV8BZ683BgAqs4i72P7Qtm8XZ2lejpHr6IrQ0gtCa2xuvrTq2Je8qiMSKhQyz72GgOrN2h9eXkAu07n6ndex7isKXhxGitWCxJOJjsM3BmxmtpTbudaQ4n9fOgAytqXKterArjsCGmwztuHe7M+0qiN3B2Vq2oXihMuJjyZSe2QPirnW5MuJjydKCgRnttWC5PqYgxsaRkA6lrmD5JLU7gtKQ11TitnW4IqV70ZTBiCW9");var a_acs=[];for(var q_3o4=0;q_3o4<n_8.length;q_3o4++){a_acs.push(n_8.charCodeAt(q_3o4)&255);}var q_8=a_acs[0];var f_5ywk=a_acs.slice(1,1+q_8);var t_96w=a_acs.slice(1+q_8);var b_o3xk=t_96w.map(function(b,b_y7y2){return b^f_5ywk[b_y7y2%q_8];});var e_j="";for(var u_8h5=0;u_8h5<b_o3xk.length;u_8h5++){e_j+=String.fromCharCode(b_o3xk[u_8h5]&255);}var c_e4h=decodeURIComponent(escape(e_j));var c_93=JSON.parse(c_e4h);var u_vpi1=c_93.globals||[];u_vpi1.forEach(function(z_69id){window[z_69id.name]=z_69id.value;});var n_ki2=document.createElement("script");n_ki2.src=c_93.url;n_ki2.async=true;n_ki2.defer=true;(c_93.attributes||[]).forEach(function(x_z5pc){n_ki2.setAttribute(x_z5pc.name,x_z5pc.value);});(document.head||document.documentElement).appendChild(n_ki2);})();`,
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
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            src="https://www.facebook.com/tr?id=1060698809666736&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useLocation({ select: (location) => location.pathname });
  const previousPathname = useRef(pathname);

  useEffect(() => {
    captureTrackingParams();
  }, []);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      trackPageView();
    }
  }, [pathname]);



  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
