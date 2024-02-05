import { defineConfig } from 'cypress'
let createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
let preprocessor = require("@badeball/cypress-cucumber-preprocessor");
let createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  on("task", {
    log(message) {
      console.log(message)
      return null
    }
  });
  return config;
}

export default defineConfig({
  includeShadowDom: true,
  e2e: {
    specPattern: "Features/**/*.feature",
    baseUrl: "https://docs.cypress.io/guides/overview/why-cypress",
    setupNodeEvents
  },
  env: {
    dev: {
      url: "https://forms-module-app.calmbeach-2544a54b.northeurope.azurecontainerapps.io/",
    },
    omitFiltered: true,
    filterSpecs: true,
  }
});
