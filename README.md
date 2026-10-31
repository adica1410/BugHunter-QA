
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

| Test ID | Test Scenario | Result |
|---------|---------------|--------|
| AUT-001 | Successful login | PASS |
| AUT-002 | Invalid login credentials | PASS |
| AUT-003 | Add product to shopping cart | PASS |
| AUT-004 | Remove product from shopping cart | PASS |
| AUT-005 | Reject invalid postal code | PASS |
| AUT-006 | Complete simulated purchase flow | PASS |
| AUT-007 | Unauthorized access redirects to login | PASS |

**Latest verified CI execution: 7/7 tests passed.**

Automated tests run in Chromium through GitHub Actions.


**Latest verified CI execution: 6/6 tests passed.**

Automated tests run in Chromium through GitHub Actions.

## Defect Management

Three defects were documented and resolved.

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


### BG-003: Unauthorized Products Access

Manual testing revealed that users could open
the Products page without completing demo login.

A new access-control requirement (FR-010) was defined,
and a negative test case (TC-007) was documented.

Client-side session validation was implemented
using sessionStorage.

Manual retesting confirmed that users without
an active demo login session are redirected
to the Login page.

AUT-007 was added to the Playwright test suite.

Note: This is educational client-side access control,
not production-grade security.


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

npx playwright test tests/login.spec.js tests/cart.spec.js tests/checkout.spec.js tests/access.spec.js --project=chromium

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
- Seven automated tests implemented and verified
- GitHub Actions CI successfully configured
- Additional testing and improvements planned

## Purpose

This project was developed for hands-on learning
and to demonstrate foundational software quality
assurance skills through a practical portfolio.


---

## API Testing – BugHunter Products API

This project includes a REST API built with Node.js
and Express for practicing API testing.

### API Endpoints

| Method | Endpoint | Expected Status |
|--------|----------|-----------------|
| GET | /api/products | 200 OK |
| GET | /api/products/2 | 200 OK |
| GET | /api/products/999 | 404 Not Found |

### Running the API Locally

Install dependencies:

```bash
npm ci
```

Start the API server:

```bash
node api/server.js
```

Base URL:

`http://localhost:3000`

### Postman API Testing

The project includes a Postman collection with
three GET requests and eight automated assertions.

Test coverage includes:
- Successful HTTP responses
- Product list validation
- Product ID verification
- Product name and price verification
- Negative testing with HTTP 404

**Last verified local result: 8/8 tests passed.**

### Running the Postman Collection

1. Start the local API server.
2. Open Postman.
3. Import the collection from the `postman/` folder.
4. Open the BugHunter API Testing collection.
5. Select Run.
6. Execute all three requests using Collection Runner.

### Postman Collection


`postman/BugHunter API Testing.postman_collection.json`


Note: The API uses in-memory demo data.
It does not currently connect to a database.
