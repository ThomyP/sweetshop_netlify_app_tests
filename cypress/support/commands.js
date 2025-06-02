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

Cypress.Commands.add('login', (email, password) => {
    cy.get('#exampleInputEmail').type(email);
    cy.get('#exampleInputPassword').type(password);
    cy.contains('button', 'Login').click();
});

Cypress.Commands.add('addTwoItemsToBasket', () => {
  cy.visit('https://sweetshop.netlify.app/sweets');

  cy.get('a.addItem[data-name="Chocolate Cups"]').click();
  cy.get('a.addItem[data-name="Sherbert Straws"]').click();
});

Cypress.Commands.add('clearBasket', () => {
  cy.visit('https://sweetshop.netlify.app/basket');
  cy.contains('a', 'Empty Basket').click();
});

Cypress.Commands.add('loginAndGoToAccountPage', (email, password) => {
  cy.visit('https://sweetshop.netlify.app/login');
  cy.get('#exampleInputEmail').type(email);
  cy.get('#exampleInputPassword').type(password);
  cy.contains('button', 'Login').click();
})