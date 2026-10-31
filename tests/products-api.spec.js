
import { test, expect } from '@playwright/test';

test('API-010: GET all BugHunter products', async ({ request }) => {

    // Send GET request to our own API
    const response = await request.get(
        'http://localhost:3000/api/products'
    );

    // Verify HTTP status
    expect(response.status()).toBe(200);

    // Read JSON response
    const products = await response.json();

    // Verify product list
    expect(Array.isArray(products)).toBe(true);
    expect(products).toHaveLength(3);

});

test('API-011: GET product by ID', async ({ request }) => {

    const response = await request.get(
        'http://localhost:3000/api/products/2'
    );

    expect(response.status()).toBe(200);

    const product = await response.json();

    expect(product.id).toBe(2);
    expect(product.name).toBe('Smart Watch');
    expect(product.price).toBe(79.99);

});

test('API-012: GET nonexistent product returns 404', async ({ request }) => {

    const response = await request.get(
        'http://localhost:3000/api/products/999'
    );

    expect(response.status()).toBe(404);

    const data = await response.json();

    expect(data.message).toBe('Product not found');

});
