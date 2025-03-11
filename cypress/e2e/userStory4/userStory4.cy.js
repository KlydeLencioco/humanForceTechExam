import testTenantHomePage from '../../../cypress/pageObject/testTenant/homePage.js'
import testTenantAdminPage from '../../../cypress/pageObject/testTenant/adminPage.js'

describe('User Story 4', () => {
    before(() => {
        cy.clearAllSessionStorage()
        cy.clearAllCookies()
        cy.viewport('macbook-16')
        cy.visit('https://qatestchallenge3.humanforce.io/Account/LogOn?ReturnUrl=%2f')
        cy.loginTestTenant(Cypress.env('ADMIN_USERNAME'), Cypress.env('PASSWORD'))
        testTenantHomePage.clickHomeButton() // click home button to ensure that all menu side bar are collapse at the start of the test
        
    })

    it('Admin can navigate to Admin Area ', () => {
        testTenantHomePage.validateTestTenantHomePage()
        testTenantHomePage.clickAdminButton()
        testTenantHomePage.clickOrgStructureButton()
        testTenantHomePage.clickSubItemArea()
        testTenantAdminPage.validateAdminPage()
    })

    it('Admin can add multiple new area', () => {
        testTenantAdminPage.validateAdminPage()
        testTenantAdminPage.getInitialNumberofListedArea()
        testTenantAdminPage.addNewArea('Test', 'Test', 'Test')
        testTenantAdminPage.addNewArea('Test', 'Test', 'Test')
        testTenantAdminPage.validateFinalNumberofListedArea('add')
    })

    it('Admin can edit an area', () => {
        testTenantAdminPage.validateAdminPage()        
        testTenantAdminPage.editArea('TestEdit', 'TestEdit', 'TestEdit')
        testTenantAdminPage.validateEditedArea('TestEdit', 'TestEdit')
    })

    it('Admin can delete an area', () => {
        testTenantAdminPage.validateAdminPage() 
        testTenantAdminPage.getInitialNumberofListedArea() 
        testTenantAdminPage.clickDeleteAreaButton()
        testTenantAdminPage.clickYesButton()
        testTenantAdminPage.validateFinalNumberofListedArea('delete')
    })

    it('Admin can undelete an area', () => {
        testTenantAdminPage.validateAdminPage() 
        testTenantAdminPage.getInitialNumberofListedArea() 
        testTenantAdminPage.clickUndeleteButton()
        testTenantAdminPage.clickRestoreButton()
        testTenantAdminPage.clickCloseUndeleteButton()
        testTenantAdminPage.validateFinalNumberofListedArea('restore')
    })
})