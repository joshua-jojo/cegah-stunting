import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';
import commonjs from "vite-plugin-commonjs";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vuePlugin(),
        commonjs({
            filter(id) {
                if (["./ckeditor5/build/ckeditor.js"].includes(id)) {
                    return true;
                }
            },
        }),

    ],
    optimizeDeps: {
        include: ['ckeditor5-custom-build']
    },
});
