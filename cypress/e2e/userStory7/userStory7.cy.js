import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantMessagePage from '../../../cypress/pageObject/testTenant/messagesPage.js'

describe('User Story 7', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
    })
    
    it('Admin can navigate to Message', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.clickViewAllMessagesLink()
        testTenantMessagePage.validateMessagesPage()
    })

    it('Admin can create a new message', () => {
        testTenantMessagePage.validateMessagesPage()
        testTenantMessagePage.clickNewMessageButton()
        testTenantMessagePage.selectRecipient()
        testTenantMessagePage.clickAddRecipientButton()
        testTenantMessagePage.enterMessage('Test')
        testTenantMessagePage.clickSendMessageButton()
    })

    it('Admin can view the sent message', () => {
        testTenantMessagePage.validateMessagesPage()
        testTenantMessagePage.selectMessage()
        testTenantMessagePage.validateSentMessage()
    })

})
