class adminPage {
    //Area.
    gridArea = () => cy.get('div[id="GridAreas"]')
    btnAddNewRecord = () => cy.get('.k-button.k-grid-add')

    validateAdminPage() {
        this.gridArea().should('be.visible')
    }

    clickAddNewRecord() {
        this.btnAddNewRecord().click()
    }
}

export default new adminPage()