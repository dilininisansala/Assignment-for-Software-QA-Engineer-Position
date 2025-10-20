# Automation Assignment QA

This project contains automated tests for:
1. Signup Flow
2. Login Flow
3. Product Search & Add to Cart
4. Single Product Checkout (without payment)
5. Multiple Products Checkout (without payment)
6. Empty Cart Checkout
7. Dynamic Cart Operations
8. Cross-Browser Testing

## Features
- Framework architecture design
- Page Object Model structure
- Dynamic test data for signup and Login
- Custom commands support
- Easy to integrate with CI/CD- Github Actions

## Running Tests
To run tests in headless mode:
npm run cypress:run

To open Cypress Test Runner:
npm run cypress:open

## CI/CD
The project uses GitHub Actions for continuous integration. The workflow configuration can be found in .github/workflows/cypress.yml 