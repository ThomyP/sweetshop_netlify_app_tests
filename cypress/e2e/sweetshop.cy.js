
describe('Sweeshop E-comer Website', () => {
  const site = 'https://sweetshop.netlify.app/';
  const aboutPage = 'https://sweetshop.netlify.app/about';
  const loginPage ='https://sweetshop.netlify.app/login';
  const sweetsPage = 'https://sweetshop.netlify.app/sweets';
  const basketPage = 'https://sweetshop.netlify.app/basket'
  const invalidEmailFormat = ['user@', 'user.com', 'user@.com'];
  const validEmail = 'testuser1@cypress.io'
  const defaultEmail ='test@user.com'
  const testPassword = 'secret123';
  const toShortPassword = '1234567';
  const expectedLinks = ['Sweets', 'About', 'Login', 'Basket'];
  const xLogin = 'https://x.com/i/flow/login';
  const fbLogin = 'https://www.facebook.com/login';
  const liLogin = 'https://www.linkedin.com/login';
  const expectedOrderNumbers = ['#3', '#2', '#1'];

  const links = [
      {
        selector: '.navbar-brand',
        expectedUrl: site,
        verify: () => cy.get('.advertising').should('be.visible'),
      },
      {
        selector: 'a.nav-link[href="/sweets"]',
        expectedUrl: sweetsPage,
        verify: () => cy.get('.display-3').contains('Browse sweets').should('be.visible'),
      },
      {
        selector: 'a.nav-link[href="/about"]',
        expectedUrl: aboutPage,
        verify: () => cy.get('.display-3').contains('Sweet Shop Project').should('be.visible'),
      },
      {
        selector: 'a.nav-link[href="/login"]',
        expectedUrl: loginPage,
        verify: () => cy.get('.display-3').contains('Login').should('be.visible'),
      },
      {
        selector: 'a.nav-link[href="/basket"]',
        expectedUrl: basketPage,
        verify: () => cy.get('.display-3').contains('Your Basket').should('be.visible'),
      },
    
  ];

  const expectedOrders = [
    { orderNr: '#1', description: 'Swansea Mixture x 1', total: '1.50' },
    { orderNr: '#2', description: 'Sherbert Straws x 1', total: '0.75' },
    { orderNr: '#3', description: 'Chocolate Cups x 5', total: '8.00' }
  ];

  const expectedProducts = [
    {
      name: 'Bon Bons',
      description: 'Pink Strawberry Bonbons - sugar dusted, strawberry flavoured chewy sweets.',
      price: '£1.00',
    },
    {
      name: 'Chocolate Cups',
      description: 'Candy Chocolate Cups.',
      price: '£1.00',
    },
    {
      name: 'Sherbert Straws',
      description: 'Rainbow Dust Straws - Choose your colour.',
      price: '£0.75',
    },
    {
      name: 'Sherbert Discs',
      description: "UFO's Sherbert Filled Flying Saucers.",
      price: '£0.95',
    },
  ];

  const products = [
  {
    id: 1,
    name: "Chocolate Cups",
    description: "Candy Chocolate Cups.",
    price: 1.00,
    image: "img/cups.jpg",
    priceFormatted: "£1.00"
  },
  {
    id: 2,
    name: "Sherbert Straws",
    description: "Rainbow Dust Straws - Choose your colour.",
    price: 0.75,
    image: "img/straw.JPG",
    priceFormatted: "£0.75"
  },
  {
    id: 3,
    name: "Sherbert Discs",
    description: "UFO's Sherbert Filled Flying Saucers.",
    price: 0.95,
    image: "img/discs.jpeg",
    priceFormatted: "£0.95"
  },
  {
    id: 4,
    name: "Bon Bons",
    description: "Pink Strawberry Bonbons - sugar dusted, strawberry flavoured chewy sweets.",
    price: 1.00,
    image: "img/bonbon.jpg",
    priceFormatted: "£1.00"
  },
  {
    id: 5,
    name: "Jellies",
    description: "Fruit flavoured chewy sea monster jellies.",
    price: 0.75,
    image: "img/jellies.jpg",
    priceFormatted: "£0.75"
  },
  {
    id: 6,
    name: "Fruit Salads",
    description: "Fruit salad chews.",
    price: 0.50,
    image: "img/salads.jpg",
    priceFormatted: "£0.50"
  },
  {
    id: 7,
    name: "Bubble Gums",
    description: "Fruit flavoured bubble gums and tattoo.",
    price: 0.25,
    image: "img/tat.jpg",
    priceFormatted: "£0.25"
  },
  {
    id: 8,
    name: "Wham Bars",
    description: "Wham original raspberry chew bar.",
    price: 0.15,
    image: "img/whan.jpg",
    priceFormatted: "£0.15"
  },
  {
    id: 9,
    name: "Whistles",
    description: "Candy whistles.",
    price: 0.25,
    image: "img/whistles.jpg",
    priceFormatted: "£0.25"
  },
  {
    id: 10,
    name: "Sherbert Fountains",
    description: "Sherbert fountain with a liquorice stick for dipping.",
    price: 0.35,
    image: "img/sherbert.jpg",
    priceFormatted: "£0.35"
  },
  {
    id: 11,
    name: "Swansea Mixture",
    description: "Originally made in Swansea this classic mix is popular across South Wales.",
    price: 1.50,
    image: "img/mix.jpg",
    priceFormatted: "£1.50"
  },
  {
    id: 12,
    name: "Chocolate Beans",
    description: "Chocolate beans.",
    price: 0.80,
    image: "img/beans.jpg",
    priceFormatted: "£0.80"
  },
  {
    id: 13,
    name: "Nerds",
    description: "American candy sweets.",
    price: 0.60,
    image: "img/nerds.jpg",
    priceFormatted: "£0.60"
  },
  {
    id: 14,
    name: "Drumsticks",
    description: "Raspberry and milk flavour chews.",
    price: 0.20,
    image: "img/drum.jpg",
    priceFormatted: "£0.20"
  },
  {
    id: 15,
    name: "Bubbly",
    description: "Fruit flavoured bubble gum.",
    price: 0.10,
    image: "img/bubbly.jpg",
    priceFormatted: "£0.10"
  },
  {
    id: 16,
    name: "Dolly Mixture",
    description: "Dolly mixture.",
    price: 0.90,
    image: "img/dolly.jpg",
    priceFormatted: "£0.90"
  }
  ];

  const validPromoCode = 'SWEET10';
  const invalidPromoCodeInputs = ['🎁🔥','@#!$%^','SAVE@10', '     ',];
  const invalidFirstnameInputs = ['😀😃😄','@#!$','12345','John'];
  const invalidEmailInputs = ['john.doe', 'john@', '@gmail.com', 'john@@gmail.com', 'john.doe@.com', 'john.doe@com', 'john.doe@ gmail.com', '😊@gmail.com'];
  const invalidAddressInputs = ['🏡 123 St', '123 St 🚀', '!@#$%^'];
  const invalidZipInputs = ['ABC123', '123AB', '😊123', '!@#$', '12 345'];
  const invalidCardNameInputs = ['Jane123', '👑Jane', 'Jane$', '123456'];
  const invalidCardNumberInputs = ['4111-1111-1111-1111', 'abcd efgh', '😊😊😊😊', '4111 1111 1111 1111', '4111!1111!1111!1111'];
  const invalidExpirationInputs = ['13/25', '00/23', '01-25', '1/2025', 'Jan 2025', '😊'];
  const invalidCvvInputs = ['12', '12345', 'abc', '!@#', '😊'];



  describe('1. Sweet Shop - About Page Test Cases', () => {
      
    beforeEach(() => {
      cy.visit(aboutPage);
    });

    describe('1.1 Page Load and UI Tests', () => {
      
      it(`TC 1.1.1 Check the page has title 'Sweet Shop Project'`, () => {
        cy.get('.display-3').contains('Sweet Shop Project').should('be.visible')
      });

      it(`TC 1.1.2 Check the page has the description`, () => {
        cy.get('.my-4 .lead').each(($el) => {
        cy.wrap($el).should('be.visible').and('contain', 'Chrome DevTools')
        });
      });

      it(`TC 1.1.3 Check the page has the banner and it matches 2018`, () => {
        cy.get('.container > p').contains('2018').should('be.visible');
      });

      it('TC 1.1.4 Verify navbar elements are visible on the About page', () => {
        cy.get('nav.navbar').should('be.visible');

        cy.get('.navbar-brand')
          .should('be.visible')
          .and('contain.text', 'Sweet Shop')
        
        cy.contains('.nav-link', 'Sweets').should('be.visible');
        cy.contains('.nav-link', 'About').should('be.visible');
        cy.contains('.nav-link', 'Login').should('be.visible');

        cy.contains('.nav-link', 'Basket').within(() => {
          cy.get('.badge')
            .should('be.visible')
            .invoke('text')
            .should('match', /^\d+$/);
        });
        
      });

    });

    describe('1.2 Navigation and Menu', () => {
      it(`TC 2.2.1 Verify clicking each navigation link redirects to the correct page`, () => {
        links.forEach(({ selector, expectedUrl, verify }) => {
          cy.visit(loginPage);
          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });
    });

  });

  describe('2. Sweet Shop - Login Page Test Cases', () => {

    beforeEach(() => {
      cy.visit(loginPage);
    });

    describe('2.1 Page Load and UI Tests', () => {

      it(`TC 2.1.1 Check 'Login' page has title 'Login'`, () => {
        cy.get('.display-3').contains('Login').should('be.visible')
      });

      it(`TC 2.1.2 Check 'Login' page has the description`, () => {
        cy.get('.lead').contains('login to your account').should('be.visible');
      });

      it(`TC 2.1.3 Verify hover effect tooltip on "email address" and "password" in description`, () => {
        cy.contains('abbr', 'email address')
        .should('have.attr', 'title', 'test@user.com');

        cy.contains('abbr', 'password')
        .should('have.attr', 'title', 'qwerty');
      });

      it(`TC 2.1.4 Confirm the presence of input fields: Email address textbox`, () => {
        cy.get('#exampleInputEmail').should('be.visible').and('have.attr', 'placeholder', 'you@example.com')
        cy.get('#exampleInputPassword').should('be.visible').and('have.attr', 'placeholder', 'Password')
      });

      it(`TC 2.1.5 Ensure the Login button is visible and correctly labeled`, () => {
        cy.contains('.needs-validation > button', 'Login').click();
      });

     it('TC 2.1.6 - Verify navbar elements are visible on the About page', () => {
        cy.get('nav.navbar').should('be.visible').within(() => {
          cy.get('.navbar-brand')
            .should('be.visible')
            .and('contain', 'Sweet Shop')
            .find('img')
            .should('be.visible')
            .and('have.attr', 'src', 'favicon.png');

          
          cy.get('.navbar-nav .nav-link').each(($link, index) => {
            cy.wrap($link)
              .should('be.visible')
              .and('contain', expectedLinks[index]);
          });

        cy.contains('.nav-link', 'Basket')
          .find('.badge')
          .should('be.visible')
          .invoke('text')
          .should('match', /^\d+$/);
        });
    
      });

      it(`TC 2.1.7 Verify all social media icons are visible`, () => {
        cy.get('.social')
        .should('be.visible')
        .within(() => {
          cy.get('a').first()
            .find('img[src="img/twitter.png"]')
            .should('be.visible')
            .and('have.attr', 'alt', 'twitter');

          cy.get('a').eq(1)
            .find('img[src="img/facebook.png"]')
            .should('be.visible')
            .and('have.attr', 'alt', 'facebook');

          cy.get('a').last()
            .find('img[src="img/linkedin.png"]')
            .should('be.visible')
            .and('have.attr', 'alt', 'linkedin');
        });
      });

      it(`TC 2.1.8 Check the page has the banner and it matches 2018`, () => {
        cy.get('.container > p').contains('2018').should('be.visible');
      });

    });

    describe('2.2 Login Functionality Tests', () => {

      it(`TC 2.2.1 Password masking (should show •••• instead of plaintext).`, () => {
        cy.get('#exampleInputPassword')
          .should('have.attr', 'type', 'password') 
          .type(testPassword)
          .should('have.value', testPassword);
      });

      it(`TC 2.2.2  Successful login with valid email credentials`, () => {
        cy.fixture('validUser').then((user) =>{
          cy.get('#exampleInputEmail').type(user.email);
          cy.get('#exampleInputPassword').type(user.password);
        });

        cy.contains('button', 'Login').click();

        cy.get('.display-3').should('be.visible').and('contain','Your Account');
        
      });

      it(`TC 2.2.3 Unsuccessful login with invalid email format (user@)`, () => {
        cy.get('#exampleInputEmail').type(invalidEmailFormat[0]);
        cy.get('#exampleInputPassword').type(testPassword);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid email address');
      });

      it(`TC 2.2.4 Unsuccessful login with invalid email format (user.com) `, () => {
        cy.get('#exampleInputEmail').type(invalidEmailFormat[1]);
        cy.get('#exampleInputPassword').type(testPassword);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid email address');
      });

      it(`TC 2.2.5 Unsuccessful login with invalid email format (user@.com) `, () => {
        cy.get('#exampleInputEmail').type(invalidEmailFormat[2]);
        cy.get('#exampleInputPassword').type(testPassword);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid email address');
      });

      it(`TC 2.2.6 Unsuccessful login with empty email field`, () => {
        cy.get('#exampleInputPassword').type(testPassword);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid email address');
      });

      it(`TC 2.2.7 Unsuccessful login scenario empty password`, () => {
        cy.get('#exampleInputEmail').type(validEmail);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-password').should('be.visible').and('contain', 'Please enter a valid password');
      });

      it(`TC 2.2.8 Unsuccessful login scenario empty email and password fields`, () => {
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid email address');
        cy.get('.invalid-password').should('be.visible').and('contain', 'Please enter a valid password');
      });

      it(`TC 2.2.9 Unsuccessful login scenario password to short (7 symobls)`, () => {
        cy.get('#exampleInputEmail').type(validEmail);
        cy.get('#exampleInputPassword').type(toShortPassword);
        cy.contains('button', 'Login').click();
        cy.get('.invalid-email').should('be.visible').and('contain', 'Please enter a valid password');
      });

      it(`TC 2.2.10 Confirm 'x' icon redirects to X.com/login`, () => {
        cy.get('.social')
        .within(() => {
          cy.get('a').eq(0)
            .should('have.attr', 'alt', 'twitter').click()
        });
        cy.url().eq(xLogin)
      });

      it(`TC 2.2.11 Confirm 'fb' icon redirects to facebook.com/login`, () => {
        cy.get('.social')
        .within(() => {
          cy.get('a').eq(1)
            .should('have.attr', 'alt', 'facebook').click()
        });
        cy.url().eq(fbLogin)
      });

      it(`TC 2.2.12 Confirm 'Li' icon redirects to Linkedin.com/login`, () => {
        cy.get('.social')
        .within(() => {
          cy.get('a').eq(2)
            .should('have.attr', 'alt', 'linkedin').click()
        });
        cy.url().eq(liLogin)
      });

    
    });

    describe('2.3 Navigation and Menu', () => {
      it(`TC 2.3.1 Verify clicking each navigation link redirects to the correct page`, () => {
        links.forEach(({ selector, expectedUrl, verify }) => {
          cy.visit(loginPage);
          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });
    });

  });

  describe('3. Sweet Shop - Your Account Page Test Cases', () => {
    
    beforeEach(() => {
      cy.visit(loginPage);
      cy.login(validEmail, testPassword );
    });

    describe('3.1 Page Load and UI Tests', () => {
      
      it('TC 3.1.1 - Verify navbar elements are visible on the About page', () => {
        cy.get('nav.navbar').should('be.visible');

        cy.get('.navbar-brand')
          .should('be.visible')
          .and('contain.text', 'Sweet Shop')
          .find('img')
          .should('be.visible')
          .and('have.attr', 'src', 'favicon.png');

        cy.contains('.nav-link', 'Sweets').should('be.visible');
        cy.contains('.nav-link', 'About').should('be.visible');
        cy.contains('.nav-link', 'Login').should('be.visible');

        cy.contains('.nav-link', 'Basket').within(() => {
          cy.get('.badge')
            .should('be.visible')
            .invoke('text')
            .should('match', /^\d+$/);
        });
      });

      it('TC 3.1.2 - Page title is "Your Account"', () => {
        cy.get('.display-3').should('be.visible').and('contain.text', 'Your Account');
      });

      it('TC 3.1.3 - Welcome message includes user email', () => {
        cy.get('.lead').should('be.visible')
        .and('contain.text', 'Welcome back')
        .and('contain.text', defaultEmail);
      })

      it('TC 3.1.4 - "Previous Orders Table" title visible', () => {
        cy.contains('.mb-3', 'Previous Orders').should('be.visible');
      });

      it('TC 3.1.5 - Confirm table columns are present', () => {
        cy.get('#transactions thead tr').within(() => {
          cy.contains('Order Number').should('be.visible');
          cy.contains('Date Ordered').should('be.visible');
          cy.contains('Order Description').should('be.visible');
          cy.contains('Order Total').should('be.visible');
        });
      });

      it('TC 3.1.6 - Validate specific order data', () => {
          expectedOrders.forEach((order, index) => {
            cy.get('#transactions tbody tr').eq(index).within(() => {
              cy.contains(order.description).should('be.visible');
              cy.contains(order.total).should('be.visible');
          });
        });
      });

      it('TC 3.1.7 - Order dates are in readable format', () => {
        cy.get('#transactions tbody tr').each(($row) => {
          cy.wrap($row).find('td').eq(0) 
            .invoke('text')
            .then(text => {
              expect(text.trim()).to.match(/^\d{1,2}(st|nd|rd|th)? [A-Za-z]{3,9} \d{4}$/);
            });
        });
      });

      it('TC 3.1.8 - "Item Order Breakdown" title visible', () => {
        cy.contains('.mb-3', 'Item Order Breakdown').should('be.visible');
      });

      it(`TC 3.1.9 - 'Item Order Breakdown' Chart canvas renders'`, () => {
        cy.get('#transactionChart')
          .should('be.visible')
          .and(($canvas) => {
            const ctx = $canvas[0].getContext('2d');
            expect(ctx).to.exist;
          });
      });

      it(`TC 3.1.10 Check the page has the banner and it matches 2018`, () => {
        cy.get('.container > p').contains('2018').should('be.visible');
      });

    });

    describe('3.2 Your Account Functionality Tests', () => {

      it('TC 3.2.1 - Verify sorting by "Order Number" (descending)', () => {
        cy.get('a.order-number').click();

        cy.get('#transactions tbody tr th[scope="row"]')
          .should('have.length', expectedOrderNumbers.length)
          .each(($cell, index) => {
            expect($cell.text().trim()).to.equal(expectedOrderNumbers[index]);
          });
      });

      it('TC 3.2.2 - Verify sorting by "Date Ordered" (descending)', () => {
        cy.get('a.order-date').click();

        function parseDate(text) {
          return new Date(text.replace(/(\d+)(st|nd|rd|th)/, '$1'));
        }

        cy.get('#transactions tbody tr td:nth-child(2)').then($cells => {
          const dates = [...$cells].map(cell => parseDate(cell.innerText));
          for (let i = 0; i < dates.length - 1; i++) {
            expect(dates[i].getTime()).to.be.gte(dates[i + 1].getTime());
          }
        });
      });

      it('TC 3.2.3 - Verify sorting by "Order Description" (Z → A)', () => {
        cy.get('a.order-description').click();
        cy.get('a.order-description').click();  

        cy.get('#transactions tbody tr td:nth-child(3)').then($cells => {
          const descriptions = [...$cells].map(cell => cell.innerText.trim().toLowerCase());
          for (let i = 0; i < descriptions.length - 1; i++) {
            expect(descriptions[i].localeCompare(descriptions[i + 1])).to.be.gte(0); 
          }
        });
      });

      it('TC 3.2.4 - Verify sorting by "Order Total" (high → low)', () => {
        cy.get('a.order-total').click();

        cy.get('#transactions tbody tr td:nth-child(4)').then($cells => {
          const totals = [...$cells].map(cell => parseFloat(cell.innerText.replace('£', '')));
          for (let i = 0; i < totals.length - 1; i++) {
            expect(totals[i]).to.be.gte(totals[i + 1]);
          }
        });
      });

      it('TC 3.2.5 - Verify "Delete Item" functionality updates count and retains remaining items', () => {
        cy.clearBasket();
        cy.visit(sweetsPage);
        cy.addProductsToBasket(3);
        cy.visit(loginPage);
        cy.login(validEmail, testPassword );
        
        cy.get('#basketItems li').should('have.length', 3);
        
        cy.contains('a', 'Delete Item').first().click();

        cy.get('span.badge-success').should('have.text', '2');
        
        cy.get('#basketItems li').should('have.length', 2);
        
      });
    });
  
    describe('TC 3.3.1 - Navigation from Your Account Page', () => {
      links.forEach(({ selector, expectedUrl, verify }) => {
        it(`Verify clicking each navigation link redirects to the correct page from the Login page`, () => {
          cy.loginAndGoToAccountPage(validEmail, testPassword)

          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });
    });
  });

  describe('4. Sweet Shop - Home Page Test Cases', () => {

    beforeEach(() => {
      cy.visit(site);
    });

    describe('4.1 Page Load and UI Tests', () => {

      it(`TC 4.1.1 Verify the page title "Welcome to the sweet shop!"`, () => {
        cy.get('.display-3').contains('Welcome to the sweet shop!').should('be.visible');
      });

      it(`TC 4.1.2 Verify the page contains the correct description text`, () => {
        cy.get('header > .lead').contains('The sweetest online shop').should('be.visible');
      });

      it(`TC 4.1.3 Verify the page contains the correct description text`, () => {
        cy.get('header > .lead').contains('The sweetest online shop').should('be.visible');
      });

      it(`TC 4.1.4 Verify advertising elements are visible on the page`, () => {
        cy.get('.container > p').contains('2018').should('be.visible');
      });
      
      it(`TC 4.1.4 Verify advertising elements are visible on the page `, () => {
        cy.get('.advertising').should('be.visible')
      });

      it('TC 4.1.5 should show hover effect on "Browse sweets" button', () => {
        cy.get('a.btn.sweets').should('be.visible')
        .and('contain.text', 'Browse Sweets');
      });

      it(`TC 4.1.6 Verify the 'Most popular' container has a Title`, () => {
        cy.contains('h2', 'Most popular').should('be.visible')
      });

      it(`TC 4.1.7 Verify the 'most popular' container has a description`, () => {
        cy.get('.lead').contains('Our most popular choice of retro sweets.').should('be.visible');
      });

      it('TC 4.1.8  Should display 4 product cards in Most Popular section', () => {
        cy.get('.cards').should('have.length.at.least', 4);
      });

      it(`TC 4.1.9  Product cards display name, description, and price correctly `, () => {
        expectedProducts.forEach(({ name, description, price }) => {
          cy.contains('.card-title', name).should('be.visible');
          cy.contains('.card-text', description).should('be.visible');
          cy.contains('small.text-muted', price).should('be.visible');
        });
      });

      it(`TC 4.1.10  Should display 4 'Add to Basket' buttons`, () => {
        cy.get('.addItem:visible').should('have.length', 4);
      });

      it('TC 4.1.11  Verify navbar elements are visible on the About page', () => {
        cy.get('nav.navbar').should('be.visible');

        cy.get('.navbar-brand')
          .should('be.visible')
          .and('contain.text', 'Sweet Shop')
          .find('img')
          .should('be.visible')
          .and('have.attr', 'src', 'favicon.png');

        cy.contains('.nav-link', 'Sweets').should('be.visible');
        cy.contains('.nav-link', 'About').should('be.visible');
        cy.contains('.nav-link', 'Login').should('be.visible');

        cy.contains('.nav-link', 'Basket').within(() => {
          cy.get('.badge')
            .should('be.visible')
            .invoke('text')
            .should('match', /^\d+$/);
        });
          
    
      });

    });

    describe('4.2 Navigation and Menu', () => {

      it(`TC 4.2.1 Verify clicking each navigation link redirects to the correct page`, () => {
        links.forEach(({ selector, expectedUrl, verify }) => {
          cy.visit(loginPage);
          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });

    });

    describe('4.3 Functional testing', () => {

      it(`TC 4.3.1 Verify the 'Browse sweets' button is visible and clickable`, () => {
        cy.get('.sweets').should('be.visible').click();
        cy.url().should('eq', sweetsPage);
        cy.get('.display-3').contains('Browse sweets').should('be.visible')
      });

      it(`TC 4.3.2 Verify 'Add to Basket' buttons functionality`, () => {
        cy.get('a.addItem[data-name="Chocolate Cups"]').click();
        cy.get('a.addItem[data-name="Sherbert Straws"]').click();

        cy.get('span.badge-success').should('have.text', '2');

        cy.visit(basketPage)
        cy.get('#basketItems li').should('have.length', 3);
      });

    });

  });

  describe('5. Sweet Shop - Browse Sweets Page Test Cases', () => {
    
    beforeEach(() => {
      cy.visit(sweetsPage);
    });

    describe('5.1 Page Load and UI Tests', () => {

      it(`TC 5.1.1 Verify the page title is exactly "Browser sweets" `, () => {
        cy.get('.display-3').should('have.text', 'Browse sweets');
      });

      it(`TC 5.1.2 Verify the page contains the correct description text`, () => {
        cy.get('p.lead').should('contain', 'Browse our delicious choice of retro sweets.');
      });

      it('TC 5.1.3 Verify navbar elements are visible on the About page', () => {
        cy.get('nav.navbar').should('be.visible');

        cy.get('.navbar-brand')
          .should('be.visible')
          .and('contain.text', 'Sweet Shop')
        
        cy.contains('.nav-link', 'Sweets').should('be.visible');
        cy.contains('.nav-link', 'About').should('be.visible');
        cy.contains('.nav-link', 'Login').should('be.visible');

        cy.contains('.nav-link', 'Basket').within(() => {
          cy.get('.badge')
            .should('be.visible')
            .invoke('text')
            .should('match', /^\d+$/);
        });
        
      });

      it(`TC 5.1.4 Check the page has the banner and it matches 2018`, () => {
        cy.get('.container > p').contains('2018').should('be.visible');
      });

      it(`TC 5.1.5 Check page contains 16 items`, () => {
        cy.get('.card').should('have.length', 16);
      });

      it(`TC 5.1.6 Check each product diplays corect information`, () => {
        products.forEach(product => {
      
          cy.contains('.card-title', product.name).should('be.visible');
          cy.contains('.card-text', product.description).should('be.visible');
          cy.contains('.text-muted', product.priceFormatted).should('be.visible');

          cy.get(`img[src="${product.image}"]`)
            .should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0);
        });
      });

      it(`TC 5.1.7 Verify each product has a corresponding "Add to Basket" button`, () => {
        products.forEach((product) => {
          cy.contains('.card-title', product.name)
            .parents('.card')
            .within(() => {
              cy.get('.addItem')
                .should('have.attr', 'data-id', product.id.toString());
            });
        });
      });

    });

    describe('5.2 Browse sweets Functionality Tests', () => {
      
      it(`TC 5.2.1 Verify 'Add to Basket' buttons functionality" `, () => {
        cy.clearBasket();
        cy.visit(sweetsPage);

        cy.get('a.addItem[data-name="Chocolate Cups"]').click();
        cy.get('a.addItem[data-name="Sherbert Straws"]').click();

        cy.get('span.badge-success').should('have.text', '2');

        cy.visit(basketPage)
        cy.get('#basketItems li').should('have.length', 3);
      });

    });

    describe('5.3 Menu Navigation ', () => {

      it(`TC 5.3.1 Verify clicking each navigation link redirects to the correct page`, () => {
        links.forEach(({ selector, expectedUrl, verify }) => {
          cy.visit(loginPage);
          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });

    });

  });

  describe('6. Sweet Shop - Basket Page Test Cases', () => {
    
    beforeEach(() => {
      cy.visit(basketPage);
    });

    describe('6.1 Page Load and UI Tests', () => {

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

    describe('6.2 Add Single Product to Empty Basket', () => {

      it('TC 6.2.1  Check page title is “Your Basket”', () => {
        cy.clearBasket().then(() => {
  
          cy.visit(sweetsPage);

          cy.addProductsToBasket(1).then((addedProducts) => {
            Cypress.env('addedProducts', addedProducts);

            cy.visit(basketPage);

            cy.get('span.badge-success').should('have.text', addedProducts.length.toString());
            cy.get('#basketCount').should('have.text', addedProducts.length.toString());

            addedProducts.forEach((product, index) => {
              cy.get(`#basketItems li:not(:contains("Total")):eq(${index})`).within(() => {
                cy.get('h6.my-0').should('contain', product.name);
                cy.get('small.text-muted').should('contain', `x ${product.quantity || 1}`);
                cy.get('span.text-muted').last().should('contain', product.price);
                cy.contains('a.small', 'Delete Item').should('exist');
              });
            });
          });
        });
      });

      it('TC 6.2.2  Check page title is “Your Basket”', () => {
        cy.clearBasket().then(() => { 
          cy.visit(sweetsPage);

          cy.addProductsToBasket(2, true).then((addedProducts) => {
            Cypress.env('addedProducts', addedProducts);

            cy.visit(basketPage);

            const totalQuantity = addedProducts.reduce((sum, product) => sum + (product.quantity || 1), 0);
            cy.get('span.badge-success').should('have.text', totalQuantity.toString());
            cy.get('#basketCount').should('have.text', totalQuantity.toString());

            addedProducts.forEach((product, index) => {
              cy.get(`#basketItems li:not(:contains("Total")):eq(${index})`).within(() => {
                cy.get('h6.my-0').should('contain', product.name);
                cy.get('small.text-muted').should('contain', `x ${product.quantity || 1}`);
                cy.get('span.text-muted').last().should('contain', product.price);
                cy.contains('a.small', 'Delete Item').should('exist');
              });
            });
          });
        });
      });
      
      it(`TC 6.2.3 Add Multiple Different Products`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.addProductsToBasket(2).then((addedProducts) => {
            Cypress.env('addedProducts', addedProducts);

            cy.visit(basketPage);

            cy.get('span.badge-success').should('have.text', addedProducts.length.toString());
            cy.get('#basketCount').should('have.text', addedProducts.length.toString());

            addedProducts.forEach((product, index)=>{
              cy.get(`#basketItems li:not(:contains("Total")):eq(${index})`).within(() => {
                cy.get('h6.my-0').should('contain', product.name);
                cy.get('small.text-muted').should('contain', `x ${product.quantity || 1}`);
                cy.get('span.text-muted').last().should('contain', product.price);
                cy.contains('a.small', 'Delete Item').should('exist');
              });
            });
          });
        })
      });

      it(`TC 6.2.4 Confirm Dynamic Price Updates`, ()=>{
        cy.clearBasket().then(()=>{
        cy.visit(sweetsPage)

        cy.get('a.addItem[data-name="Chocolate Cups"]').click().click();
        cy.get('a.addItem[data-name="Sherbert Straws"]').click();

        cy.visit(basketPage);

        cy.get('span.badge-success').should('have.text', '3');
        cy.get('#basketCount').should('have.text', '3');
        
        cy.get('a[href="javascript:removeItem(1);"]').click();
        
        cy.get('span.badge-success').should('have.text', '1');
        cy.get('#basketCount').should('have.text', '1');

        cy.get(`#basketItems li`).eq(1).within(() => {
          cy.get('div .text-muted').should('contain', '1');
        });

        cy.get(`#basketItems li`).last().within(() => {
          cy.get('strong').should('contain', '0.75');
        });

        cy.contains('a[href="#"]', 'Empty Basket').click();
        
        cy.get('span.badge-success').should('have.text', '0');
        cy.get('#basketCount').should('have.text', '0');

        cy.get('#basketItems li:contains("Total") strong').should('contain', '0');
      });

      });

      it(`TC 6.2.5 Check Shipping Cost Addition`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.get('a.addItem[data-name="Chocolate Cups"]').click();
          cy.visit(basketPage);
          cy.get('#basketItems li:contains("Total") strong').should('contain', '1.00');

          cy.get('label[for="exampleRadios2"]').click();

          cy.get('#basketItems li:contains("Total") strong').should('contain', '2.99');

        });
      });

      it(`TC 6.2.6 Check Shipping Cost Addition with Prices Containing Decimal (e.g., £1.50)`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.get('a.addItem[data-name="Swansea Mixture"]').click();
          cy.visit(basketPage);
          cy.get('#basketItems li:contains("Total") strong').should('contain', '1.50');

          cy.get('label[for="exampleRadios2"]').click();

          cy.get('#basketItems li:contains("Total") strong').should('contain', '3.49');
        });
      });

      it(`TC 6.2.7 Remove Single Item via Delete Button`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.addProductsToBasket(2);
          cy.visit(basketPage);

          cy.get('a[href="javascript:removeItem(1);"]').click();

          cy.get('span.badge-success').should('have.text', '1');
          cy.get('#basketCount').should('have.text', '1');

          cy.get('#basketItems li').should('have.length', 2);
     
          cy.get('#basketItems li:contains("Total") strong').should('contain', '0.75');


        });
      });

      it(`TC 6.2.8 Remove Single Item via Delete Button`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.addProductsToBasket(2);
          cy.visit(basketPage);

          cy.contains('a[href="#"]', 'Empty Basket').click();

          cy.get('span.badge-success').should('have.text', '0');
          cy.get('#basketCount').should('have.text', '0');

          cy.get('#basketItems li').should('have.length', 1);
     
          cy.get('#basketItems li:contains("Total") strong').should('contain', '0.00');
        });
      });

      it(`TC 6.2.9 Verify Basket Persistence`, ()=>{
        cy.clearBasket().then(()=>{
          cy.visit(sweetsPage);

          cy.addProductsToBasket(2, true).then((addedProducts) => {
            Cypress.env('addedProducts', addedProducts);

            cy.visit(basketPage);
            cy.visit(sweetsPage);
            cy.go('back');

            const totalQuantity = addedProducts.reduce((sum, product) => sum + (product.quantity || 1), 0);
            cy.get('span.badge-success').should('have.text', totalQuantity.toString());
            cy.get('#basketCount').should('have.text', totalQuantity.toString());

            addedProducts.forEach((product, index) => {
              cy.get(`#basketItems li:not(:contains("Total")):eq(${index})`).within(() => {
                cy.get('h6.my-0').should('contain', product.name);
                cy.get('small.text-muted').should('contain', `x ${product.quantity || 1}`);
                cy.get('span.text-muted').last().should('contain', product.price);
                cy.contains('a.small', 'Delete Item').should('exist');
              });
            });
          });
        });
      });

      it(`TC 6.2.10 Validate promocode Field Input Types.`, ()=>{
        cy.addTwoItemsToBasket();
        cy.visit(basketPage);
        invalidPromoCodeInputs.forEach((input) => {
          cy.get('.form-control[placeholder="Promo code"]').clear().type(input);
          cy.contains('button', 'Redeem').click();
          cy.get('.invalid-feedback').should('be.visible')
          .and('contain', 'Please input a valid promo code');
        });

        it('should accept a valid promo code and apply discount', () => {
          cy.get('.form-control[placeholder="Promo code"]').clear().type(validPromoCode);
          cy.contains('button', 'Redeem').click();
          cy.get('.invalid-feedback').should('not.be.visible');
          cy.contains('Discount applied').should('be.visible');
        });

      });

    });

    describe('6.3 Navigation and Menu', () => {
      it(`TC 4.2.1 Verify clicking each navigation link redirects to the correct page`, () => {
        links.forEach(({ selector, expectedUrl, verify }) => {
          cy.visit(loginPage);
          cy.get(selector).click();
          cy.url().should('eq', expectedUrl);
          verify();
        });
      });
    });

    describe('6.4 Billing address and Payment form validation tests', () => {

      it(`TC 6.4.1 Validate First Name Field Input Types`, () => {
        cy.triggerFormValidation();
        invalidFirstnameInputs.forEach(input => {
          cy.get('input#name').eq(0).clear().type(input);
          cy.contains('.invalid-feedback', 'Valid first name is required')
          .should('be.visible');
        });
      });

      it(`TC 6.4.2 Validate Last Name Field Input Types`, () => {
        cy.triggerFormValidation();
        invalidFirstnameInputs.forEach(input => {
          cy.get('input#name').eq(1).clear().type(input);
          cy.contains('.invalid-feedback', 'Valid last name is required')
          .should('be.visible');
        });
      });

      it(`TC 6.4.3 Validate Email Field Input Format`, () => {
        cy.triggerFormValidation();
        invalidAddressInputs.forEach(input => {
          cy.get('#address').clear().type(input);
          cy.contains('.invalid-feedback', 'Please enter a valid email address for shipping updates.')
          .should('be.visible');
        });
      });

      it(`TC 6.4.4 Validate Address Field Input Types`, () => {
        cy.triggerFormValidation();
        invalidAddressInputs.forEach(input => {
          cy.get('#address').clear().type(input);
          cy.contains('.invalid-feedback', 'Please enter your shipping address.')
          .should('be.visible');
        });
      });

      it(`TC 6.4.5 Validate Address 2 Field Input Types`, () => {
        cy.triggerFormValidation();
        invalidAddressInputs.forEach(input => {
          cy.get('#address').clear().type(input);
          cy.contains('.invalid-feedback', 'Please enter your shipping address.')
          .should('be.visible');
        });
      });

      it(`TC 6.4.6: Validate invalid inputs for ZIP Code`, () => {
        cy.triggerFormValidation();
        invalidZipInputs.forEach(input => {
          cy.get('#zip').clear().type(input);
          cy.contains('.invalid-feedback', 'Zip code required.')
          .should('be.visible');
        });
      });

      it('TC 6.3.7 Validate invalid inputs for Name on Card', () => {
        cy.triggerFormValidation();
        invalidCardNameInputs.forEach(input => {
          cy.get('#cc-name').clear().type(input);
          cy.contains('.invalid-feedback', 'Name on card is required')
          .should('be.visible');
        });
      });

      it('TC 6.3.8 Validate invalid inputs for Card Number', () => {
        cy.triggerFormValidation();
        invalidCardNumberInputs.forEach(input => {
          cy.get('#cc-number').clear().type(input);
          cy.contains('.invalid-feedback', 'Credit card number is required')
          .should('be.visible');        
        });
      });

      it('TC 6.3.9: Validate invalid inputs for Expiration Date', () => {
        cy.triggerFormValidation();
        invalidExpirationInputs.forEach(input => {
          cy.get('#cc-expiration').clear().type(input).blur();
          cy.contains('.invalid-feedback', ' Expiration date required')
          .should('be.visible'); 
        });
      });

      it('TC 6.3.10 Validate invalid inputs for CVV', () => {
        cy.triggerFormValidation();
        invalidCvvInputs.forEach(input => {
          cy.get('#cc-cvv').clear().type(input).blur();
          cy.contains('.invalid-feedback', 'Security code required')
          .should('be.visible'); 
        });
      });

    });

    describe('6.5 checkout flow tests', () => {

      it(`TC 6.5.1 Valid Checkout Flow`, () => {
        cy.clearBasket()
        cy.visit(sweetsPage);
        cy.addProductsToBasket(2);
        
        cy.visit(basketPage);
        cy.fillBillingAddress();
        cy.fillPaymentDetails();
        cy.get('button[type="submit"]').contains('Continue to checkout').click();

        cy.get('span.badge-success').should('have.text', '0');
        cy.get('#basketCount').should('have.text', '0');
        cy.get('#basketItems li').not(':contains("Total")').should('have.length', 0);
      });

      it(`TC 6.5.2 Attempt Checkout with Empty Basket`, () => {
        cy.clearBasket()
        cy.visit(basketPage);
        cy.fillBillingAddress();
        cy.fillPaymentDetails();
        cy.get('button[type="submit"]').contains('Continue to checkout').click();

        cy.contains('Basket is empty').should('be.visible');
      });

      it(`TC 6.5.3 Attempt Checkout with Partially Completed Form`, () => {
        cy.clearBasket()
        cy.visit(sweetsPage);
        cy.addProductsToBasket(2);

        cy.visit(basketPage);
        cy.fillBillingAddress();

        cy.get('#cc-number').type('4111 1111 1111 1111');
        cy.get('#cc-expiration').type('12/26');
        cy.get('#cc-cvv').type('123');

        cy.get('button[type="submit"]').contains('Continue to checkout').click();

        cy.contains('.invalid-feedback', 'Name on card is required').should('be.visible');
      });

      it(`TC 6.5.4 Attempt Checkout with Invalid Form Inputs`, () => {
        cy.clearBasket()
        cy.visit(sweetsPage);
        cy.addProductsToBasket(2);

        cy.visit(basketPage);
        cy.fillBillingAddress();

        cy.get('#cc-name').type('joh doe');
        cy.get('#cc-number').type('4111 1111 1111 1111');
        cy.get('#cc-expiration').type('12/26');
        cy.get('#cc-cvv').type('---');

        cy.get('button[type="submit"]').contains('Continue to checkout').click();

        cy.contains('.invalid-feedback', 'Security code required ').should('be.visible');
      });

    });

  });

});

