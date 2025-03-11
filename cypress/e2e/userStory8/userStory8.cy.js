import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantEmployeeManagementPage from '../../../cypress/pageObject/testTenant/employeeManagementPage.js'

describe('User Story 8', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('MANAGER_USERNAME'), Cypress.env('PASSWORD'))
        testTenantHomePage.clickHomeButton() // click home button to ensure that all menu side bar are collapse at the start of the test
    })
    
    it('Manager can navigate to Employee Management', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.clickManagementButton()
        testTenantHomePage.clickManageEmployeeButton()
        testTenantHomePage.clickSubItemEmployeeManagement()
        testTenantEmployeeManagementPage.validateEmployeeManagementPage()
    })

    it('Manager is not allowed to edit his/her own profile', () => {
        testTenantEmployeeManagementPage.validateEmployeeManagementPage()
        testTenantEmployeeManagementPage.clickEditButton('117')
        testTenantEmployeeManagementPage.validateWarningDialogVisible()
    })
})
