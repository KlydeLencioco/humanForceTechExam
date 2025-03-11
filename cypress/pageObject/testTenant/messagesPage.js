class messagesPage {
    contMessagingApp = () => cy.get('div[class="hf-messages-index__container"]')
    btnNewMessage = () => cy.get('button[class="hf-button hf-button--size-small hf-button--bordered-yellow"]')
    rowEmployee = () => cy.get('tr[data-kendo-grid-item-index="1"]')
    btnAddRecipient = () => cy.get('button[class="hf-button hf-button--size-small hf-button--bordered-yellow hf-button--fullwidth"]').eq(0)
    txtMessage = () => cy.get('hf-classic-input[class="hf-conversation-create__textarea-container"]')
    btnSendMessage = () => cy.get('hf-button[class="hf-conversation-create__create"] button[class="hf-button hf-button--size-middle hf-button--bg-yellow"]')
    contMessage = () => cy.get('div[class="scrollable-content"] hf-messages-sidebar-item')
    lblRecipientName = () => cy.get('span[class="hf-messages-content__user-name"]')
    lblTextMessage = () => cy.get('p[class="hf-messages-item__text hf-messages-item__text--outgoing"]')

    validateMessagesPage() {
        this.contMessagingApp().should('be.visible')
        this.btnNewMessage().should('be.visible')
    }

    clickNewMessageButton() {
        this.btnNewMessage().click()
    }

    selectRecipient() {
        this.rowEmployee().click()
    }

    clickAddRecipientButton() {
        this.btnAddRecipient().click()
    }
    enterMessage(message) {
        this.txtMessage().type(message)
    }

    clickSendMessageButton() {
        this.btnSendMessage().click()
    }

    selectMessage() {
        this.contMessage().first().click()
    }

    validateSentMessage (){
        this.lblRecipientName().should('be.visible').and('contain', 'Jean Grey')
        this.lblTextMessage().should('be.visible').and('contain', 'Test')
    }
}

export default new messagesPage()
