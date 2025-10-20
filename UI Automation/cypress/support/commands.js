// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Automatically block all third-party requests
Cypress.Commands.add('blockAllThirdParty', () => {
  const baseUrl = Cypress.config('baseUrl');

  cy.intercept({ url: '**', middleware: true }, (req) => {
    // If the request is not for the base URL, consider it third-party
    if (!req.url.startsWith(baseUrl)) {
      console.log('Blocked third-party request:', req.url);
      req.reply({ statusCode: 204, body: '' }); // Block it
    } else {
      req.continue(); // Allow first-party requests
    }
  });
});
