class adminPage {
    //Area
    gridArea = () => cy.get('div[id="GridAreas"]')
    btnAddNewRecord = () => cy.get('.k-button.k-grid-add')
    inputName = () => cy.get('input[id="Name"]')
    inputShortName = () => cy.get('input[id="ShortName"]')
    inputExportCode = () => cy.get('input[id="ExportCode"]')
    btnSave = () => cy.get('.k-button.k-button-icontext.k-primary.k-grid-update')
    tblAreaList = () => cy.get('tr[role="row"]')
    btnEdit = () => cy.get('[class="k-button k-button-icontext k-grid-edit"][role="button"]')
    btnDelete = () => cy.get('[class="k-button k-button-icontext k-grid-Delete"][role="button"]')
    txtName = () => cy.get('td[role="gridcell"]').eq(0)
    txtExportCode = () => cy.get('td[role="gridcell"]').eq(1)
    btnYes = () => cy.get('[id="yesButton"]')
    dialogDeleteConfirmation = () => cy.get('div[data-role="draggable"] [id="deleteConfirmation"]')
    btnUndelete = () => cy.get('a[onclick="Areas.OpenUndeleteDialog()"]') 
    dialogUndelete = () => cy.get('div[id="undeleteDlg"]')
    btnRestore = () => cy.get('div[id="undeleteDlg"] td[role="gridcell"] a[role="button"]')
    btnCloseUndelete = () => cy.get('button[class="k-button close-button"]')
    btnAdminMenu = () => cy.get('button[id="MenuItem_Button_Admin"]')

    clickAdminMenu() {
        this.btnAdminMenu().scrollIntoView().click()
    }

    validateAdminPage() {
        this.gridArea().should('be.visible')

        // get initial number of listed area to be used in validation later
        this.tblAreaList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('initialListNumber')
        })
    }

    clickAddNewRecord() {
        this.btnAddNewRecord().click()
    }

    typeAreaName(name) {
        this.inputName().clear().type(name)
    }

    typeAreaShortName(shortName) {
        this.inputShortName().clear().type(shortName)
    }

    typeAreaExportCode(exportCode) {        
        this.inputExportCode().clear().type(exportCode)
    }

    clickSave() {
        this.btnSave().click()
    }

    addNewArea (name, shortName, exportCode) {
        this.clickAddNewRecord()
        this.typeAreaName(name)
        this.typeAreaShortName(shortName)
        this.typeAreaExportCode(exportCode)
        this.clickSave()
    }

    getInitialNumberofListedArea(){
        this.tblAreaList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('initialListNumber')
        })
    }

    validateFinalNumberofListedArea(method){
        if(method == 'add' || method == 'undelete'){
            if(method == 'undelete'){ //check if scenario is undelete to wait for the dialog to close
                this.dialogUndelete().should('not.be.visible')
            }
            this.tblAreaList().then(($listNumber) => {
                let listNumber = $listNumber.length
                cy.wrap(listNumber).as('finalListNumber')
                cy.get('@initialListNumber').then((initialListNumber) => {
                    expect(listNumber).to.be.greaterThan(initialListNumber)
                })
            }) 
        }else if(method == 'delete'){
            this.dialogDeleteConfirmation().should('not.be.visible') // wait for the dialog to close before checking the table
            this.tblAreaList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('finalListNumber')
            cy.get('@initialListNumber').then((initialListNumber) => {
                expect(listNumber).to.be.lessThan(initialListNumber)
            })
        })
        }
    }

    clickEditButton () {
        this.btnEdit().eq(0).click()
    }

    editArea (name, shortName, exportCode) {
        this.clickEditButton()
        this.typeAreaName(name)
        this.typeAreaShortName(shortName)
        this.typeAreaExportCode(exportCode)
        this.clickSave()
    }

    validateEditedArea (name, exportCode) {
        this.txtName().should('have.text', name)
        this.txtExportCode().should('have.text', exportCode)
    }

    clickDeleteAreaButton () {
        this.btnDelete().eq(0).click()
    }

    clickYesButton () {
        this.btnYes().click()
    }
    
    clickUndeleteButton () {
        this.btnUndelete().click()
    }

    clickRestoreButton () {
        this.btnRestore().last().click()
    }
    
    clickCloseUndeleteButton () {
        this.btnCloseUndelete().click()
    }
}

export default new adminPage()
