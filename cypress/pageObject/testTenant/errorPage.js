class errorPage {
    errorHeader = () => cy.get('[class="header-center"]')
    errorMsg = () => cy.get('div[style="text-align:center; margin-top:10px; padding:20px;"] p')
    btnHome = () => cy.get('[class="plainButton"]')

    validateErrorPage() {
        this.errorHeader().should('be.visible').and('contain', 'Sorry, that is not currently allowed...')
        this.errorMsg().should('be.visible').and('contain', 'You do not have permission to perform this action. Please inform your manager.')
    }

    clickHomeButton() {
        this.btnHome().click()
    }
}

export default new errorPage()
