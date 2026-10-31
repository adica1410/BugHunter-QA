
# BugHunter Shop – Bug Reports

## BG-001: Incorrect Shopping Cart Total

**Bug ID:** BG-001

**Title:** Shopping cart displays an incorrect total price

**Type:** Functional Bug

**Severity:** High

**Priority:** High

**Status:** Closed

**Requirement ID:** FR-006

**Environment:**
- Application: BugHunter Shop
- Browser: Google Chrome
- Platform: Windows
- Testing Method: Manual Testing

### Description

The shopping cart displays an incorrect total price.
An additional $10.00 is added to the calculated total,
even when the cart is empty.

This is an intentionally introduced defect
for educational QA testing.

### Steps to Reproduce

1. Open the BugHunter Shop products page.
2. Refresh the page.
3. Observe the total price of the empty cart.
4. Add one Gaming Controller to the cart.
5. Observe the updated total price.

### Expected Result

- Empty cart total: $0.00
- Gaming Controller total: $39.99

### Actual Result

- Empty cart total: $10.00
- Gaming Controller total: $49.99

### Impact

The defect causes customers to see incorrect
shopping cart totals and could lead to
incorrect charges if used in a real checkout.

### Root Cause

The displayed total is intentionally increased
by $10.00 in cart.js.

### Evidence

Screenshots captured during manual testing.


### Retest Results

**Retest Status:** Passed

**Defect Status:** Closed

**Testing Method:** Manual Retesting

**Environment:** Local HTML/JavaScript Application

### Retest Scenarios

| Test Scenario | Expected Result | Actual Result | Status |
|---|---|---|---|
| Empty shopping cart | $0.00 | $0.00 | Passed |
| Add Gaming Controller | $39.99 | $39.99 | Passed |
| Remove Gaming Controller | $0.00 | $0.00 | Passed |

### Resolution

The intentionally introduced $10.00 calculation
error was removed from the cart.js file.

The shopping cart now displays the correct
total for all three retested scenarios.

### Final QA Verification

The original defect could not be reproduced
during retesting.

All three retest scenarios passed successfully.

**Final Status:** Closed


---

## BG-002: Invalid Postal Code Accepted During Checkout

**Bug ID:** BG-002

**Title:** Checkout accepts alphabetic postal codes

**Type:** Functional / Input Validation

**Severity:** Medium

**Priority:** High

**Status:** Closed

**Requirement ID:** FR-009


### Retest Results

**Retest Status:** Passed

**Defect Status:** Closed

**Testing Method:** Manual Testing

**Environment:** Local Web Application / Microsoft Edge

### Test Execution Results

| Postal Code | Expected Result | Actual Result | Status |
|---|---|---|---|
| ABCDE | Rejected | Rejected | Passed |
| 71000 | Accepted | Accepted | Passed |
| 123 | Rejected | Rejected | Passed |
| 123456 | Rejected | Rejected | Passed |
| 71A00 | Rejected | Rejected | Passed |

### Resolution

Added postal code format validation
in checkout.js using a regular expression.

The application now accepts only postal codes
containing exactly five numeric digits.

### Final QA Verification

The original BG-002 defect could not be
reproduced after the fix.

All five validation scenarios passed.

**Final Status:** Closed


---

## BG-003: Products Page Accessible Without Login

**Bug ID:** BG-003

**Title:** Unauthenticated users can access the Products page

**Type:** Functional / Access Control

**Severity:** Medium

**Priority:** Medium

**Status:** Closed

**Requirement ID:** FR-010

**Related Test Case:** TC-007

**Environment:**
- Application: BugHunter Shop
- Platform: Windows
- Testing Method: Manual Testing
- Browser: Private Browser Session
- Server: Local Development Server

### Description

The Products page can be accessed directly
without completing the demo login process.

According to FR-010, the application should
redirect users without an active demo login
session to the Login page.

### Steps to Reproduce

1. Start the BugHunter Shop application.
2. Open a new private browser window.
3. Navigate directly to:
   http://127.0.0.1:5500/app/products.html
4. Observe the displayed page.

### Expected Result

The user is redirected to the Login page.

### Actual Result

The Products page is displayed without login.

### Impact

The application does not enforce its
documented demo login navigation rule.

### Root Cause

The Products page did not check whether a user
had completed the demo login process.

### Evidence

Manual testing confirmed direct access
to the Products page in a private session.

### Resolution

Implemented client-side demo session tracking
using sessionStorage.

Successful login sets the bughunterLoggedIn flag.

The Products page checks this flag and redirects
unauthenticated users to index.html.


### Retest Status

Passed

Manual retesting confirmed:
- Unauthenticated users are redirected to Login.
- Authenticated demo users can access Products.

Automated testing confirmed:
- AUT-007: Unauthorized access redirects to login — PASS.

Regression testing:
- 7/7 Playwright tests passed locally in Chromium.

### Security Note

The sessionStorage implementation is for
educational purposes only. It does not provide
secure server-side authentication or authorization.
