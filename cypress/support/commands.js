
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

Cypress.Commands.add('addProductsToBasket', (count = 1, sameProduct = false) => {
  const addedProducts = [];

  if (sameProduct) {
    cy.get('.card').first().then(($card) => {
      const productData = {
        id: $card.find('.addItem').data('id'),
        name: $card.find('.card-title').text().trim(),
        description: $card.find('.card-text').text().trim(),
        price: $card.find('.text-muted').text().trim(),
        image: $card.find('img').attr('src'),
        quantity: count
      };

      Cypress._.times(count, () => {
        cy.wrap($card).find('.addItem').click();
      });

      addedProducts.push(productData);
    }).then(() => {
      Cypress.env('addedProducts', addedProducts);
      return cy.wrap(addedProducts);
    });

  } else {
    cy.get('.card').each(($card, index) => {
      if (index < count) {
        cy.wrap($card).within(() => {
          const productData = {
            id: $card.find('.addItem').data('id'),
            name: $card.find('.card-title').text().trim(),
            description: $card.find('.card-text').text().trim(),
            price: $card.find('.text-muted').text().trim(),
            image: $card.find('img').attr('src'),
            quantity: 1
          };

          cy.get('.addItem').click();
          addedProducts.push(productData);
        });
      }
    }).then(() => {
      Cypress.env('addedProducts', addedProducts);
      return cy.wrap(addedProducts);
    });
  }
});

Cypress.Commands.add('clearBasket', () => {
  cy.visit('https://sweetshop.netlify.app/basket');
  cy.contains('a', 'Empty Basket').click();
});

Cypress.Commands.add('fillBillingAddress', () => {
  cy.get('input#name').eq(0).type('John');
  cy.get('input#name').eq(1).type('Doe');          
  cy.get('#email').type('john.doe@example.com');
  cy.get('#address').type('123 Main Street');
  cy.get('#address2').type('Apt 4B');
  cy.get('#country').select('United Kingdom');
  cy.get('#city').select('Cardiff');
  cy.get('#zip').type('CF10 1AA');
});

Cypress.Commands.add('fillPaymentDetails', () => {
  cy.get('#cc-name').type('John Doe');
  cy.get('#cc-number').type('4111 1111 1111 1111');
  cy.get('#cc-expiration').type('12/26');
  cy.get('#cc-cvv').type('123');
});

Cypress.Commands.add('triggerFormValidation', () => {
  cy.get('button[type="submit"]').contains('Continue to checkout').click();
});