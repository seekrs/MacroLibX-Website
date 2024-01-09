import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://macrolibx.kbz8.me/",
  integrations: [starlight({
    title: 'MacroLibX',
    favicon: '/logo.png',
    logo: {
      src: './src/assets/logo.png'
    },
    social: {
      github: 'https://github.com/seekrs/MacroLibX',
      telegram: 'https://t.me/kbz_8',
      email: "mailto:contact@kbz8.me"
    },
    customCss: process.env.NO_GRADIENTS ? [] : ['./src/assets/landing.css'],
    editLink: {
      baseUrl: 'https://github.com/seekrs/MacroLibX-Website/edit/master/'
    },
    sidebar: [{
      label: 'Guides',
      items: [{
        label: 'Getting Started',
        link: '/guides/getting_started/'
      }, {
        label: 'Initialization',
        link: '/guides/initialization/'
      }, {
        label: 'Drawing',
        link: '/guides/drawing/'
      }, {
        label: 'Events',
        link: '/guides/events/'
      }, {
        label: 'Loop hook',
        link: '/guides/update/'
      }, {
        label: 'Images',
        link: '/guides/images/'
      }, {
        label: 'Colors',
        link: '/guides/colors/'
      }, {
        label: 'Texts',
        link: '/guides/text/'
      }, {
        label: 'xmake build',
        link: '/guides/xmake/'
      }]
    }, {
      label: 'References',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), icon(), solidJs()]
});
