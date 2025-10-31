import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: 'automatic',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				// Если хотите автоматически импортировать переменные и миксины в каждый SCSS файл
				additionalData: `
					@use "@/styles/variables" as *;
					@use "@/styles/mixins" as *;
				`,
			},
		},
		modules: {
			// Генерация понятных имен классов для CSS Modules в development
			generateScopedName: '[name]__[local]___[hash:base64:5]',
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: 'dist',
		sourcemap: true, // Полезно для отладки TypeScript
	},
})
