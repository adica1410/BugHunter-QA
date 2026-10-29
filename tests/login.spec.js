
const { test, expect } = require('@playwright/test');

test('AUT-001: Successful login redirects to products', async ({ page }) => {

    // Open the BugHunter Shop login page
    await page.goto('http://127.0.0.1:5500/app/index.html');

    // Handle the successful login alert
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });

    // Enter valid test credentials
    await page.locator('#email').fill('test@bughunter.local');
    await page.locator('#password').fill('Test123!');

    // Click the Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful navigation
    await expect(page).toHaveURL(/products\.html$/);

    // Verify the products page heading
    await expect(
        page.getByRole('heading', { name: 'Our Products' })
    ).toBeVisible();

});


test('AUT-002: Login with invalid password', async ({ page }) => {

    // Open the login page
    await page.goto('http://127.0.0.1:5500/app/index.html');

    // Prepare to capture the error alert
    let alertMessage = '';

    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    // Enter an incorrect password
    await page.locator('#email').fill('test@bughunter.local');
    await page.locator('#password').fill('Wrong123!');

    // Attempt to log in
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify that the application rejects the login
    expect(alertMessage).toBe('Invalid email or password.');

    // Verify the user stays on the login page
    await expect(page).toHaveURL(/index\.html(?:\?.*)?$/);

});

