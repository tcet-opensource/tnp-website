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
  // site: 'https://tcet-opensource.github.io',
  // base: '/tnp-website', // this is breaking whole navbar
  base: '/',
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
  site: "https://tnp.tcetmumbai.in" //dont change this. SEO stuff. not even for staging
});
