
# BugHunter Shop – Regression Test Report

## 1. Test Execution Summary

**Report ID:** REG-001

**Related Defect:** BG-001 – Incorrect Shopping Cart Total

**Test Type:** Manual Regression Testing

**Application:** BugHunter Shop

**Environment:** Local HTML/CSS/JavaScript Application

**Overall Status:** Passed

## 2. Test Objective

Verify that existing shopping cart functionality
continues to work correctly after fixing BG-001.

## 3. Test Execution Results

| Test ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| RT-001 | Add one Wireless Headphones | Cart: 1, Total: $49.99 | Passed |
| RT-002 | Add Headphones and Smart Watch | Cart: 2, Total: $129.98 | Passed |
| RT-003 | Add Gaming Controller three times | Cart: 3, Total: $119.97 | Passed |
| RT-004 | Remove Headphones from a two-item cart | Cart: 1, Total: $79.99 | Passed |

## 4. Execution Statistics

- Total Tests: 4
- Passed: 4
- Failed: 0
- Blocked: 0
- Pass Rate: 100%

## 5. Findings

All four regression test scenarios passed.

The tested shopping cart features continued
to work after the BG-001 defect fix.

No new defects were observed in the executed
regression scenarios.

## 6. Conclusion

The BG-001 fix passed the defined regression
test suite.

The result applies only to the four executed
scenarios and does not represent complete
application test coverage.

**Final Result:** Passed


---

## Regression Test Report – BG-003 Fix

### Test Objective

Verify that the implementation of demo login session
validation does not break existing application functionality.

### Change Under Test

BG-003: Products Page Accessible Without Login

Implemented client-side session validation using
sessionStorage and automatic redirection to Login
for unauthenticated users.

### Test Environment

- Application: BugHunter Shop
- Test Framework: Playwright
- Browser: Chromium
- Execution: Local
- Test Type: Automated Regression Testing

### Automated Regression Results

| Test ID | Test Scenario | Result |
|---------|---------------|--------|
| AUT-001 | Successful login | PASS |
| AUT-002 | Invalid login credentials | PASS |
| AUT-003 | Add product to cart | PASS |
| AUT-004 | Remove product from cart | PASS |
| AUT-005 | Reject invalid postal code | PASS |
| AUT-006 | Complete demo purchase | PASS |
| AUT-007 | Unauthorized access redirects to login | PASS |

### Test Summary

- Total Automated Tests: 7
- Passed: 7
- Failed: 0
- Skipped: 0
- Browser: Chromium
- Overall Result: PASS

### Manual Retesting

TC-007: PASS

Verified scenarios:
- Direct Products access without login redirects to Login.
- Successful demo login allows access to Products.

### Conclusion

All seven automated tests passed locally after
the BG-003 fix.

No regressions were detected in the tested scenarios.

The client-side session mechanism is intended
for educational testing and does not provide
production-grade access control.
