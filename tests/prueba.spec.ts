import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/');
  //await page.getByText('Aristotle').click();
  //await page.locator('text=Aristotle').click();
  //await page.getByRole('link', { name: 'Resources' }).click();
  //await page.locator('a.nav-link:has-text("Resources)').click();
  //a. = es una clase cuando se le pone el puntico (clase a)
  await page.locator('#title');
  await page.locator('.alert');
  await page.locator('a.navbar-brand').click(); // en este caso se combina la etiqueta "a" con la clase "nav-link" 
  //await page.getByRole('link', { name: 'W3C' }).click();
  //await page.goto('http://www.uitestingplayground.com/resources');
  //await page.getByRole('link', { name: 'Home' }).click();
  //await page.getByRole('link', { name: 'Click' }).click();
  //await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});