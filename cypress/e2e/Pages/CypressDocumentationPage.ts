export class CypressDocumentationPage {

    navigateToCypressSite() {
        cy.visit("/")
        cy.logr("visited base url")
    }

    selectGettingStartedTab() {
        cy.logr("going to click the link")
        cy.get(':nth-child(2) > .menu__list-item-collapsible > .menu__link').click()
    }

    selectGettingStartedTabErr() {
        cy.logr("going to click the error link")
        cy.get(':nth-child(2) > .menu__list-item-collapsible > .menu__linkk').click()
    }
    
}