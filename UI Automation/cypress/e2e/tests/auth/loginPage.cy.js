/// <reference types="cypress" />
import LoginPage from "../../pageObjects/pageActions/LoginAction";

describe('Login Functionality', () => {
  let loginData;

   // Load the fixture data before the tests
  before(() => {
    cy.fixture('loginUserData').then((data) => {
        loginData = data;
      })
  })

  beforeEach(() => {
    // Prevent test from failing due to ad/analytics scripts
    Cypress.on('uncaught:exception', () => false) 

    // Automatically block all third-party requests
    cy.blockAllThirdParty()
    
    // Visit the site but DO NOT wait for the full page load
    cy.visit('/login', {
      failOnStatusCode: false,
      timeout: 180000
     })
  })
  
    // Negative Test case: Verify login with invalid email
  it('should display an error for an invalid email', () => {
      cy.get('a[href="/login"]').click()
      LoginPage.typeUsername(loginData.invalidEmail)
      LoginPage.typePassword(loginData.validUser.password)
      LoginPage.clickLogin()      
      cy.contains('Your email or password is incorrect!').should('be.visible')
    })
  
  
    // Negative Test case: Verify login with invalid password
  it('should display an error for an invalid password', () => {
      cy.get('a[href="/login"]').click()   
      LoginPage.typeUsername(loginData.validUser.email)
      LoginPage.typePassword(loginData.invalidPassword)
      LoginPage.clickLogin()   
    
      cy.contains('Your email or password is incorrect!').should('be.visible')
  })  
  
    // Positive Test Case: Verify login with valid credentials
  it('should log in successfully with valid credentials', () => {
      cy.get('a[href="/login"]').click()    
      LoginPage.typeUsername(loginData.validUser.email)
      LoginPage.typePassword(loginData.validUser.password)
      LoginPage.clickLogin()  
      // Wait for a key element in the logged-in page
      cy.contains('Logged in as', { timeout: 120000 }).should('be.visible');
  })
})