// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import testTenantLoginPage from '../pageObject/testTenant/loginPage.js'
import testTenantHomePage from '../pageObject/testTenant/homePage.js'

Cypress.Commands.add('loginTestTenant', (username,password) => {
    testTenantLoginPage.typeUsername(username)
    testTenantLoginPage.typePassword(password)
    testTenantLoginPage.clickLoginButton()
})

Cypress.Commands.add('preOpenInCurrentTab', () => {
    cy.window().then((win) => {
        cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url
            return win.open.wrappedMethod.call(win, url, '_self')
        })
    })
})
