import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import App from '../../src/App.svelte';

test('renders the heading and counter', async () => {
	const screen = await render(App);
	await expect
		.element(screen.getByRole('heading', { level: 1, name: 'Get started' }))
		.toBeVisible();
	await expect
		.element(screen.getByRole('button'))
		.toHaveTextContent('Count is 0');
});
