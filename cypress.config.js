const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');
const { defineConfig } = require("cypress")
const fs = require("fs-extra")
const path = require("path")
const envConfig = (process.env.NODE_ENV === undefined) ? 'cypress/e2e/hmlS/specs/*.spec.cy.js' : `cypress/e2e/${process.env.NODE_ENV}/specs/*.spec.cy.js`

//environment configuration
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('.', 'cypress/config/environment', `${file}.json`)
  return fs.readJSON(pathToConfigFile)
}

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  pageLoadTimeout: 120000,
  e2e: {
    specPattern: envConfig,
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      
      const file = config.env.configFile || "prod"
      return getConfigurationByFile(file)
    }
  },
});



