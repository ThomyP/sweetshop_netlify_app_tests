describe('6. Sweet Shop - Basket Page Test Cases', () => {
    
    beforeEach(() => {
      cy.visit(basketPage);
    });

    describe('5.1 Page Load and UI Tests', () => {

      it('TC 6.1.1  Check page title is “Your Basket”', () => {
        cy.get('.display-3').contains('Your Basket').should('be.visible');
      });

      it('TC 6.1.2  Check page has basket description text', () => {
        cy.get('p.lead').contains('enter your payment and delivery details').should('be.visible');;
      });

      it('TC 6.1.3  Verify "Billing address" section title is visible', () => {
        cy.get('h4.mb-3').contains('Billing address').should('be.visible');
      });

      it('TC 6.1.4  Verify all billing address fields with their labels are visible', () => {
        cy.contains('label', 'First name').should('be.visible').next('input[type="text"]').should('exist');
        cy.contains('label', 'Last name').should('be.visible').next('input[type="text"]').should('exist');
        cy.contains('label', 'Email').should('be.visible').next('input[type="email"]').should('have.attr', 'placeholder', 'you@example.com');
        cy.contains('label', 'Address').should('be.visible').next('input[type="text"]').should('exist');
        cy.contains('label', 'Address 2').should('be.visible').next('input[type="text"]').should('exist');
        cy.contains('label', 'Country').should('be.visible').next('select#country').should('have.value', '');
        cy.contains('label', 'City').should('be.visible').next('select#city').should('have.value', '');
        cy.contains('label', 'Zip').should('be.visible').next('input#zip').should('exist');
      });

      it('TC 6.1.5  Verify "Payment" section title is visible', () => {
        cy.get('h4.mb-3').contains('Payment').should('be.visible');
      });

      it('TC 6.1.6  Verify Payment Form fields', () => {
        cy.contains('label', 'Name on card').should('be.visible').next('input#cc-name').should('exist');
        cy.contains('label', 'Credit card number').should('be.visible').next('input#cc-number').should('exist');
        cy.contains('label', 'Expiration').should('be.visible').next('input#cc-expiration').should('exist');
        cy.contains('label', 'CVV').should('be.visible').next('input#cc-cvv').should('exist');
      });

      it('TC 6.1.7  Verify "Your Basket" section title is visible', () => {
        cy.get('span.text-muted').contains('Your Basket').should('be.visible');
      });

      it('TC 6.1.8  Verify Product Counter', () => {
        cy.get('#basketCount').should('be.visible').and('have.text', '0');
      });

      it('TC 6.1.9  Verify Total Amount field is visible and displays correct information', () => {
        cy.get('#basketItems').contains('li', 'Total (GBP)').within(() => {
          cy.get('strong').should('have.text', '£0.00');
        });
      });

      it('TC 6.1.10  Verify "Delivery" section title is visible', () => {
        cy.get('h4.text-muted').contains('Delivery').should('be.visible');
      });

      it('TC 6.1.11  Check Promo code textbox is visible', () => {
        cy.get('input[placeholder="Promo code"]').should('be.visible').and('be.empty').and('be.enabled');
      });

      it('TC 6.1.12  Check “Redeem” button is visible', () => {
        cy.get('button.btn.btn-secondary').contains('Redeem').should('be.visible').and('be.enabled');
      });

      it('TC 6.1.13  Check “Empty basket” button is visible', () => {
        cy.contains('a', 'Empty Basket', { matchCase: false }).should('be.visible');
      });

      it('TC 6.1.14  Check “Continue to Checkout” button is visible', () => {
        cy.get('button[type="submit"]').contains('Continue to checkout').should('be.visible').and('not.be.disabled');
      });

      it('TC 6.1.15  Check the page has the banner and it matches 2018', () => {
        cy.get('footer').contains('2018').should('be.visible');
      });
 
    });