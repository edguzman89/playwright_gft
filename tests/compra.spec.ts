import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('.choose > .nav > li > a').first().click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('3');
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
});