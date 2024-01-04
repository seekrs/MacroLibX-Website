import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [starlight({
		title: 'MacroLibX',
		favicon: '/logo.png',
		logo:
		{
			src: './src/assets/logo.png'
		},
		social:
		{
			github: 'https://github.com/seekrs/MacroLibX'
		},
		editLink: {
			baseUrl: 'https://github.com/seekrs/MacroLibX-Website/edit/master/',
		},
		sidebar:
		[
			{
				label: 'Guides',
				items:
				[
					{
						label: 'Getting Started',
						link: '/guides/getting_started/'
					},
					{
						label: 'Initialization',
						link: '/guides/initialization/'
					}
				]
			},
			{
				label: 'References',
				autogenerate:
				{
					directory: 'reference'
				}
			}
		]
	}), icon()]
});
