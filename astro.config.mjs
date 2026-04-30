import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.nerometa.dev/",
  integrations: [
    mdx(),
    icon({
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // customize default plugin options
                inlineStyles: {
                  onlyMatchedOnce: false,
                },

                // or disable plugins
                removeDoctype: false,
              },
            },
          },
        ],
      },
    }),
    react(),
    markdoc(),
    keystatic(),
  ],
  markdown: {
    shikiConfig: {
      theme: "rose-pine-moon",
      wrap: true,
    },
  },
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
  },
  image: {
    responsiveImages: true,
  },
});

