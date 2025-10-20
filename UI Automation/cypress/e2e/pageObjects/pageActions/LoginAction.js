import LoginPageElements from "../pageElements/LoginPageElements";

class LoginPage {

    typeUsername(username) {
        cy.get(LoginPageElements.txtEmail).type(username)
    }

    typePassword(password) {
        cy.get(LoginPageElements.txtPassword).type(password)
    }

    clickLogin() {
        cy.get(LoginPageElements.btnLogin).click()
    }

}

export default new LoginPage();