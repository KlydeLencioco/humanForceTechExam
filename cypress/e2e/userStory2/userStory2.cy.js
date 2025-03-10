import testTenantLoginPage from '../../../cypress/pageObject/testTenant/loginPage.js'
import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'

describe('User Story 2', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
    })
    
    it('Employee can login with valid credentials', () => {
        testTenantLoginPage.typeUsername('EMP01')
        testTenantLoginPage.typePassword('Q@T3chCh4lleng3#')
        testTenantLoginPage.clickLoginButton()
        testTenantHomePage.validateEmployeeHomePage()
    })

    it('Employee cannot login with invalid credentials', () => {
        testTenantLoginPage.typeUsername('EMP01')
        testTenantLoginPage.typePassword('12345678')
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorInvalidLogin()
    })

    it('Employee cannot login with empty username', () => {
        testTenantLoginPage.typePassword('Q@T3chCh4lleng3#')
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorMissingEmailOrEmployeeCode()
    })

    it('Employee cannot login with empty password', () => {
        testTenantLoginPage.typeUsername('EMP01')
        testTenantLoginPage.clickLoginButton()
        testTenantLoginPage.validateErrorInvalidLogin()
    })
})