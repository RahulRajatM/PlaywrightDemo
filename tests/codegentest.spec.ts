import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#logInModal > .modal-dialog > .modal-content > .modal-body > form > div').first().click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('Test@rrm');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  await expect(page.locator('#logout2')).toMatchAriaSnapshot(`
    - link "Log out":
      - /url: "#"
    `);
  await page.getByRole('link', { name: 'Welcome Test@rrm' }).click();
  await expect(page.locator('#nameofuser')).toContainText('Welcome Test@rrm');
});