# Assignment-for-Software-QA-Engineer-Position

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
- Dynamic test data for signup
- Custom commands support
- Easy to integrate with CI/CD- Github Actions
- Allure Reporting integration 

## Running Tests
To run tests in headless mode:
npm run cypress:run

To open Cypress Test Runner:
npm run cypress:open

Runs all Cypress tests in headless mode and generate Allure report
npm run ui-regression-allure
<img width="1888" height="862" alt="image" src="https://github.com/user-attachments/assets/54627cd6-df28-4705-ab89-4f4adad2743c" />


## CI/CD
The project uses GitHub Actions for continuous integration. The workflow configuration can be found in .github/workflows/cypress.yml 
