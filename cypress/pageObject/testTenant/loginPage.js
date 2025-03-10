class loginPage {
    inputUsername = () => cy.get('input[id="UserName"]')
    inputPassword = () => cy.get('input[id="Password"]')
    btnLogin = () => cy.get('button[id="btnSubmit"]')
    txtErrorInvalidLogin = () => cy.get('div[class="validation-summary-errors"] li')
    txtErrorEmailRequired = () => cy.get('span[id="UserName-error"]')

    typeUsername (username) {
        this.inputUsername().type(username)
    }

    typePassword (password) {
        this.inputPassword().type(password)
    }

    clickLoginButton () {
        this.btnLogin().click()
    }

    validateErrorInvalidLogin () {
        this.txtErrorInvalidLogin().should('be.visible').and('contain', 'The Employee code/email and/or password is invalid.')
    }

    validateErrorMissingEmailOrEmployeeCode () {
        this.txtErrorEmailRequired().should('be.visible').and('contain', 'The Employee code or email field is required.')
    }

}

export default new loginPage()
