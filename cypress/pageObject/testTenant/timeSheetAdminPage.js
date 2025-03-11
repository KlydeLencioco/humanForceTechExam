class timeSheetAdminPage {
    tblTimeSheet = () => cy.get('kendo-grid[id="TimesheetGrid_Table"]')
    btnAddNewTimeSheet = () => cy.get('[id="TimesheetHeader_Button_CreateTimesheet"]')
    btnTimeSheetFromDefault = () => cy.get('button[class="action-dropdown-button"]').eq(0)
    rdBtnMyEmployeeRecord = () => cy.get('tr[data-kendo-grid-item-index="3"] [data-kendo-grid-column-index="0"]')
    btnDone = () => cy.get('[id="EmployeeSelector_Button_SelectEmployee"]')
    txtDate = () => cy.get('input[class="mat-datepicker-input date-mat-modified__input ng-valid ng-touched ng-dirty"]')
    btnSave = () => cy.get('[id="TimesheetEditor_Button_SaveChanges"]')
    tblTimeSheetList = () => cy.get('kendo-grid-list[role="presentation"] [role="row"]')
    icoKebab = () => cy.get('hf-shared-icon[class="hf-button-icon__icon"] div[class="hf-icon hf-icon--kebab hf-icon--size-small"]').eq(0)
    btnDelete = () => cy.get('[id="TimesheetGrid_Button_DeleteUndeleteTimesheet_MGR01"]')
    contTimeSheetEditor = () => cy.get('hf-timesheet-editor div[class="hf-dialog-layout hf-dialog-layout--wide"]')
    popUpAddNewTimeSheetConfirmaton = () => cy.get('.notification-popup__content')
    btnYes = () => cy.get('button[class="hf-button hf-button--size-small hf-button--bg-yellow"]')
    contDialogWarningMessage = () => cy.get('hf-basic-dialog div[class="hf-basic-dialog__container"]')

    validateTimeSheetAdminPage() {
        this.tblTimeSheet().should('be.visible')
        this.btnAddNewTimeSheet().should('be.visible')

        // get initial number of listed timesheet to be used in validation later
        this.tblTimeSheetList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('initialListNumber')
        })
    }

    clickAddNewTimeSheetButton() {
        this.btnAddNewTimeSheet().click()
    }

    clickTimeSheetFromDefaultButton() {
        this.btnTimeSheetFromDefault().click()
    }

    clickMyEmployeeRecordRadioButton() {
        this.rdBtnMyEmployeeRecord().click()
    }

    clickDoneButton() {
        this.btnDone().click()
    }

    enterDate (date) {
        this.txtDate().clear().type(date)
    }

    clickSaveButton (){
        this.btnSave().click()
    }

    clickKebabIcon (){
        this.icoKebab().click()
    }

    clickDeleteButton () {
        this.btnDelete().click()
    }

    validateTimeSheetList () {
        this.tblTimeSheetList().then(($listNumber) => {
            
        })
    }
    
    clickYesButton () {
        this.btnYes().click()
        cy.reload() //needs to reload page after to make sure the timesheet is deleted
    }

    getInitialNumberofListedTimeSheet () {
        this.tblTimeSheetList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('initialListNumber')
        })
    }

    valdateNumberOfListedTimeSheet (method){
        this.tblTimeSheetList().then(($listNumber) => {
            let listNumber = $listNumber.length
            cy.wrap(listNumber).as('finalListNumber')
            cy.get('@initialListNumber').then((initialListNumber) => {
                if(method == 'add'){
                    expect(listNumber).to.be.greaterThan(initialListNumber)
                }else if(method == 'delete'){
                    expect(listNumber).to.be.lessThan(initialListNumber)
                }
            })
        })
    }

}

export default new timeSheetAdminPage()
