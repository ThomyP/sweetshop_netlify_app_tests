 
 We have a shop application for testing:
https://sweetshop.netlify.app/

This project is to identify all functional tests cases and write cypress tests to cover those.

1. Create new repository and cover this website with functional tests.
2. Before writing cypress tests, please identify all test cases:
    Please create a single file called TestCases.md (use markdown language) like

    About page:
    1.1. Check the page has title 'Sweet Shop Project'
    1.2. Check the page has the description
    1.3. Check the page has the banner and it matches 2018.

    Login page:
    2.1: Page load:
        2.1.1. Check 'Login' title, description
        2.1.2. Check the page has 'username' and 'password' textboxes.
    2.2. Login functionality:
        2.2.1 Successfull scenario
        2.2.2 Unsuccesfull scenario


3. We should get ready for writing cypress tests.
3.1 Create an account in https://www.atlassian.com/software/jira (it is free and does not require a credit card).
3.2 Create a Scrum project.
3.3 Convert Test cases to Backlog items (to do) in simplest way.
3.4 Move Tests cases from backlog to Sprint 1.
3.5 Start the sprint.

4. It is time to start writing your cypress tests. Lecturer is the product owner and scrum master of this project.
Lecturer wants to see the progress by looking at the Jira board. If you see that you have additional tasks.
For example, setting up pipelines, writing documentations, please create a Jira backlog item for this.

5. Test writing time, please use beforeEach() and please use commands for repeating code.
A good practice is to have different page functionality in different specification files (spec.cy.js)

6. Lecturer will be picky on things as they come.

 
 
 
 

  About page:
    1.1. Check the page has title 'Sweet Shop Project'
    1.2. Check the page has the description
    1.3. Check the page has the banner and it matches 2018.

  Login page:
    2.1: Page load:
        2.1.1. Check 'Login' title, description
        2.1.2. Check the page has 'username' and 'password' textboxes.
    2.2. Login functionality:
        2.2.1 Successfull scenario
        2.2.2 Unsuccesfull scenario
    
# Sweet Shop - Home Page Test Cases

  ### 3.1 Page Load Tests
  - 3.1.1 Check the page has header, body and footer
  ### 3.1.2 Navigation & Menu
    - **3.2.6.1** – Check **“Sweets”**, **“About”**, **“Login”**, and **“Basket”** links are present in the header
    - **3.2.6.2** – Confirm each navigation link redirects to the correct page:
      - “Sweets” → Browse Sweets page
      - “About” → About page
      - “Login” → Login page
      - “Basket” → Basket page
  - 3.1.3 Check advertising elements are visible
  - 3.1.4 Check the page has title 'Welcome to the sweet shop!'
  - 3.1.5 Check the page has the description
  - 3.1.6 Check the 'Browse sweets' button is working
  - 3.1.7 Check the 'most popular' container has description
  - 3.1.8 Check the 'most popular' container has items in it
  - 3.1.9 Check the page has the banner and it matches 2018

  
  ### 3.2 Browse Sweets Page – UI Elements & Layout

     - **3.2.1** – Check page has **header**, **body**, and **footer**
     - **3.2.2** – Check page title is **“Browse sweets”**
     - **3.2.3** – Check the page has **introductory description text**
     - **3.2.4** – Check the **sweets container** displays all available items
     - **3.2.5** – Check the **Sweet Shop banner** is visible and matches **2018 design/logo**
    
  ### 3.2 Product Display – Per Item Checks

    - **3.2.1** – Each product card contains an **image**
    - **3.2.2** – Each product card includes the **item name**
    - **3.2.3** – Each product card displays the **item price**
    - **3.2.4** – Each product card has a working **“Add to Basket”** button

  ### 3.3 Product Functionality

    - **3.3.1** – Clicking **“Add to Basket”** updates the basket counter in the header
    - **3.3.2** – Add multiple products and check basket counter updates correctly


  ### 4.1 Basket Page – UI & Load Checks

    - **4.1.1** – Check page has **header**, **body**, and **footer**
    - **4.1.2** – Check page title is **“Your Basket”**
    - **4.1.3** – Check page has basket **description text**
    - **4.1.4** – Check **Billing address form** includes:
      - `First name`, `Last name`, `Email`, `Address`, `Address 2 (Optional)`, `Zip`
      - Selects: `Country`, `City`
    - **4.1.5** – Check **Payment form** includes:
      - `Name on card`, `Credit card number`, `Expiration`, `CVV`
    - **4.1.6** – Check **"Your Basket" summary** displays:
      - Product counter and `Total (GBP)` when empty
    - **4.1.7** – Check **Delivery options** include:
      - `Collect (FREE)`, `Standard Shipping (£1.99)` radio buttons
    - **4.1.8** – Check selecting **Standard Shipping** adds £1.99 to `Total`
    - **4.1.9** – Check **Promo code** textbox is visible
    - **4.1.10** – Check **“Redeem”** button works and applies code
    - **4.1.11** – Check **“Empty Basket”** button clears basket items
    - **4.1.12** – Check **“Continue to checkout”** button is visible and clickable
  
   ### 4.2 Basket Functionality

      - **4.2.1** – Add a product to the basket  
      - **4.2.2** – Add multiple quantities of the same product  
      - **4.2.3** – Add multiple different products  
      - **4.2.4** – Confirm total price updates correctly  
      - **4.2.5** – Remove a product from the basket  
      - **4.2.6** – Verify checkout summary matches basket contents  



    4.2 Basket Functionality
      4.2.1 - Add a Product to Basket
      Precondition: User is on Sweets page
      Steps:
          Click "Add to basket" on a specific product
          Navigate to Basket page
      Expected Result: Basket contains that specific product with correct name, price, and quantity
    
      4.2.2 - Add Multiple Quantities of Same Product
      Steps:
          Add the same product twice
          Navigate to Basket page
      Expected Result: Quantity reflects 2, and total price is correct

      4.2.3 - Add Multiple Different Products
      Steps:
          Add Product A
          Add Product B
          Go to Basket
      Expected Result: Both Product A and B are listed separately with correct names and prices

      4.2.4 - Confirm Total Price Updates Correctly
      Steps:
          Add products with known prices
          View basket
      Expected Result: Total = Sum of item prices + shipping (if applicable)

      4.2.5 - Remove a Product from Basket
      Steps:
          Add a product
          Click "Remove" or adjust quantity to 0
      Expected Result: Product disappears, and total updates

      4.2.6 - Checkout Summary Matches Basket
      Steps:
          Add product(s)
          Proceed to checkout
      Expected Result: Checkout summary lists exact products and prices as in the basket




    
