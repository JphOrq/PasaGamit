import { defineConfig } from 'vite';
import { resolve } from 'path';

// Multi-page build: every HTML file is its own entry point.
const page = (p) => resolve(__dirname, p);

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: page('index.html'),
                marketplace: page('pages/marketplace.html'),
                categories: page('pages/categories.html'),
                postItem: page('pages/post-item.html'),
                studentHub: page('pages/student-hub.html'),
                about: page('pages/about.html'),
                contact: page('pages/contact.html'),
                profile: page('pages/profile.html'),
                gallery: page('pages/gallery.html'),
                login: page('pages/login.html')
            }
        }
    }
});
