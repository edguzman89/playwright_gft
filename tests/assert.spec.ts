import { test, expect } from '@playwright/test';

test('playing assertions', async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/textinput/');

  //El imput es visible
  await expect(page.locator('#newButtonName')).toBeVisible();
  //seleccionar el imput e ingresar texto
  await page.locator("#newButtonName").fill("Edgar")
  //click en el boton
  await page.locator("#updatingButton").click();
  //verificar que el texto del boton se actualizo
  await expect(page.locator("#updatingButton")).toContainText("Edgar");

});