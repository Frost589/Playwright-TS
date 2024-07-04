import { test, expect } from '@playwright/test';


test('launch browser an open SwagLabs', async({page})=>{
    await page.goto('https://www.saucedemo.com/');

   // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');
  await page.waitForTimeout(3000);

})

test('log into SwagLabs', async ({page})=>{
    await page.goto('https://www.saucedemo.com/');
    const user = page.getByPlaceholder('Username');
    const psw = page.getByPlaceholder('Password');
    const login = page.locator('#login-button')
    await(user).fill('standard_user');
    await(psw).fill('secret_sauce');
    await (login).click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle('Swag Labs');

    
})