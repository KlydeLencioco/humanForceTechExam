import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantIntegrationsCentralPage from '../../pageObject/testTenant/integrationsCentralPage.js'
import testTenantEmployeeManagementPage from '../../pageObject/testTenant/employeeManagementPage.js'

describe('User Story 6', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
        testTenantHomePage.clickHomeButton() // click home button to ensure that all menu side bar are collapse at the start of the test
    })
    
    it('Admin navigates to Integrations Central Page', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.navigateToIntegrationsCentralPage()
        testTenantIntegrationsCentralPage.validateIntegrationCentralPage()
    })

    it('Admin imports a csv file', () => {
        testTenantIntegrationsCentralPage.validateIntegrationCentralPage()
        testTenantIntegrationsCentralPage.clickFileImportButton()
        testTenantIntegrationsCentralPage.dragAndDropFile()
        testTenantIntegrationsCentralPage.clickNextDefaultButton()
        cy.wait(10000)
        testTenantIntegrationsCentralPage.clickDropDownIdentifier()
        testTenantIntegrationsCentralPage.clickEmployeeCode()
        testTenantIntegrationsCentralPage.clickNextButton()
        testTenantIntegrationsCentralPage.clickImportOnlyButton()
        cy.wait(10000)
        testTenantIntegrationsCentralPage.validateSuccessfulFileImport()
        testTenantIntegrationsCentralPage.clickGotItButton()
    })

    it('Admin navigates to Rostering Manager Page to validate the added employee', () => {
        testTenantIntegrationsCentralPage.validateIntegrationCentralPage()
        testTenantHomePage.clickManagementButton()
        testTenantHomePage.clickManageEmployeeButton()
        testTenantHomePage.clickSubItemEmployeeManagement()
        testTenantEmployeeManagementPage.validateEmployeeManagementPage()
        testTenantEmployeeManagementPage.selectDropDownVenue()
    })
})
