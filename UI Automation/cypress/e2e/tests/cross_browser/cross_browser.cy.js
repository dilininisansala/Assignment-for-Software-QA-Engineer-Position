/// <reference types="cypress" />


describe('Cross Browser Login Test', () => {
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
  
  it('Should login successfully in multiple browsers', () => {
      cy.get('a[href="/login"]').click()
      cy.get('input[data-qa="login-email"]').type('jason4@sharklasers.com')
      cy.get('input[placeholder="Password"]').type('Luc123&#')
      cy.get('button[data-qa="login-button"]').click()
      cy.contains('Logged in as', { timeout: 120000 }).should('be.visible');
  })
})