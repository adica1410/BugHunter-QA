
# BugHunter QA Lab

[![Playwright Tests](https://github.com/adica1410/BugHunter-QA/actions/workflows/playwright.yml/badge.svg)](https://github.com/adica1410/BugHunter-QA/actions/workflows/playwright.yml)

A software quality assurance portfolio project demonstrating
manual testing, automated testing, defect management,
regression testing, and continuous integration.

## Project Overview

BugHunter QA Lab is a QA training project built around
BugHunter Shop, a simulated e-commerce web application.

The project demonstrates the software testing lifecycle:
requirements analysis, test case design, test execution,
bug reporting, defect resolution, retesting, and regression testing.

## Application Features

- Demo user login
- Product catalog
- Shopping cart management
- Automatic cart total calculation
- Checkout form with input validation
- Order summary
- Simulated order confirmation

No real payments or server-side order processing are performed.

## Technologies

| Category | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Test Automation | Playwright, JavaScript |
| Test Framework | Playwright Test |
| Version Control | Git, GitHub |
| CI | GitHub Actions |
| Test Documentation | Markdown |

## Manual QA Testing

Manual testing activities include:

- Functional testing
- Positive and negative testing
- Boundary value testing
- Defect reporting
- Retesting
- Regression testing
- End-to-end testing

Documentation:

- [Software Requirements](docs/requirements.md)
- [Manual Test Cases](docs/test-cases.md)
- [Bug Reports](docs/bug-reports.md)
- [Regression Test Report](docs/regression-report.md)

## Automated Test Coverage

| Test ID | Test Scenario |
|---|---|
| AUT-001 | Successful login |
| AUT-002 | Login with invalid password |
| AUT-003 | Add product to shopping cart |
| AUT-004 | Remove product from shopping cart |
| AUT-005 | Reject invalid postal code |
| AUT-006 | Complete simulated purchase flow |

**Latest verified CI execution: 6/6 tests passed.**

Automated tests run in Chromium through GitHub Actions.

## Defect Management

Two defects were documented and resolved.

### BG-001: Incorrect Shopping Cart Total

An intentionally introduced calculation defect caused
the cart total to be increased by $10.00.

The defect was documented, corrected, retested,
and followed by manual regression testing.

### BG-002: Invalid Postal Code Accepted

Negative testing revealed that the checkout form
accepted alphabetic postal codes despite the
demo application's five-digit validation requirement.

Input validation was implemented and verified
using positive, negative, and boundary tests.

## Run Automated Tests

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm ci
npx playwright install
```

### Run BugHunter Tests

```bash
npx playwright test tests/login.spec.js tests/cart.spec.js tests/checkout.spec.js --project=chromium
```

Playwright automatically starts the local application
through the configured HTTP server.

### Open HTML Test Report

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions runs the Playwright test suite
on pushes and pull requests targeting the main branch.

The workflow installs dependencies, installs Playwright
browsers, executes automated tests, and uploads
the HTML test report as an artifact.

## Project Status

- Manual testing completed for documented scenarios
- Six automated tests implemented and verified
- GitHub Actions CI successfully configured
- Additional testing and improvements planned

## Purpose

This project was developed for hands-on learning
and to demonstrate foundational software quality
assurance skills through a practical portfolio.
