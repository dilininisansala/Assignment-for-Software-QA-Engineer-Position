/// <reference types="cypress" />

describe('Multiple product checkout', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.blockAllThirdParty();
      cy.visit('/login', {
          failOnStatusCode: false,
          timeout: 180000               
    })
  })
  
  it('Should checkout multiple products successfully', () => {
      // Login
      cy.get('a[href="/login"]').click()
      cy.get('input[data-qa="login-email"]').type('jason4@sharklasers.com')
      cy.get('input[placeholder="Password"]').type('Luc123&#')
      cy.get('button[data-qa="login-button"]').click()
        
      // cy.get('a[href="/products"]').click({ force: true })
      // Go to Products page
      cy.visit('/products', { timeout: 0, failOnStatusCode: false })
      cy.get('input[name="search"]').should('be.visible')
      cy.get('input[name="search"]').type('Dress')
      cy.get('#submit_search').click({ force: true })            
      cy.get('.product-overlay', { timeout: 15000 }).should('be.visible')    
    
      // Add first 2 products to cart
      cy.get('.product-overlay').each(($el, index) => {
         if (index < 3) { // limit to 3 products
          cy.wrap($el).trigger('mouseover');
          cy.wrap($el).find('a[data-product-id]').click({ force: true });

          // Confirm modal & continue shopping
          cy.get('#cartModal').should('be.visible');
          cy.get('.btn.btn-success.close-modal.btn-block').click({ force: true });
        }
      })
      
      // View cart to verify products added
      cy.get('a[href="/view_cart"]').click({ force: true })
      cy.get('.btn.btn-default.check_out').click()
      cy.contains('Review Your Order').should('be.visible')
      cy.get('.btn.btn-default.check_out').click()
      cy.contains('Payment').should('be.visible')
  })
})
