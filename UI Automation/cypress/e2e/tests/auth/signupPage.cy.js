/// <reference types="cypress" />
import SignupPage from "../../pageObjects/pageActions/SignupAction";

describe('Signup Functionality', () => {
  let signupData;

   // Load the fixture data before the tests
  before(() => {
    cy.fixture('signupUserData').then((data) => {
        signupData = data;
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

    // Positive Test Case for Registration with valid details.
  it('Should register a new user successfully', () => {
      cy.get('a[href="/login"]').click()  
    
    // Initial signup form
      SignupPage.typename(signupData.validUser.name)
      SignupPage.typeEmail(signupData.validUser.email)
      SignupPage.clicksignupButton()
      cy.contains('Enter Account Information').should('be.visible')    
    
    // Fill in the account information form   
      SignupPage.selectTitle(signupData.validUser.title)     
      cy.get('input[data-qa="name"]').should('have.value', 'Jason')
      cy.get('input[data-qa="email"]').should('have.value', 'jason11@sharklasers.com')
      SignupPage.typePassword(signupData.validUser.password)
      SignupPage.selectDay(signupData.validUser.day)
      SignupPage.selectMonth(signupData.validUser.month)
      SignupPage.selectYear(signupData.validUser.year)

    // Optional checkboxes
      SignupPage.clickNewsletterCheckbox()
      SignupPage.clickSpecialOffersCheckbox()
      cy.wait(500)    

    // Address information
      SignupPage.typeFirstname(signupData.validUser.firstname)
      SignupPage.typeLastname(signupData.validUser.lastname)
      SignupPage.typeCompany(signupData.validUser.company)
      SignupPage.typeAddress1(signupData.validUser.address1)
      SignupPage.typeAddress2(signupData.validUser.address2)
      SignupPage.selectCountry(signupData.validUser.country)
      SignupPage.typeState(signupData.validUser.state)
      SignupPage.typeCity(signupData.validUser.city)
      SignupPage.typeZipcode(signupData.validUser.zipcode)
      SignupPage.typeMobile(signupData.validUser.mobile)
      SignupPage.clickcreateaccountButton()
   
      // Wait for the success message element explicitly
      cy.get('h2:contains("Account Created!")', { timeout: 180000 }).should('be.visible')

    })
   
    // Negative Test Case for duplicate email registration.
  it('Should show an error for duplicate email registration', () => {
      cy.get('a[href="/login"]').click()   
      SignupPage.typename(signupData.validUser.name)
      SignupPage.typeEmail(signupData.duplicateEmail)
      SignupPage.clicksignupButton()
      cy.contains('Email Address already exist!').should('be.visible')      
  })
})