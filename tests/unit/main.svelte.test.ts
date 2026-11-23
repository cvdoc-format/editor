import { expect, test } from 'vitest';
import { page } from 'vitest/browser';

test('mounts the app into #app', async () => {
	document.body.append(
		Object.assign(document.createElement('div'), { id: 'app' }),
	);
	await import('../../src/main');
	await expect
		.element(page.getByRole('heading', { level: 1, name: 'Get started' }))
		.toBeVisible();
});
