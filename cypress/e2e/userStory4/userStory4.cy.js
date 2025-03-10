import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantAdminPage from '../../../cypress/pageObject/testTenant/adminPage.js'

describe('User Story 4', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
        
    })

    it('Admin can navigate to Admin Area ', () => {
        testTenantHomePage.validateEmployeeHomePage()
        testTenantHomePage.clickAdminButton()
        testTenantHomePage.clickOrgStructureButton()
        testTenantHomePage.clickSubItemArea()
        testTenantAdminPage.validateAdminPage()
    })
})