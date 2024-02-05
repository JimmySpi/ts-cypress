# Introduction
This wiki includes the steps for configuring and running the automation tests of assessment and exporting an html report with the results


# STEP 1
## Clone the 'ts-cypress' project in a local folder. 
Navigate to a local folder of your preference, open a Git Bash window and run the command:
* git clone https://github.com/JimmySpi/ts-cypress.git


# STEP 2
## Install the project and its dependencies
0. Node.js must be installed at local dev machine or any machine the tests will run to
1. Open an IDE e.g. Visual Studio (should be installed)
2. In the IDE, open the ts-cypress project
3. Open a Terminal in the IDE
4. Run the command: npm i
5. Wait for the project to be installed
6. Now all below neccessary dev dependencies are installed and from now on we car implement, update and run tests
<!-- Code snippet from pacage.json. Each dependency was installed with "npm install --save-dev {dependency_name}" command, but is not neccessary if "npm i" is run-->
  <!-- "devDependencies": {
    "@badeball/cypress-cucumber-preprocessor": "^20.0.1",
    "@bahmutov/cypress-esbuild-preprocessor": "^2.2.0",
    "cross-env": "^7.0.3",
    "cypress": "^13.6.3",
    "multiple-cucumber-html-reporter": "^3.6.1",
    "typescript": "^5.3.3"
  }, -->


# STEP 3
## Run the tests in the required environment
The automation tests can be ran locally in headless mode, by executing the following commands in the Terminal of the IDE:
* Open cypress and run/dubug tests with Cypress UI in Browser: This is done by running npm script from package json "npm run <script_name>" (example): 
   npm run cy:open:assesment:dev" 

   Debug: in .vscode there is launch.json with the debugger to attach at port 9222. Note in package.json open script the following:
   cross-env CYPRESS_REMOTE_DEBUGGING_PORT=9222

* Run all tests in DEV in Chrome browser. This is done by running npm script from package json "npm run <script_name>" (example): 
   "npm run cy:run:assesment:dev"
   A batch jod will be initiated which will start executing the tests in headless mode

# STEP 4
## Export an html report with the results of the execution (2 options available)
### 1. default reporter 
By default the @badeball/cypress-cucumber-preprocessor dependency has the functionality to generate html report. 
This is configured at package.json:
<!-- "cypress-cucumber-preprocessor": {
    "stepDefinitions": "cypress/e2e/StepDefs/**/*.{js,ts}",
    "json": {
      "enabled": true,
      "output": "cypress/cucumber-json/cucumber-report.json"
    },
    "html": {
      "enabled": true,
      "output": "reports/cucumber-report.html"
    }
  }  -->
and the cucumber-report.html will be generated automatically inside reports folder.

### 2. Merge local reporter
After the execution of the tests is completed an html report with the results can be exported by executing the command:
* node ./cucumber-html-report.js

The report will be created in the path '/sources/test-automation/reports/cucumber-htmlreport.html/' (path is git ignored) with name index.html and the path of the report will be displein tial wich can be copied and opened in browser.


# STEP 5 Run specific tags
## Running specific scenarios based on their tags
At package.json where we define our script we run at step 3 there is an env parameter called tags and has th following value:
"... --env environment=dev,TAGS=\"not @ignore\"" -> this is to run all scenarios excluding the ones with ignore tag.
If we need to run specific tag let's say we want to run current sprint's scenarios tagged with "current_sprint_tag" and still exclude the ones that are not implemented or for any other reason are tagged with "@ignore" tag, then:
To run all scenarios with this specified tag we have to replace TAGS value with the following: TAGS="@current_sprint_tag and not @ignore"


# STEP 6 (for local use)
## Install VS Code plugins
Click on Extensions tab and install
    - Cucumber (Gherkin) Full Support
Add a !git-ignored! folder ".vscode" to root path and add settings.json with following config code:
<!-- {
    "cucumberautocomplete.steps": [
        "cypress/e2e/StepDefs/*.steps.ts"
    ],
    "cucumberautocomplete.strictGherkinCompletion": false
}  -->

https://www.codemotion.com/magazine/frontend/web-developer/how-to-set-up-a-cypress-typescript-project/
https://docs.cypress.io/guides/references/configuration -> ts
