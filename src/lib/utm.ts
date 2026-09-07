/* Captura e propagação de parâmetros de rastreamento (UTMs, fbclid, etc.).
   Seguro no SSR: só toca em window/sessionStorage no browser. */

const STORAGE_KEY = "ff_tracking_params";

const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
  "ttclid",
  "xcod",
  "sck",
  "src",
];

type Params = Record<string, string>;

function readStored(): Params {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Params) : {};
  } catch {
    return {};
  }
}

function writeStored(params: Params) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
  } catch {
    /* ignore */
  }
}

/** Lê a URL atual, mescla com o que já foi guardado e persiste. */
export function captureTrackingParams(): Params {
  if (typeof window === "undefined") return {};

  const stored = readStored();
  const current = new URLSearchParams(window.location.search);
  const merged: Params = { ...stored };

  for (const key of TRACKED_KEYS) {
    const value = current.get(key);
    if (value) merged[key] = value;
  }

  if (Object.keys(merged).length > 0) writeStored(merged);
  return merged;
}

export function getTrackingParams(): Params {
  if (typeof window === "undefined") return {};
  return captureTrackingParams();
}

/** Acrescenta os parâmetros guardados a uma URL, sem sobrescrever os existentes
 *  e mantendo a query antes de qualquer fragmento "#". */
export function withTrackingParams(url: string): string {
  const params = getTrackingParams();
  if (Object.keys(params).length === 0) return url;

  const hashIndex = url.indexOf("#");
  const hash = hashIndex >= 0 ? url.slice(hashIndex) : "";
  const base = hashIndex >= 0 ? url.slice(0, hashIndex) : url;

  const queryIndex = base.indexOf("?");
  const path = queryIndex >= 0 ? base.slice(0, queryIndex) : base;
  const search = new URLSearchParams(queryIndex >= 0 ? base.slice(queryIndex + 1) : "");

  for (const [key, value] of Object.entries(params)) {
    if (!search.has(key)) search.append(key, value);
  }

  const queryString = search.toString();
  return `${path}${queryString ? `?${queryString}` : ""}${hash}`;
}
