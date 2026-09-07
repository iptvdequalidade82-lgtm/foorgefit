import { useEffect, useState } from "react";

import { captureTrackingParams, withTrackingParams } from "@/lib/utm";

/** Parâmetros de rastreamento guardados nesta sessão (vazio no SSR/1º render). */
export function useTrackingParams(): Record<string, string> {
  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    setParams(captureTrackingParams());
  }, []);

  return params;
}

/** URL com os parâmetros de rastreamento anexados (após a hidratação). */
export function useTrackedUrl(url: string): string {
  const params = useTrackingParams();
  return Object.keys(params).length === 0 ? url : withTrackingParams(url);
}
