import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',   // This is the directory name
            assets: 'build',  // This is the directory name
            // fallback: '404.html',
            precompress: false,
            strict: true
        })
    }
};

export default config;
