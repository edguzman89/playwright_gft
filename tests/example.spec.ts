import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.guru99.com/');
  await page.getByRole('link', { name: 'Bank Project' }).click();
  await page.locator('input[name="uid"]').click();
  await page.locator('input[name="uid"]').fill('mngr595312');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('busebaq');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'LOGIN' }).click();
});