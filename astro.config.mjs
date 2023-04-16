import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import image from "@astrojs/image";
// import preact from "@astrojs/preact";
// import { astroImageTools } from "astro-imagetools";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://tnp.tcetmumbai.in',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    react(),
    // astroImageTools,
  ],
  vite: {
    ssr: {
      noExternal: [/^swiper\/*/,/^react-fast-marquee\/*/,/^usehooks-ts\/*/,/^react-countup\/*/ ]
    }
  },
  site: "https://tnp.tcetmumbai.in"
});
