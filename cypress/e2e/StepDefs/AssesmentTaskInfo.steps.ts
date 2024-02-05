import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {ApiCalls} from "../Api/ApiCalls.js"

const apiCalls = new ApiCalls();

let commandID;
let taskId;
let assesmentID;

Given("assesment task has been available to the user", () => {
    commandID = "usertaskmanager-cmd-0b41152f-e65b-47cd-864a-e805250538af";

    //1. get TaskId created by the given commandID
    apiCalls.getCommandStatusTaskId(commandID).then((tid)=>{
        cy.logg('from prev step, saved commandID is: '+commandID);
        taskId=tid
        cy.logg('task id is: '+taskId);
    });

    //2. get task whole response and retrieve assesment it from response and save it at current steps file at assesmentID property
    apiCalls.getTask('149').then((resp)=>{
        cy.logg('task id is from prev step is is: '+taskId);
        assesmentID=resp.body.executionSubject.assesmentID
        cy.logg('Assesment ID retrieved is: '+assesmentID);
    });
})

When("user lands on assesment Page", () => {
    cy.logg('assesmentID: '+assesmentID) 
    cy.visit("/assessment?id="+assesmentID);
    cy.wait(5000)
    cy.title().should('eq', 'AssesmentOverview')
});

Then("user verifies expected uuid and tox are displayed", () => {
    cy.get("div p:nth-of-type(1)").then((p) => {
        expect(p).to.have.text('Dossier UUID: fdca4e64-edc4-4832-a88c-dcfdef897482')
    })
})