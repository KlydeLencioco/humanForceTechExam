class integrationCentralPage {
    headerIntegrationCentral = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('[data-test-id="label_title_app-root"]').then(cy.wrap)
    contIntegrationApps = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('[class="explore-integrations__connector-wrapper"]').then(cy.wrap)
    btnFileImport = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('[class="explore-integrations__connector"]').then(cy.wrap)

    validateIntegrationCentralPage() {
        // cy.wait(5000)
        this.headerIntegrationCentral().should('be.visible').and('contain', 'Integration Central')
        // this.contIntegrationApps().should('be.visible')
    }

    clickFileImportButton() {
        this.btnFileImport().eq(0).click()
    }

    // Import File
    btnNextDefault = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('button[id="btnNextDefault"]').then(cy.wrap)
    uplFileZone = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('[class="custom-dropzone"]').then(cy.wrap)
    drpIdentifier = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('[id="ddl_MatchEmployeesBy"] kendo-dropdownlist').then(cy.wrap)
    btnEmployeeCode = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find("li span[class='dropdownlist-item ng-star-inserted']").then(cy.wrap)
    btnNext = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find("#btn_Next").then(cy.wrap)
    btnImportOnly = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find("#confirmPopupConfirmBtn").then(cy.wrap)
    btnGotIt = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('button[type="submit"]').then(cy.wrap)
    msgFileImportSuccess = () => cy.iframe('iframe[name="IntegrationMcIframe"]').find('div[class="fi__progress-message"]').then(cy.wrap)
    clickNextDefaultButton () {
        this.btnNextDefault().click()
    }

    dragAndDropFile () {
        this.uplFileZone().selectFile('cypress/fixtures/qa_tech_challenge_employee_import_template.csv', {action: 'drag-drop'})
    }

    clickDropDownIdentifier () {
        this.drpIdentifier().click()
    }
    
    clickEmployeeCode () {
        this.btnEmployeeCode().eq(0).click()
    }

    clickNextButton () {
        this.btnNext().eq(0).click()
    }

    clickImportOnlyButton () {
        this.btnImportOnly().eq(0).click()
    }

    validateSuccessfulFileImport () {
        this.msgFileImportSuccess().eq(0).should('be.visible').and('contain', ' 1 row(s) were imported successfully ')
    }

    clickGotItButton () {
        this.btnGotIt().click()
    }

}

export default new integrationCentralPage()
