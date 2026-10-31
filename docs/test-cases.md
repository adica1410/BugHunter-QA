
# BugHunter Shop – Manual Test Cases

## TC-001: Successful Login

**Requirement ID:** FR-001

**Test Type:** Functional / Positive Testing

**Priority:** High

**Preconditions:**
- The application is running.
- A valid test user account exists.

**Test Data:**
- Email: test@bughunter.local
- Password: Test123!

**Test Steps:**
1. Open the BugHunter Shop application.
2. Navigate to the login page.
3. Enter the valid email address.
4. Enter the valid password.
5. Click the Login button.

**Expected Result:**
The user is successfully authenticated and
redirected to the products page.


**Actual Result:**
The application displayed a successful login message
and redirected the user to the products page.

**Status:** Passed

**Execution Method:** Manual Testing

**Browser:** Google Chrome

**Environment:** Local HTML/JavaScript application







## TC-002: Login with Invalid Password

**Requirement ID:** FR-002

**Test Type:** Functional / Negative Testing

**Priority:** High

**Preconditions:**
- The application is running.
- A valid test user account exists.

**Test Data:**
- Email: test@bughunter.local
- Password: Wrong123!

**Test Steps:**
1. Open the BugHunter Shop application.
2. Enter the valid email address.
3. Enter an incorrect password.
4. Click the Login button.

**Expected Result:**
The application rejects the login attempt and
displays "Invalid email or password."

**Actual Result:**
The application displayed "Invalid email or password."

**Status:** Passed

**Evidence:** Screenshot captured during manual testing.





---

## TC-003: Remove Product from Shopping Cart

**Requirement ID:** FR-005, FR-006

**Test Type:** Functional / Positive Testing

**Priority:** High

**Preconditions:**
- The BugHunter Shop application is running.
- The products page is open.
- The shopping cart is initially empty.

**Test Data:**
- Wireless Headphones: $49.99
- Smart Watch: $79.99

**Test Steps:**
1. Open the products page.
2. Add Wireless Headphones to the cart.
3. Add Smart Watch to the cart.
4. Verify that the cart contains 2 items.
5. Verify that the total price is $129.98.
6. Click Remove next to Smart Watch.
7. Verify the remaining cart contents and total.

**Expected Result:**
- Smart Watch is removed from the cart.
- Wireless Headphones remains in the cart.
- The cart count decreases from 2 to 1.
- The total price updates to $49.99.

**Actual Result:**
The Smart Watch was successfully removed.
The cart count and total price updated correctly.

**Status:** Passed

**Execution Method:** Manual Testing

**Environment:** Local HTML/JavaScript application


---

## TC-004: Checkout with Empty Required Fields

**Requirement ID:** FR-008

**Test Type:** Functional / Negative Testing

**Priority:** High

**Preconditions:**
- The Checkout page is open.
- All shipping information fields are empty.

**Test Data:**
- Full Name: Empty
- Shipping Address: Empty
- City: Empty
- Postal Code: Empty

**Test Steps:**
1. Open the Checkout page.
2. Leave all required fields empty.
3. Click the Place Order button.

**Expected Result:**
The browser prevents form submission and displays
a required-field validation message.

No order success message should appear.

**Actual Result:**
The browser blocked form submission and displayed
"Please fill out this field." for the Full Name field.

**Status:** Passed

**Execution Method:** Manual Testing

**Environment:** Local Web Application / Microsoft Edge

**Validation Type:** Native HTML5 Required Field Validation


---

## TC-006: Complete Purchase Flow

**Requirement IDs:** FR-001, FR-003, FR-004, FR-006, FR-007

**Test Type:** End-to-End / Functional / Positive Testing

**Priority:** High

**Preconditions:**
- The application is running.
- A valid demo user account is available.
- The shopping cart is initially empty.

**Test Data:**
- Email: test@bughunter.local
- Password: Test123!
- Product: Wireless Headphones
- Product Price: $49.99
- Full Name: Test User
- Shipping Address: 123 Test Street
- City: Sarajevo
- Postal Code: 71000

**Test Steps:**
1. Open the BugHunter Shop login page.
2. Log in using valid demo credentials.
3. Verify navigation to the Products page.
4. Add Wireless Headphones to the cart.
5. Verify the cart contains one item.
6. Verify the total price is $49.99.
7. Click Proceed to Checkout.
8. Verify the Order Summary displays the correct product and price.
9. Complete the shipping information form.
10. Click Place Order.
11. Verify navigation to the Order Confirmation page.

**Expected Result:**
- Login succeeds.
- The selected product appears in the cart.
- The displayed total is $49.99.
- Checkout shows the correct product and total.
- The shipping form accepts valid test data.
- The Order Confirmation page is displayed.

**Actual Result:**
The user completed the demo purchase flow,
and the Order Confirmation page was displayed.

**Status:** Passed

**Execution Method:** Manual Testing

**Environment:** Local Web Application / Microsoft Edge

**Note:**
The checkout process is simulated.
No real payment or server-side order processing occurs.


---

## TC-007: Unauthorized Access to Products Page

**Requirement ID:** FR-010

**Test Type:** Functional / Negative Testing

**Priority:** High

**Preconditions:**
- BugHunter Shop is running.
- The user is not logged in.
- A new private browser session is opened.

**Test Data:**
- URL: http://127.0.0.1:5500/app/products.html
- Authentication Status: Not Authenticated

**Test Steps:**
1. Open a private browser window.
2. Navigate directly to the Products page URL.
3. Observe whether the Products page is displayed.
4. Check whether the user is redirected to Login.

**Expected Result:**
The unauthenticated user must be redirected
to the Login page.

The Products page must not be accessible
without an active demo login session.

**Actual Result:**
The Products page opened successfully
without requiring login.

**Status:** Failed

**Execution Method:** Manual Testing

**Environment:** Local Web Application / Private Browser Window

**Note:**
This test evaluates demo-level access control.
The application does not provide server-side
authentication or production-grade security.
