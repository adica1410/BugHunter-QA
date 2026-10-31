
import { test, expect } from '@playwright/test';

test('API-001: GET request returns a user', async ({ request }) => {

    // Send GET request to the API
    const response = await request.get(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    // Verify successful HTTP status
    expect(response.status()).toBe(200);

    // Convert response into JSON
    const user = await response.json();

    // Verify important response fields
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');

});
