import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantErrorPage from '../../../cypress/pageObject/testTenant/errorPage.js'

describe('User Story 6', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
    })
    
    it('Employee is prevented when accessing /RosteringManager/', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.navigateToRosteringManagerPage()
        testTenantErrorPage.validateErrorPage()
    })

    it('Employee navigates back to home page', () => {
        testTenantErrorPage.validateErrorPage()
        testTenantErrorPage.clickHomeButton()
        testTenantHomePage.validateTestTenantHomePage()
    })
})
