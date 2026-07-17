import { test, expect } from '@playwright/test';

test.describe(() => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('localhost:3000/');
    });

    test('check xLocator is visible', async ({ page }) => {
        // your code here
        // await page.locator('your locator here').click(); 

        // await expect(page.locator('your locator here')).toBeVisible();
    });

    test('your test name here', async ({ page }) => {
        // your code here
    });

});