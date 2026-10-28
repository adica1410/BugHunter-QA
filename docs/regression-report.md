
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
