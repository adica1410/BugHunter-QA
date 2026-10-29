
const { test, expect } = require('@playwright/test');

test('AUT-005: Reject invalid postal code', async ({ page }) => {

    // Open the Checkout page
    await page.goto('http://127.0.0.1:5500/app/checkout.html');

    // Fill in shipping information
    await page.locator('#fullName').fill('Test User');
    await page.locator('#address').fill('123 Test Street');
    await page.locator('#city').fill('Sarajevo');
    await page.locator('#zipCode').fill('ABCDE');

    // Capture and accept the validation alert
    let alertMessage = '';

    page.on('dialog', async (dialog) => {
        alertMessage = dialog.message();
        await dialog.accept();
    });

    // Submit the form
    await page.getByRole('button', {
        name: 'Place Order'
    }).click();

    // Verify the validation message
    expect(alertMessage).toBe(
        'Postal code must contain exactly 5 digits.'
    );

    // Verify navigation was blocked
    await expect(page).toHaveURL(/checkout\.html$/);

});


test('AUT-006: Complete demo purchase flow', async ({ page }) => {

    // Open the login page
    await page.goto('http://127.0.0.1:5500/app/index.html');

    // Accept the successful login alert
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });

    // Log in with valid demo credentials
    await page.locator('#email').fill('test@bughunter.local');
    await page.locator('#password').fill('Test123!');

    await page.getByRole('button', {
        name: 'Login'
    }).click();

    // Verify navigation to Products
    await expect(page).toHaveURL(/products\.html$/);

    // Add Wireless Headphones
    const headphones = page.locator('.product-card')
        .filter({ hasText: 'Wireless Headphones' });

    await headphones.getByRole('button', {
        name: 'Add to Cart'
    }).click();

    // Verify cart total
    await expect(page.locator('#cartTotal'))
        .toHaveText('Total: $49.99');

    // Navigate to Checkout
    await page.getByRole('button', {
        name: 'Proceed to Checkout'
    }).click();

    await expect(page).toHaveURL(/checkout\.html$/);

    // Verify Order Summary
    await expect(page.locator('#orderItems'))
        .toContainText('Wireless Headphones - $49.99');

    await expect(page.locator('#orderTotal'))
        .toHaveText('Total: $49.99');

    // Enter valid shipping information
    await page.locator('#fullName').fill('Test User');
    await page.locator('#address').fill('123 Test Street');
    await page.locator('#city').fill('Sarajevo');
    await page.locator('#zipCode').fill('71000');

    // Complete the demo purchase
    await page.getByRole('button', {
        name: 'Place Order'
    }).click();

    // Verify confirmation page
    await expect(page).toHaveURL(/confirmation\.html$/);

    await expect(
        page.getByRole('heading', {
            name: 'Order Confirmed!'
        })
    ).toBeVisible();

});
