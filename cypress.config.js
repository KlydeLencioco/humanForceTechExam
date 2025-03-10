const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
require('dotenv').config()

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: 2,
  watchForFileChanges:false,
  pageLoadTimeout: 120000,
  env: {
    ...process.env
  },
  include :[
    "cypress/**/*.js"
  ],
  e2e: {
    testIsolation: false,
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
    },
  },
});
