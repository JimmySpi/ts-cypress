export class CypressDocumentationPage {

    navigateToCypressSite() {
        cy.visit("/")
        cy.logr("visited base url")
    }

    selectGettingStartedTab() {
        cy.logr("going to click the link")
        cy.get(':nth-child(2) > :nth-child(1) > .transition-all > .overflow-hidden > :nth-child(2) > .group').click()
    }

    selectGettingStartedTabErr() {
        cy.logr("going to click the error link")
        cy.get(':nth-child(2) > :nth-child(1) > .transition-all > .overflow-hidden > :nth-child(2) > .groupp').click()
    }
    
}