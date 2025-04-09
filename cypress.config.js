const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6m8q3t',

  e2e: {
    experimentalRunAllSpecs: true,
    env: {hideXhr: true},
    fixturesFolder: false,
    chromeWebSecurity: false,
    defaultBrowser: 'edge',
    experimentalModifyObstructiveThirdPartyCode: true,
    injectDocumentDomain: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 50,
    defaultCommandTimeout: 9000,
    pageLoadTimeout: 600000,
    requestTimeout: 9000,
    responseTimeout: 9000,
    execTimeout: 9000,
    taskTimeout: 9000,
    //video: true,
    // videoCompression: true,
    //videosFolder: 'cypress/videos'
  },  
});