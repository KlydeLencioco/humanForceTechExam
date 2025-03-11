import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantTimeSheetAdminPage from '../../../cypress/pageObject/testTenant/timeSheetAdminPage.js'

describe('User Story 9', () => {
    before(() => {
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('MANAGER_USERNAME'), Cypress.env('PASSWORD'))
        testTenantHomePage.clickHomeButton() // click home button to ensure that all menu side bar are collapse at the start of the test
    })
        
    it('Manager navigates to Time Sheet Admin', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.clickManagementButton()
        testTenantHomePage.clickTimeSheetsAdminButton()
        testTenantHomePage.clickSubItemTimeSheetsAdminButton()
        testTenantTimeSheetAdminPage.validateTimeSheetAdminPage()
    })
    
    it('Manager adds new timesheet', () => {
        testTenantTimeSheetAdminPage.validateTimeSheetAdminPage()
        testTenantTimeSheetAdminPage.clickAddNewTimeSheetButton()
        testTenantTimeSheetAdminPage.clickTimeSheetFromDefaultButton()
        testTenantTimeSheetAdminPage.clickMyEmployeeRecordRadioButton()
        testTenantTimeSheetAdminPage.clickDoneButton()
        testTenantTimeSheetAdminPage.clickSaveButton()
        testTenantTimeSheetAdminPage.valdateNumberOfListedTimeSheet('add')
    })

    it('Manager deletes a timesheet', () => {
        testTenantTimeSheetAdminPage.validateTimeSheetAdminPage()
        testTenantTimeSheetAdminPage.clickKebabIcon()
        testTenantTimeSheetAdminPage.clickDeleteButton()
        testTenantTimeSheetAdminPage.clickYesButton()
        testTenantTimeSheetAdminPage.valdateNumberOfListedTimeSheet('delete')
    })

})