const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6m8q3t',

  e2e: {
    experimentalRunAllSpecs: true,
    env: {hideXhr: true},
    fixturesFolder: false,
    chromeWebSecurity: false,
    //defaultBrowser: 'electron',
    experimentalModifyObstructiveThirdPartyCode: true,
    injectDocumentDomain: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 50,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 600000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    execTimeout: 60000,
    taskTimeout: 60000,
    //video: true,
    // videoCompression: true,
    //videosFolder: 'cypress/videos'
  },  
});