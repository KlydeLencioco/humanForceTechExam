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
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportFilename: 'report',
    reportPageTitle: 'HumanForce Automation Test Report',
    overwrite: true,
    charts: true,
    json: true,
    html: true,
    inlineAssets: true,
    embeddedScreenshots: true,
    saveAllAttempts: false,
  },
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      // await addCucumberPreprocessorPlugin(on, config);
      // on(
      //   "file:preprocessor",
      //   createBundler({
      //     plugins: [createEsbuildPlugin(config)],
      //   })
      // );
    },
  },
});
