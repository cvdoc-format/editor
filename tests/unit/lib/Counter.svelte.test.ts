import { expect, test } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Counter from '../../../src/lib/Counter.svelte';

test('starts at zero', async () => {
	const screen = await render(Counter);
	await expect
		.element(screen.getByRole('button'))
		.toHaveTextContent('Count is 0');
});

test('increments on each click', async () => {
	const screen = await render(Counter);
	const button = screen.getByRole('button');
	await button.click();
	await expect.element(button).toHaveTextContent('Count is 1');
	await button.click();
	await expect.element(button).toHaveTextContent('Count is 2');
});
