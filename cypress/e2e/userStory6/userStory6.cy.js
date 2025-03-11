import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantErrorPage from '../../../cypress/pageObject/testTenant/errorPage.js'

describe('User Story 6', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
    })
    
    it('Employee is not allowed to Access Rostering Manager', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.navigateToRosteringManagerPage()
        testTenantErrorPage.validateErrorPage()
    })

    it('Employee is navigated back to Home Page when clicking home button', () => {
        testTenantErrorPage.validateErrorPage()
        testTenantErrorPage.clickHomeButton()
        testTenantHomePage.validateTestTenantHomePage()
    })
})
