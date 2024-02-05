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

import { attach } from "@badeball/cypress-cucumber-preprocessor"

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to log to cy ui and as a task (taks is set in config.ts to log to console as well).
         * @example cy.logg('greeting')
         */
        logg(value: string): Chainable<JQuery<HTMLElement>>

        /**
         * Custom command to log to cy ui and as a task (taks is set in config.ts to log to console as well).
         * @example cy.logg('greeting')
         */
        logr(value: string): Chainable<JQuery<HTMLElement>>
      }
    }
}

/*For loggin to cypress open and console output*/
Cypress.Commands.add('logg', (text) => {
    cy.log("cy:"+text)
    cy.task('log', text)
})

/*For in steps loggin to cypress open and console output and attaching log to report*/
Cypress.Commands.add('logr', (text) => {
    cy.log("cy:"+text)
    attach(text,"text/plain")
    cy.task('log', text)
})