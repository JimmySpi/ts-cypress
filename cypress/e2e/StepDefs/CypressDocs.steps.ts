import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {CypressDocumentationPage} from "../Pages/CypressDocumentationPage";

const cypressDocumentationPage = new CypressDocumentationPage();

Given("I navigate to Cypress Documentation Page", () => {
    cypressDocumentationPage.navigateToCypressSite()
});

When("I select Getting Started tab", () => {
    cypressDocumentationPage.selectGettingStartedTab()
});

When("I select Getting Started err tab", () => {
    cypressDocumentationPage.selectGettingStartedTabErr()
});


