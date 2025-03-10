class employeeManagementPage {
    headerEmployeeManagement = () => cy.get('[class="header header-underlined"]')
    tableEmployeeList = () => cy.get('table[class="employee-list regular-table"]')
    btnEmployeeEdit = (employeeIdNo) => cy.get(`tr[data-employeeid="${employeeIdNo}"] button[data-employeeid="${employeeIdNo}"]`)

    clickEditButton(employeeIdNo) {
        cy.preOpenInCurrentTab()
        this.btnEmployeeEdit(employeeIdNo).click()
    }

    validateEmployeeManagementPage() {
        this.headerEmployeeManagement().should('be.visible')
        this.tableEmployeeList().should('be.visible')
    }

    //Edit Employee
    contWarningDialog = () => cy.get('div[class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog-buttons ui-draggable ui-resizable"]')
    btnOkDialog = () => cy.get('div.ui-dialog:nth-child(21) > div:nth-child(3) > div:nth-child(1) > button:nth-child(1)')

    validateWarningDialogVisible() {
        this.contWarningDialog().should('be.visible')
    }
}

export default new employeeManagementPage()
