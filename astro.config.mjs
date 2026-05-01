import icon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://blog.nerometa.dev/",
    integrations: [
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
        markdoc({ allowHTML: true }),
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
    adapter: node({
        mode: "standalone",
    }),
});
