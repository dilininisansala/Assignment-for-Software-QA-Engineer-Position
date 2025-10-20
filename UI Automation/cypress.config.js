const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,

    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
      
      // implement node event listeners here
    },
  },
});
