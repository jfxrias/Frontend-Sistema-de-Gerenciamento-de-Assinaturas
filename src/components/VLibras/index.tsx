import React, { useEffect } from "react";

declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void;
    };
  }
}

export function VLibras() {
  useEffect(() => {
    if (!document.getElementById("vlibras-script")) {
      const script = document.createElement("script");
      script.id = "vlibras-script";
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      
      script.onload = () => {
        if (window.VLibras) {
          try {
            new window.VLibras.Widget("https://vlibras.gov.br/app");
          } catch (e) {
          }
        }
      };

      document.body.appendChild(script);
    } else {
      if (window.VLibras) {
        try {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        } catch (e) {
        }
      }
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div vw class="enabled">
            <div vw-access-button></div>
            <div vw-plugin-wrapper>
              <div class="plugin-wrapper"></div>
            </div>
          </div>
        `,
      }}
    />
  );
}