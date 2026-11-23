import { expect, test } from '@playwright/test';

test('counter increments when clicked', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', { level: 1, name: 'Get started' }),
	).toBeVisible();

	const counter = page.getByRole('button', { name: /Count is/ });
	await expect(counter).toHaveText('Count is 0');
	await counter.click();
	await expect(counter).toHaveText('Count is 1');
});
