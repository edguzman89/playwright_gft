import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Aceptar' }).click();
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByRole('textbox', { name: 'Número de documento' }).click();
  await page.getByRole('textbox', { name: 'Número de documento' }).fill('40010040');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByTestId('0').fill('1');
  await page.getByTestId('1').fill('2');
  await page.getByTestId('2').fill('3');
  await page.getByTestId('3').fill('4');
  await page.getByTestId('4').fill('5');
  await page.getByTestId('5').fill('6');
  await page.waitForLoadState('load');
  //await page.waitForSelector('.MuiDialogContent-root svg', { state: 'visible', timeout: 6000 });
  //await page.locator('.MuiDialogContent-root > div > svg > path').click();
});

test.afterEach(async ({ page }) => {
    await page.waitForSelector('button[title="Me interesa"]', { state: 'visible', timeout: 6000 });
    await page.getByRole('button', { name: 'Me interesa' }).click();
    await page.locator('button.MuiButton-primary:has-text("Redimir")').click();
    await page.getByRole('button', { name: 'Confirmar y generar código' }).click({ force: true });
    await page.getByTestId('0').fill('1');
    await page.getByTestId('1').fill('1');
    await page.getByTestId('2').fill('1');
    await page.getByTestId('3').fill('1');
    await page.getByTestId('4').fill('1');
    await page.getByTestId('5').fill('1');
    await page.getByText('Ver código', { exact: true }).click();

    // Espera explícita y selector corregido para capturar el código
    await page.waitForSelector('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l', { state: 'visible', timeout: 10000 });
    const codigo = await page.locator('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l').textContent();
    console.log('Código capturado:', codigo);

    await page.getByRole('button', { name: 'Salir y ver mis bonos' }).click();
    await page.locator(`text=${codigo}`).click();

    // Espera explícita antes de comparar el código en el modal
    await page.waitForSelector('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l', { state: 'visible', timeout: 10000 });
    const codigoModal = await page.locator('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l').textContent();
    console.log('Código en el modal:', codigoModal);

    expect(codigoModal?.trim()).toBe(codigo?.trim());
});

/*test.afterEach(async ({ page }) => {
    await page.waitForSelector('button[title="Me interesa"]', { state: 'visible', timeout: 6000 }); // Espera explícita para el botón
    await page.getByRole('button', { name: 'Me interesa' }).click();
    await page.locator('button.MuiButton-primary:has-text("Redimir")').click();
    //await page.getByRole('button', { name: 'Cerrar' }).click();
    await page.getByRole('button', { name: 'Confirmar y generar código' }).click({ force: true });
    await page.getByTestId('0').fill('1');
    await page.getByTestId('1').fill('1');
    await page.getByTestId('2').fill('1');
    await page.getByTestId('3').fill('1');
    await page.getByTestId('4').fill('1');
    await page.getByTestId('5').fill('1');
    await page.getByText('Ver código', { exact: true }).click();
    //const codigo = await page.locator('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l').textContent();
    
    const codigo = await page.locator('p.MuiTypography-root MuiTypography-body1 mui-s0wy4l').textContent();
    console.log('Código capturado:', codigo);
    //await page.locator('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-1aa526r').click();
    await page.getByRole('button', { name: 'Salir y ver mis bonos' }).click();
    await page.locator(`text=${codigo}`).click();
    // Validar que el código en el modal coincide con la variable capturada
    const codigoModal = await page.locator('p.MuiTypography-root.MuiTypography-body1.css-s0wy4l').textContent();
    console.log('Código en el modal:', codigoModal);
    // Comparar los códigos
    expect(codigoModal?.trim()).toBe(codigo?.trim()); // Asegúrate de que ambos códigos coincidan
  });*/


test('Redimir un bono de tienda', async ({ page }) => {
    await page.getByRole('link', { name: 'Catálogo' }).click();
    await page.waitForLoadState('load');
    await page.waitForSelector('text=Bonos De Aliados', { state: 'visible', timeout: 9000 });
    await page.getByRole('button', { name: 'Filtrar' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Bonos de Tiendas' }).getByRole('radio').click();
    await page.goto('https://portal-qa.viveterpel.com/dashboard/detalle?param=Tiendas');
    //await page.getByText('manzana postobon 250ml').hover();
    await page.getByText('Agua Madre con gas 600ml.').hover();    
});

/*test('Redimir un bono de Liquidos', async ({ page }) => {
    await page.getByRole('link', { name: 'Catálogo' }).click();
    await page.waitForLoadState('load');
    await page.waitForSelector('text=Bonos Altoque', { state: 'visible', timeout: 9000 });
    await page.getByRole('button', { name: 'Filtrar' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Bonos de Líquidos' }).getByRole('radio').click();
    await page.goto('https://portal-qa.viveterpel.com/dashboard/detalle?param=Líquidos');
    await page.getByText('bono combustible $2.000').hover();
});

test('Redimir un bono GNV', async ({ page }) => {
    await page.getByRole('link', { name: 'Catálogo' }).click();
    await page.waitForLoadState('load');
    await page.waitForSelector('text=Bonos Altoque', { state: 'visible', timeout: 9000 });
    await page.getByRole('button', { name: 'Filtrar' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Bonos GNV' }).getByRole('radio').click();
    await page.goto('https://portal-qa.viveterpel.com/dashboard/detalle?param=GNV');
    await page.getByText('bono gnv $6.000').hover();
});

test('Redimir un bono de aliado', async ({ page }) => {
    await page.getByRole('link', { name: 'Catálogo' }).click();
    await page.waitForLoadState('load');
    await page.waitForSelector('text=Bonos Altoque', { state: 'visible', timeout: 9000 });
    await page.getByRole('button', { name: 'Filtrar' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Bonos de Aliados' }).getByRole('radio').click();
    await page.goto('https://portal-qa.viveterpel.com/dashboard/detalle?param=De%20Aliados');
    await page.getByText('plan 100 minutos').hover();
});

test('Redimir un bono de lubricantes', async ({ page }) => {
    await page.getByRole('link', { name: 'Catálogo' }).click();
    await page.waitForLoadState('load');
    await page.waitForSelector('text=Bonos Altoque', { state: 'visible', timeout: 9000 });
    await page.getByRole('button', { name: 'Filtrar' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Bonos de lubricantes' }).getByRole('radio').click();
    await page.goto('https://portal-qa.viveterpel.com/dashboard/detalle?param=Lubricantes');
    await page.getByText('bono lubricante por $50.000').hover();
});*/

