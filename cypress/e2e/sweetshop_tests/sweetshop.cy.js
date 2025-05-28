
describe('Sweeshop E-comer Website', () => {
  const site = 'https://sweetshop.netlify.app/';
  const aboutPage = 'https://sweetshop.netlify.app/about';
  const loginPage ='https://sweetshop.netlify.app/login';
  const sweetsPage = 'https://sweetshop.netlify.app/sweets';
  const basketPage = 'https://sweetshop.netlify.app/basket'
  const invalidEmail = 'testgmail.com'
  const invalidPassword = 'šįė😀'


  describe('Sweet Shop - About Page Test Cases', () => {

    beforeEach(() => {
      cy.visit(aboutPage);
    });

    it(`TC 1.1.1 Check the page has title 'Sweet Shop Project'`, () => {
      cy.get('.display-3') .contains('Sweet Shop Project').should('be.visible')
    });

    it(`TC 1.1.2 Check the page has the description`, () => {
      cy.get('.my-4 .lead').each(($el) => {
      cy.wrap($el).should('be.visible')
      });
    });

    it(`TC 1.1.3 Check the page has the banner and it matches 2018`, () => {
      cy.get('.py-5 > div > p[class="m-0 text-center"]').contains('2018').should('be.visible');
    });


    describe('1.2 Navigation and Menu', () => {
      it(`TC 1.2.1 Verify clicking each navigation link redirects to the correct page from the About page`, () => {
        cy.get('.navbar-brand').click();
        cy.url().should('eq', site);
        cy.get('.advertising').should('be.visible');
        
        cy.get('a.nav-link[href="/about"]').should('be.visible').click();
        
        cy.get('a.nav-link[href="/sweets"]').should('be.visible').click();
        cy.url().should('eq', sweetsPage);
        cy.get('#navbarColor01').should('be.visible')

        cy.get('a.nav-link[href="/about"]').should('be.visible').click();
        
        cy.get('a.nav-link[href="/login"]').should('be.visible').click();
        cy.url().should('eq', loginPage);
        cy.get('.display-3').contains('Login').should('be.visible')

        cy.get('a.nav-link[href="/about"]').should('be.visible').click();
        
        cy.get('a.nav-link[href="/basket"]').should('be.visible').click();
        cy.url().should('eq', basketPage);
        cy.get('.display-3').contains('Your Basket').should('be.visible');
        
      });
    });

  });



  describe('Sweet Shop - Login Page Test Cases', () => {

    beforeEach(() => {
      cy.visit(loginPage);
    });

    it(`TC 2.1.1 Check 'Login' title and description`, () => {
      cy.get('.display-3').contains('Login').should('be.visible')
      cy.get('.lead').contains('login to your account').should('be.visible');
    });

    it(`TC 2.1.2 Check the page has 'username' and 'password' textboxes`, () => {
      cy.fixture('validUser').then((userData) => {
        cy.get('#exampleInputEmail').type(userData.email);
        cy.get('#exampleInputPassword').type(userData.password);
        cy.get('.needs-validation > button').click();
      });
    });

    it(`TC 2.2.2 Unsuccessful login scenario`, () => {
      cy.get('#exampleInputEmail').type(invalidEmail);
      cy.get('#exampleInputPassword').type(invalidPassword);
      cy.get('.needs-validation > button').click();

      cy.get('.invalid-email').contains('Please enter a valid email address.').should('be.visible');
    });


    describe('2.3 Navigation and Menu', () => {
      it(`TC 2.3.1 Verify clicking each navigation link redirects to the correct page`, () => {
        cy.get('.navbar-brand').click();
        cy.url().should('eq', site);
        cy.get('.advertising').should('be.visible');
        
        cy.get('a.nav-link[href="/login"]').should('be.visible').click();

        cy.get('a.nav-link[href="/about"]').should('be.visible').click();
        cy.url().should('eq', aboutPage);
        cy.get('.display-3').contains('Sweet Shop Project').should('be.visible');

        cy.get('a.nav-link[href="/login"]').should('be.visible').click();

        cy.get('a.nav-link[href="/sweets"]').should('be.visible').click();
        cy.url().should('eq', sweetsPage);
        cy.get('#navbarColor01').should('be.visible')

        cy.get('a.nav-link[href="/login"]').should('be.visible').click();
        
        cy.get('a.nav-link[href="/basket"]').should('be.visible').click();
        cy.url().should('eq', basketPage);
        cy.get('.display-3').contains('Your Basket').should('be.visible');
      });
    });

  });

 // ADD YOUR ACCOUNT PAGE TESTS after login

  describe('Sweet Shop - Home Page Test Cases', () => {

    beforeEach(() => {
      cy.visit(site);
    });

    it(`3.1.1 Verify the page has a header, body, and footer section`, () => {
      cy.get('header > .advertising').should('be.visible')
      cy.get('body > .container').should('be.visible');
      cy.get('.py-5 > div > p').contains('2018').should('be.visible');
    });


    it(`TC 3.1.2 Verify the page title "Welcome to the sweet shop!"`, () => {
      cy.get('.display-3').contains('Welcome to the sweet shop!').should('be.visible');
    });


    it(`TC 3.1.3 Verify the page contains the correct description text`, () => {
      cy.get('header > .lead').contains('The sweetest online shop').should('be.visible');
    });

    it(`TC 3.1.4 Verify advertising elements are visible on the page`, () => {
      cy.get('header > .advertising img').should('be.visible');
    });

    describe('Navigation and Menu', () => {
      it(`TC 3.2.1 Verify clicking each navigation link redirects to the correct page`, () => {
        cy.get('a.nav-link[href="/sweets"]').should('be.visible').click();
        cy.url().should('eq', sweetsPage);
        cy.get('#navbarColor01').should('be.visible')

        cy.get('.navbar-brand').click();
       
        cy.get('a.nav-link[href="/about"]').should('be.visible').click();
        cy.url().should('eq', aboutPage);
        cy.get('.display-3').contains('Sweet Shop Project').should('be.visible');

        cy.get('.navbar-brand').click();

        cy.get('a.nav-link[href="/login"]').should('be.visible').click();
        cy.url().should('eq', loginPage);
        cy.get('.display-3').contains('Login').should('be.visible')

        cy.get('.navbar-brand').click();
    
        cy.get('a.nav-link[href="/basket"]').should('be.visible').click();
        cy.url().should('eq', basketPage);
        cy.get('.display-3').contains('Your Basket').should('be.visible');


      });
    });

    describe('3.3 Interactive Elements', () => {
      it(`TC 3.3.1 Verify the 'Browse sweets' button is visible and clickable`, () => {
        cy.get('.sweets').should('be.visible').click();
        cy.url().should('eq', sweetsPage);
      });

      it(`TC 3.3.2 Verify the 'most popular' container has a descriptive heading or text`, () => {
        cy.contains('p', 'The sweetest online shop out there').should('be.visible')
      });

      it(`TC 3.3.3 Verify the 'most popular' container displays product items (at least one item)`, () => {
        cy.get('.cards').should('have.length.at.least', 1).and('be.visible');   
      });


    });


    describe('3.5 Cross-Page Workflow Tests', () => {
      it(`From Home page, navigate to Login page → perform successful login → confirm redirection back to Home`, () => {
        cy.get('a.nav-link[href="/login"]').should('be.visible').click();

      });

      // it(`TC 3.3.2 Verify the 'most popular' container has a descriptive heading or text`, () => {
      // });

      // it(`TC 3.3.3 Verify the 'most popular' container displays product items (at least one item)`, () => {
        
      // });


    });





  });








  

  
});
