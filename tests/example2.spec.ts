
import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './playwright-dev-page';

test('Clickin on Elements', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.');
})
test('Working with Inputs', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/');
    await page.click('#signin_button');

    await page.type('#user_login', 'somer username')
    await page.type('#user_password', 'somer password')
    await page.click('text=Sign in');

    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toContainText('Login and/or password are wrong.');
})