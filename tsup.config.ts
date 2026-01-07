import { defineConfig } from 'tsup'
import { copyFileSync, mkdirSync } from 'fs'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', 'recharts', 'lucide-react'],
    treeshake: true,
    minify: false,
    outDir: 'dist',
    onSuccess: async () => {
        // Copy CSS to dist/styles
        mkdirSync('dist/styles', { recursive: true })
        copyFileSync('src/styles/global.css', 'dist/styles/global.css')
    },
})

