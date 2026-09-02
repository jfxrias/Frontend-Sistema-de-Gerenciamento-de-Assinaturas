import { useEffect } from "react";

declare global {
  interface Window {
    VLibras?: {
      Widget: new (url: string) => void;
    };
  }
}

export function VLibras() {
  useEffect(() => {
    const scriptId = "vlibras-script";
    const widgetId = "vlibras-widget-root";

    const initVLibras = () => {
      if (!window.VLibras) return;

      try {
        if (!document.getElementById(widgetId)) {
          const widgetRoot = document.createElement("div");
          widgetRoot.id = widgetId;
          widgetRoot.setAttribute("vw", "true");
          widgetRoot.className = "enabled";
          widgetRoot.innerHTML = `
            <div vw-access-button></div>
            <div vw-plugin-wrapper>
              <div class="plugin-wrapper"></div>
            </div>
          `;
          document.body.appendChild(widgetRoot);
        }

        new window.VLibras.Widget("https://vlibras.gov.br/app");
      } catch (error) {
        console.warn("VLibras não pôde ser inicializado:", error);
      }
    };

    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = initVLibras;
      document.body.appendChild(script);
    } else {
      initVLibras();
    }

    return () => {
      if (script && script.onload === initVLibras) {
        script.onload = null;
      }
    };
  }, []);

  return null;
}