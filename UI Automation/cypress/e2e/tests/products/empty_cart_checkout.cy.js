/// <reference types="cypress" />

describe('Empty Cart Checkout', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.blockAllThirdParty();
      cy.visit('/login', {
          failOnStatusCode: false,
          timeout: 180000
      })
  })

    it('Should display an message when checking out with empty cart', () => {
       cy.get('a[href="/login"]').click()
       cy.get('input[data-qa="login-email"]').type('jason4@sharklasers.com')
       cy.get('input[placeholder="Password"]').type('Luc123&#')
       cy.get('button[data-qa="login-button"]').click()
    
       cy.visit('/view_cart', { failOnStatusCode: false })
       cy.contains('Cart is empty!').should('be.visible')
  })
})