const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6m8q3t',

  e2e: {
    env: {hideXhr: true},
    //fixturesFolder: false,
    chromeWebSecurity: false,
    defaultBrowser: 'electron',
    experimentalModifyObstructiveThirdPartyCode: true,
    injectDocumentDomain: true,
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 2,
    defaultCommandTimeout: 15000
  },  
});