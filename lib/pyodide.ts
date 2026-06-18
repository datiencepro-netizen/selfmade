/**
 * Lazy, cached loader for the in-browser Python engine (Pyodide / WASM).
 * Loaded once from the jsDelivr CDN and reused across runs.
 */

export interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<unknown>;
  globals: {
    set: (name: string, value: unknown) => void;
    get: (name: string) => unknown;
  };
}

declare global {
  interface Window {
    loadPyodide?: (config: { indexURL: string }) => Promise<PyodideInterface>;
  }
}

const PYODIDE_VERSION = "0.28.3";
const CDN = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/`;

let enginePromise: Promise<PyodideInterface> | null = null;

export function loadEngine(): Promise<PyodideInterface> {
  if (enginePromise) return enginePromise;

  enginePromise = (async () => {
    if (typeof window === "undefined") {
      throw new Error("El motor de Python solo se ejecuta en el navegador.");
    }
    if (!window.loadPyodide) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `${CDN}pyodide.js`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("No se pudo cargar Pyodide desde el CDN. Revisa tu conexión."));
        document.head.appendChild(script);
      });
    }
    if (!window.loadPyodide) {
      throw new Error("Pyodide no se inicializó correctamente.");
    }
    return window.loadPyodide({ indexURL: CDN });
  })();

  return enginePromise;
}
