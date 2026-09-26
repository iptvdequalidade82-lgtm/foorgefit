/* Helpers de tracking (Meta Pixel). Seguros no SSR. */

import { CHECKOUT_FORGEFIT, CHECKOUT_FORGEFIT_PROMOCIONAL, CHECKOUT_PACOTE_DIGITAL } from "./checkout";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const PIXEL_ID = "1060698809666736";

export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

const APP_PRODUCT = {
  content_name: "ForgeFit App",
  content_type: "product",
  content_ids: ["forgefit-app"],
  currency: "BRL",
  value: 19.9,
};

const DIGITAL_PRODUCT = {
  content_name: "Pacote Completo Digital",
  content_type: "product",
  content_ids: ["pacote-completo-digital"],
  currency: "BRL",
  value: 9.9,
};

const PROMO_PRODUCT = { ...APP_PRODUCT, value: 15.9 };

function productForCheckout(checkoutUrl: string) {
  if (checkoutUrl === CHECKOUT_PACOTE_DIGITAL) return DIGITAL_PRODUCT;
  if (checkoutUrl === CHECKOUT_FORGEFIT_PROMOCIONAL) return PROMO_PRODUCT;
  if (checkoutUrl === CHECKOUT_FORGEFIT) return APP_PRODUCT;
  return null;
}

export function trackViewContent(offer: "app" | "promo" = "app") {
  track("ViewContent", offer === "promo" ? PROMO_PRODUCT : APP_PRODUCT);
}

export function trackPageView() {
  track("PageView");
}

export function trackInitiateCheckout(checkoutUrl: string) {
  const product = productForCheckout(checkoutUrl);
  if (!product) return;
  track("AddToCart", product);
  track("InitiateCheckout", { ...product, num_items: 1 });
}
