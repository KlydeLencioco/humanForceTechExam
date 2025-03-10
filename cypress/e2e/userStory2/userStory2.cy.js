import testTenantLoginPage from '../../../cypress/pageObject/testTenant/loginPage.js'
import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'

describe('User Story 2', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
    })
    
    it('Employee can login with valid credentials', () => {
        testTenantLoginPage.typeUsername(Cypress.env('EMPLOYEE_USERNAME'))
        testTenantLoginPage.typePassword(Cypress.env('PASSWORD'))
        testTenantLoginPage.clickLoginButton()
        testTenantHomePage.validateEmployeeHomePage()
    })

    it('Employee cannot login with invalid credentials', () => {
        testTenantLoginPage.typeUsername(Cypress.env('EMPLOYEE_USERNAME'))
        testTenantLoginPage.typePassword('12345678')
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorInvalidLogin()
    })

    it('Employee cannot login with empty username', () => {
        testTenantLoginPage.typePassword(Cypress.env('PASSWORD'))
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorMissingEmailOrEmployeeCode()
    })

    it('Employee cannot login with empty password', () => {
        testTenantLoginPage.typeUsername(Cypress.env('EMPLOYEE_USERNAME'))
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorInvalidLogin()
    })
})