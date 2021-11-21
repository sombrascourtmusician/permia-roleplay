import preprocess from 'svelte-preprocess';
import adapter from "@sveltejs/adapter-static";

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@import "src/variables.scss";'
			}
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@import "src/variables.scss";'
					}
				}
			}
		},
    paths: {
			base: dev ? '' : '/permia-roleplay',
		},
		// If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
		// For example, instead of '_app', use 'app_', 'internal', etc.
		appDir: 'internal',
	}
};

export default config;
