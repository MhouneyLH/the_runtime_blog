// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: "/",
	site: "https://blog.lucas-huenniger.dev/",
	integrations: [
		starlight({
			title: 'The Runtime',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MhouneyLH/the_runtime_blog' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
