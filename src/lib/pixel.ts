/* Helpers de tracking (Meta Pixel). Seguros no SSR. */

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

export const PRODUCT = {
  content_name: "+200 Planilhas de Treinos",
  content_type: "product",
  content_ids: ["planilhas-200"],
  currency: "BRL",
  value: 9.9,
};

export function trackViewContent() {
  track("ViewContent", PRODUCT);
}

export function trackAddToCart() {
  track("AddToCart", PRODUCT);
}

export function trackInitiateCheckout() {
  track("AddToCart", PRODUCT);
  track("InitiateCheckout", { ...PRODUCT, num_items: 1 });
}
