import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	base: '/final/',
	build: {
		rollupOptions: {
			output: {
				// Сохранять оригинальные имена файлов
				chunkFileNames: '[name].js',
				entryFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
		},
	},
})
