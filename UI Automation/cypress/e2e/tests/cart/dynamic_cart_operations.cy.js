/// <reference types="cypress" />

describe('Single product checkout', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.blockAllThirdParty();
      cy.visit('/login', {
          failOnStatusCode: false,
          timeout: 180000               
    })
})
  it('Should checkout a single product successfully', () => {
      // Login
      cy.get('a[href="/login"]').click()
      cy.get('input[data-qa="login-email"]').type('jason4@sharklasers.com')
      cy.get('input[placeholder="Password"]').type('Luc123&#')
      cy.get('button[data-qa="login-button"]').click()
        
      // Go to Products page
      cy.visit('/products', { timeout: 0, failOnStatusCode: false })
      cy.get('input[name="search"]').should('be.visible')
      cy.get('input[name="search"]').type('Dress')
      cy.get('#submit_search').click({ force: true })    
        
      cy.get('.product-overlay', { timeout: 15000 }).should('be.visible')    
      cy.get('.product-overlay').first().trigger('mouseover')
      cy.get('.product-overlay a[data-product-id]').first().click({ force: true }) // Add to cart
      cy.get('#cartModal').should('be.visible')
      cy.contains('View Cart').click({ force: true })

      // Update quantity of first product
      cy.get('tr[id="product-2"] button[class="disabled"]').first().clear().type('3')
      cy.get('.btn.btn-default.check_out').click()
      cy.contains('Review Your Order').should('be.visible')
      cy.get('.btn.btn-default.check_out').click()
      cy.contains('Payment').should('be.visible')
  })
})
