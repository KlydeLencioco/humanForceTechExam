const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const csv = require('@fast-csv/parse')
const { writeToPath } = require('@fast-csv/format');
require('dotenv').config()


module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: 0,
  watchForFileChanges:false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 120000,
  requestTimeout: 10000,
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

      on('task', {
        writeToCSV({name,rows})
        {
          return new Promise((resolve) => {
            let dataArray = []
            csv.parseFile('cypress/fixtures/qa_tech_challenge_employee_import_template.csv').on('data', (data) => {
              dataArray.push(data)
            }).on('end', () => {
              resolve({
                data: dataArray
              })
            })
          })
        }
      })

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
