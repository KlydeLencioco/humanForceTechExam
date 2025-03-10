class homePage {
    headerHome = () => cy.get('div[class="home-header__wrapper"]')
    contEmployeeOverview = () => cy.get('employee-overview')
    btnMenuManagement = () => cy.get('button[id="MenuItem_Button_Management"]')
    btnManageEmployee = () => cy.get('ul[class="hf-menu__list hf-menu__list--side"] button[id="MenuItem_Button_Employee"]')
    btnSubItemEmployeeManagement = () => cy.get('a[id="MenuSubItem_Button_Employee Management"]')
    btnMenuAdmin = () => cy.get('button[id="MenuItem_Button_Admin"]')
    btnOrgStructure = () => cy.get('button[id="MenuItem_Button_Org Structure"]')
    btnSubItemArea = () => cy.get('#MenuSubItem_Button_Areas')

    validateEmployeeHomePage() {
        this.contEmployeeOverview().should('be.visible')
        this.headerHome().should('be.visible')
    }

    navigateToRosteringManagerPage() {
        cy.visit('https://qatestchallenge3.humanforce.io/RosteringManager')
    }

    clickManagementButton() {
        this.btnMenuManagement().click()
    }

    clickManageEmployeeButton() {
        this.btnManageEmployee().click()
    }

    clickSubItemEmployeeManagement() {
        this.btnSubItemEmployeeManagement().click()
    }

    clickAdminButton() {
        this.btnMenuAdmin().click()
    }

    clickOrgStructureButton() {
        this.btnOrgStructure().click()
    }

    clickSubItemArea() {
        this.btnSubItemArea().click()
    }

}

export default new homePage()
