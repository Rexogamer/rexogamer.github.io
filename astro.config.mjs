import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://rexogamer.github.io',
	integrations: [mdx(), sitemap()],
	redirects: {
		// FIXES:
		// misplaced blog post
		'/blog/2040721-new-site': '/blog/20240721-new-site'
	}
});
