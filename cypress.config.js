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
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 600000,
    requestTimeout: 6000,
    responseTimeout: 6000,
    execTimeout: 6000,
    taskTimeout: 6000,
    //video: true,
    // videoCompression: true,
    //videosFolder: 'cypress/videos'
  },  
});