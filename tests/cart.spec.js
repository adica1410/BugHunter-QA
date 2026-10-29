
const { test, expect } = require('@playwright/test');

test('AUT-003: Add product to shopping cart', async ({ page }) => {

    // Open the products page
    await page.goto('http://127.0.0.1:5500/app/products.html');

    // Verify the cart is initially empty
    await expect(page.locator('#cartCount'))
        .toContainText('Cart: 0 items');

    // Add Wireless Headphones to the cart
    const headphones = page.locator('.product-card')
        .filter({ hasText: 'Wireless Headphones' });

    await headphones.getByRole('button', {
        name: 'Add to Cart'
    }).click();

    // Verify cart item count
    await expect(page.locator('#cartCount'))
        .toContainText('Cart: 1 items');

    // Verify product appears in the cart
    await expect(page.locator('#cartItems'))
        .toContainText('Wireless Headphones - $49.99');

    // Verify the total price
    await expect(page.locator('#cartTotal'))
        .toHaveText('Total: $49.99');

});


test('AUT-004: Remove product from shopping cart', async ({ page }) => {

    // Open the products page
    await page.goto('http://127.0.0.1:5500/app/products.html');

    // Add two different products
    const headphones = page.locator('.product-card')
        .filter({ hasText: 'Wireless Headphones' });

    const watch = page.locator('.product-card')
        .filter({ hasText: 'Smart Watch' });

    await headphones.getByRole('button', {
        name: 'Add to Cart'
    }).click();

    await watch.getByRole('button', {
        name: 'Add to Cart'
    }).click();

    // Verify initial total
    await expect(page.locator('#cartTotal'))
        .toHaveText('Total: $129.98');

    // Remove Smart Watch
    const watchCartItem = page.locator('#cartItems li')
        .filter({ hasText: 'Smart Watch' });

    await watchCartItem.getByRole('button', {
        name: 'Remove'
    }).click();

    // Verify remaining cart contents
    await expect(page.locator('#cartCount'))
        .toContainText('Cart: 1 items');

    await expect(page.locator('#cartItems'))
        .toContainText('Wireless Headphones - $49.99');

    await expect(page.locator('#cartItems'))
        .not.toContainText('Smart Watch');

    // Verify updated total
    await expect(page.locator('#cartTotal'))
        .toHaveText('Total: $49.99');

});
