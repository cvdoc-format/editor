/// <reference types="vitest/config" />
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
	test: {
		coverage: {
			enabled: true,
			include: ['src/**/*.{ts,svelte}'],
		},
		projects: [
			{
				test: {
					name: 'browser',
					include: ['tests/unit/**/*.svelte.test.ts'],
					browser: {
						enabled: true,
						provider: playwright(),
						instances: [{ browser: 'chromium' }],
					},
				},
			},
			{
				test: {
					name: 'node',
					include: ['tests/unit/**/*.test.ts'],
					exclude: ['tests/unit/**/*.svelte.test.ts'],
					environment: 'node',
				},
			},
		],
	},
});
