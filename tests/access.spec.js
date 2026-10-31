
import { test, expect } from '@playwright/test';

test('AUT-007: Unauthorized access redirects to login', async ({ page }) => {

    // Open Products page without logging in
    await page.goto('http://127.0.0.1:5500/app/products.html');

    // Verify that the user is redirected to Login
    await expect(page).toHaveURL(/index\.html$/);

    // Verify that the login form is visible
    await expect(page.locator('#loginForm')).toBeVisible();

});
