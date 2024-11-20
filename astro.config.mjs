// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://algomap.github.io',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathJax],
	},
	integrations: [
		starlight({
			title: 'AlgoMap',
			customCss: ['./src/mathjax.css'],
			social: {
				github: 'https://github.com/algomap/algomap.github.io',
			},
			sidebar: [
				{
					label: 'Strutture Dati',
					autogenerate: { directory: 'ds' },
				},
				{
					label: 'Algoritmi',
					autogenerate: { directory: 'algorithms' },
				},
			],
		}),
	],
	i18n: {
		defaultLocale: "it",
		locales: ["it", "en"]
	}
});
