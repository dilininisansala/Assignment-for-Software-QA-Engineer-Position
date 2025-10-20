import SignupPageElements from '../pageElements/SignupPageElements';

class SignupPage{
    typename(name) {
        cy.get(SignupPageElements.nameInput).type(name)
    }

    typeEmail(email) {
        cy.get(SignupPageElements.emailInput).type(email)
    }

    clicksignupButton() {
        cy.get(SignupPageElements.signupBtn).click()
    }

    selectTitle(title) {
        if (title === 'Mr.') {
            cy.get(SignupPageElements.selectTitle).click({ force: true })
        } else if (title === 'Mrs.') {
            cy.get('#id_gender2').click({ force: true })
        }
    }

    typePassword(password) {
        cy.get(SignupPageElements.passwordInput).type(password)
    }

    selectDay(day) {
        cy.get(SignupPageElements.selectDay).select(day)
    }

    selectMonth(month) {
        cy.get(SignupPageElements.selectMonth).select(month)
    }

    selectYear(year) {
        cy.get(SignupPageElements.selectYear).select(year)
    }

    clickNewsletterCheckbox() {
        cy.get(SignupPageElements.selectNewsletter).click({ force: true });
    }

    clickSpecialOffersCheckbox() {
        cy.get(SignupPageElements.selectOffer).click({ force: true });
    }

    typeFirstname(firstname) {
        cy.get(SignupPageElements.firstnameInput).type(firstname)
    }

    typeLastname(lastname) {
        cy.get(SignupPageElements.lastnameInput).type(lastname)
    }

    typeCompany(company) {
        cy.get(SignupPageElements.companyInput).type(company)
    }
 
    typeAddress1(address1) {
        cy.get(SignupPageElements.address1Input).type(address1)
    }

    typeAddress2(address2) {
        cy.get(SignupPageElements.address2Input).type(address2)
    }

    selectCountry(country) {
        cy.get(SignupPageElements.selectCountry).select(country)
    }

    typeState(state) {
        cy.get(SignupPageElements.stateInput).type(state)
    }

    typeCity(city) {
        cy.get(SignupPageElements.cityInput).type(city)
    }

    typeZipcode(zipcode) {
        cy.get(SignupPageElements.zipcodeInput).type(zipcode)
    }

    typeMobile(mobile) {
        cy.get(SignupPageElements.mobileInput).type(mobile)
    }

    clickcreateaccountButton() {
        cy.get(SignupPageElements.createaccountBtn).click()
    }
}

export default new SignupPage();
