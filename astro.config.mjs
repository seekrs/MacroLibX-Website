import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'MacroLibX',
    favicon: '/logo.png',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/seekrs/MacroLibX'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Getting Started',
        link: '/guides/getting_started/'
      }]
    }, {
      label: 'References',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), icon()]
});
