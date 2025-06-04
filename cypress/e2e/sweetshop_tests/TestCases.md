# Sweet Shop test cases https://sweetshop.netlify.app/

## 1. Sweet Shop - About Page Test Cases
### 1.1 Page Load and UI Tests
  - **1.1.1** Check the page has title 'Sweet Shop Project'
  - **1.1.2** Check the page has the description
  - **1.1.3** Check the page has the banner and it matches 2018
  - **1.1.4** Check navbar has all elements visible
  
### 1.2 Navigation and Menu redirection
  - **1.2.1** Verify clicking each navigation link redirects to the correct page:
    - **Logo** → Home page.
    - **Login** → Login page.
    - **Basket** → Basket page.
    - **Sweets** → Browse Sweets page.
  
## 2. Sweet Shop - Login Page Test Cases
### 2.1 Page Load and UI Tests
  - **2.1.1** Check the page has title 'Login'
  - **2.1.2** Check the page has the description
  - **2.1.3** Check 'email adress' and 'password' in description has hover effect '?'
  - **2.1.4** Confirm the presence of input fields: Email address textbox
  - **2.1.5** Ensure the Login button is visible and correctly labeled.
  - **1.1.6** Check navbar has all elements visible
  - **1.1.7** Verify all social media icons are visible
  - **1.1.8** Check the page has the banner and it matches 2018
  
### 2.2 Login Functionality Tests
  - **2.2.1** Password masking (should show •••• instead of plaintext).
  - **2.2.1** Successful login with valid email credentials
  - **2.2.3** Unsuccessful login invalid email format (user@)
  - **2.2.4** Unsuccessful login with invalid email format (user.com)
  - **2.2.5** Unsuccessful login with invalid email format (user@.com)
  - **2.2.6** Unsuccessful login scenario empty email
  - **2.2.7** Unsuccessful login scenario empty password
  - **2.2.8** Unsuccessful login scenario empty email and password fields
  - **2.2.9** Unsuccessful login scenario password to short (7 symobls)
  - **2.2.10** Confirm 'x' icon redirects to X.com/login
  - **2.2.11** Confirm 'fb' icon redirects to facebook.com/login
  - **2.2.12** Confirm 'Li' icon redirects to Linkedin.com/login
   //add login option in jira (recomendation notes to login via fb...)

### 2.3 Menu Navigation
  - **2.3.1** Verify clicking each navigation link redirects to the correct page:
  - **Logo** → Home page.
  - **About** → About page.
  - **Basket** → Basket page.
  - **Sweets** → Browse Sweets page.

## 3. Sweet Shop - Your Account Page Test Cases
### 3.1 Page Load and UI Tests
  - **3.1.1** Check navbar has 'logo', 'Sweet Shop' href, 'Sweets', 'About', 'Login', 'Basket' elements visible
  - **3.1.2** Check the page title is "Your Account".
  - **3.1.3** Confirm the welcome message displays the logged-in user’s email (e.g., "Welcome back test@user.com").
  - **3.1.4** Verify the presence and visibility of "Previous Orders Table" title.
  - **3.1.5** Confirm table columns exist:
    - Order Number
    - Date Ordered
    - Order Description
    - Order Total
  - **3.1.6** Validate individual order data:
    - **Order #1**: "Swansea Mixture x 1", Total = £1.50
    - **Order #2**: "Sherbert Straws x 1", Total = £0.75
    - **Order #3**: "Chocolate Cups + Swansea Mixture", Total = £8.00
  - **3.1.7** Check that dates are displayed in readable format (e.g., "11th Feb 2019").
  - **3.1.8** Confirm the title **"Item Order Breakdown"** is visible above the chart.
  - **3.1.9** 'Item Order Breakdown' Chart canvas renders
  - **3.1.10** Check the page has the banner and it matches 2018
    
