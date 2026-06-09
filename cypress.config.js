const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {

 // Configurações de URL e padrões de teste
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",


    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },

    video: true,

    screenshotOnRunFailure: true,

    retries: {
      runMode: 2,
      openMode: 0
    }
    
  },
});
