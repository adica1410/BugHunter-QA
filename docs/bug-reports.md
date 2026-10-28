
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