### 3.2 Your Account Functionality Tests
  - **3.2.1** Check that clicking the **"Order Number"** header sorts orders in descending order (e.g., #3 → #1).
  - **3.2.2** Check that clicking **"Date Ordered"** sorts by most recent date.
  - **3.2.3** Check that clicking **"Order Description"** sorts alphabetically (Z → A).
  - **3.2.4** Check that clicking **"Order Total"** sorts by amount (highest → lowest).
  - **3.2.5** Verify delete functionality:
    - Clicking "Delete Item" updates the item count correctly
    - Other items remain after deletion
  - **3.2.6** Hovering over any "Delete Item" button causes a visual change (e.g., color, underline).
    
### 3.3 Menu Navigation 
  - **3.3.1** Verify clicking each navigation link redirects to the correct page:
    - **Sweets** → Browse Sweets page.
    - **Basket** → Basket page.
    - **About** → About page.
    - **Login** → Login page.
    - **Logo** → Home page.
  
   



## 4. Sweet Shop - Home Page Test Cases 
### 4.1 Page Load and UI Tests
  - **4.1.1** Verify the page title is exactly "Welcome to the sweet shop!"
  - **4.1.2** Verify the page contains the correct description text.
  - **4.1.3** Verify the banner is visible and matches the 2018 design/logo.
  - **4.1.4** Verify advertising elements are visible on the page
  - **4.1.5** Verify 'Browse sweets' button is visible
  - **4.1.6**Verify the 'Most popular' container has a title
  - **4.1.7** Verify the 'most popular' container has a description
  - **4.1.8** Verify that all 4 product cards are displayed in 'most popular' category
   - **4.1.9** Verify product cards display correct information
   - **4.1.10** Verify 'Add to Basket' buttons are displayed
   - **4.1.11** Check navbar has 'logo', 'Sweet Shop' href, 'Sweets', 'About', 'Login', 'Basket' elements visible
 
  ### 4.2 Navigation and Menu
  - **4.2.1** Verify clicking each navigation link redirects to the correct page:
  - **Sweets** → Browse Sweets page.
  - **About** → About page.
  - **Login** → Login page.
  - **Basket** → Basket page.

  ### 4.3 Functional testing
  - **4.3.1** Verify clicking the **'Browse sweets'** button navigates to the **Browse Sweets** page.
  - **4.3.2** Verify 'Add to Basket' buttons functionality


## 5. Sweet Shop - Sweets Page Test Cases
### 5.1 Page Load and UI Tests
  - **5.1.1** Verify the page title is exactly "Browser sweets"
  - **5.1.2** Verify the page contains the correct description text 
  - **5.1.3** Verify navbar elements are visible on the Browse Sweets page
  - **5.1.4** Check the page has the footer and it mentions 2018
  - **6.1.5** Check page contains 16 items
  - **5.1.6** Check each product diplays corect information
  - **5.1.7** Verify each product has a corresponding "Add to Basket" button

### 5.2 Functional testing
  - **5.2.1** Verify 'Add to Basket' buttons functionality

### 5.3 Navigation and Menu
  - **5.3.1** Verify clicking each navigation link redirects to the correct page:
  - **Logo** → Home page
  - **Sweets** → Browse Sweets page.
  - **About** → About page.
  - **Login** → Login page.
  - **Basket** → Basket page.



## 6. Sweet Shop - Basket Page Test Cases
### 6.1 Basket Page – UI & Load Checks
  - **6.1.1**  Check page title is “Your Basket”
  - **6.1.2**  Check page has basket description text
  
  - **6.1.3** Verify "Billing address" section title is visible
  - **6.1.4**  Verify all billing address fields with their labels are visible

  - **6.1.5** Verify "Payment" section title is visible
  - **6.1.6** Verify all payment fields with their labels are visible

  - **6.1.7** Verify "Your Basket" section title is visible
  - **6.1.8** Verify "Your Basket" shows: Product counter
  - **6.1.9** Verify Total Amount filed is visible and diplays corect information
 
  - **6.1.10** Verify "Delivery" section title is visible
  - **6.1.11**  Check Promo code textbox is visible
  - **6.1.12**  Check “Redeem” button is visible
  - **6.1.13**  Check “Empty basket” button is visible
  
  - **6.1.14**  Check “Continue to Checkout” button is visible
  - **6.1.15** Check the page has the footer and it mentions 2018
  
### 6.2 Basket Functionality
  - **6.2.1** – Add single product to empty basket  
  - **6.2.2** – Add multiple quantities of same product  
  - **6.2.3** – Add multiple different products  
  - **6.2.4** – Confirm dynamic price updates 
  - **6.2.5** – Check Shipping Cost Addition with even prices 
  - **6.2.6**Check Shipping Cost Addition with Prices Containing Decimal (e.g., £1.50)
  - **6.2.7** – Remove single item via "Delete" button 
  - **6.2.8** – Empty basket via "Empty Basket" link
  - **6.2.9** – Verify basket persistence
  - **6.2.10** – Attempt checkout with empty basket
  

### 6.3 Navigation and Menu
  - **6.3.1** Verify clicking each navigation link redirects to the 
  - correct page:
  - **Logo** → Home page.
  - **Sweets** → Browse Sweets page.
  - **About** → About page.
  - **Login** → Login page.

### 6.4 Billing adress form
  - **6.4.1** 





