import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
// import preprocess from 'svelte-preprocess';
// https://kit.svelte.dev/docs/integrations#preprocessors

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  // preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      $assets: './src/assets',
      $components: './src/components',
      $pages: './src/pages',
      $styles: './src/styles',
    },
  },
};

export default config;
