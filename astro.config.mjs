import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://www.nerometa.dev/",
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
});
