import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'مستندنویسی در Astro',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],		
			locales: {
				root: {
				  label: 'Farsi',
				  lang: 'fa',
				  dir: 'rtl',
				},
			  },		
			social: {
				github: 'https://github.com/arastoonet',
			},
			sidebar: [
				{
					label: 'آشنایی با پروژه',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'اهداف پروژه', link: '/main/project/' },
					],
				},
				{
					label: 'مقدمات',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'معرفی پروژه', link: '/main/example/' },
					],
				},
				{
					label: 'موضوع اول',
					autogenerate: { directory: 'topic1' },
				},
				{
					label: 'موضوع دوم',
					autogenerate: { directory: 'topic2' },
				},
				{
					label: 'منابع',
					autogenerate: { directory: 'reference' },
				},

			],
		}),
	],
});
