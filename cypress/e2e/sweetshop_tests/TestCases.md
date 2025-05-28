# Sweet Shop test cases https://sweetshop.netlify.app/

## 1. Sweet Shop - About Page Test Cases
### 1.1 Page Load and UI Tests
  - **1.1.1** Check the page has title 'Sweet Shop Project'
  - **1.1.2** Check the page has the description
  - **1.1.3** Check the page has the banner and it matches 2018
  - **1.1.4** Check navbar has 'logo', 'Sweet Shop' href, 'Sweets', 'About', 'Login', 'Basket' elements visible
  
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
  - **2.1.4** Confirm the presence of input fields:
    Email address textbox (pre-filled with "you@example.com").
    Password textbox (labeled "Password").
  - **2.1.5** Ensure the Login button is visible and correctly labeled.
  - **1.1.6** Check navbar has 'logo', 'Sweet Shop' href, 'Sweets', 'About', 'Login', 'Basket' elements visible
  - **1.1.7** Verify all social media icons are visible
  - **1.1.8** Check the page has the banner and it matches 2018
  
### 2.2 Login Functionality Tests
  - **2.2.1** Password masking (should show •••• instead of plaintext).
  - **2.2.1** Successful login valid email + password → Redirect to 'Your Account' page.
  - **2.2.3** Unsuccessful login invalid email format (e.g., user@, user.com, user@.com) valid pasword.
  - **2.2.4** Unsuccessful login scenario empty email;
  - **2.2.5** Unsuccessful login scenario empty password;
  - **2.2.6** Unsuccessful login scenario empty email and password fields;
  - **2.2.7** Unsuccessful login scenario password to short (4 symobls);

### 2.3 Interactive Elements Tests
  - **2.3.1** Confirm 'x' icon redirects to X.com/sweetshop
  - **2.3.2** Confirm 'fb' icon redirects to facebook.com/sweetshop
  - **2.3.3** Confirm 'Li' icon redirects to Linkedin.com/sweetshop

### 2.4 Navigation and Menu redirection
  - **2.4.1** Verify clicking each navigation link redirects to the correct page:
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
  - **3.1.9** Verify chart content:
    - Title: **"# of Items Ordered"** is visible
    - Month labels (e.g., **February, July, December**) are displayed
    - Chart type is visible (bar chart, line chart, etc.)
    - Y-axis contains numerical labels (e.g., 0, 1, 2...)
  - **3.1.10** Check the page has the banner and it matches 2018
    
### 3.2 Your Account Functionality Tests
  - **3.2.1** Check that clicking the **"Order Number"** header sorts orders in descending order (e.g., #3 → #1).
  - **3.2.2** Check that clicking **"Date Ordered"** sorts by most recent date.
  - **3.2.3** Check that clicking **"Order Description"** sorts alphabetically (Z → A).
  - **3.2.4** Check that clicking **"Order Total"** sorts by amount (highest → lowest).
  - **3.2.5** Hover over any chart bar or data point displays tooltip with:
    - Month
    - Color
    - Exact item count
  - **3.2.6** Clicking the **"# of Items Ordered"** title:
    - Clears chart
    - Reformats Y-axis with new labels (e.g., 0.1, 0.2...1)
  - **3.2.7** Verify delete functionality:
    - Clicking "Delete Item" updates the item count correctly
    - Other items remain after deletion
  - **3.2.8** Hovering over any "Delete Item" button causes a visual change (e.g., color, u`nderline).
    
### 3.3 Navigation and Menu redirection
  - **3.3.1** Verify clicking each navigation link redirects to the correct page:
    - **Sweets** → Browse Sweets page.
    - **Basket** → Basket page.
    - **About** → About page.
    - **Login** → Login page.
    - **Logo** → Home page.
  
   



## 4. Sweet Shop - Home Page Test Cases 
### 4.1 Page Load and UI Tests
  - **4.1.2** Verify the page title is exactly "Welcome to the sweet shop!"
  - **4.1.3** Verify the page contains the correct description text.
  - **4.1.4** Verify the banner is visible and matches the 2018 design/logo.
  - **4.1.5** Verify advertising elements are visible on the 
  - **4.1.6** – Check the page has the banner and it matches 2018

    Preconditions:
    User is on the About page.

    Test Steps:
        Scroll to the banner section of the page.
        Compare the displayed banner with the 2018 design reference.

    Expected Result:
    The banner is visible and matches the 2018 design/logo.page.
  - ad
  - ad
  - ad
  - ad

  ### 4.2 Navigation and Menu
  - **4.2.1** Verify clicking each navigation link redirects to the correct page:
  - **Sweets** → Browse Sweets page.
  - **About** → About page.
  - **Login** → Login page.
  - **Basket** → Basket page.

  ### 4.3 Interactive Elements
  - **4.3.1** Verify clicking the **'Browse sweets'** button navigates to the **Browse Sweets** page.
  - **4.3.2** Verify the **'most popular'** container has a descriptive heading or text.
  - **4.3.3** Verify the **'most popular'** container displays product items (at least one item).
  -  go in deph of products(each has ....)

  ### 4.4 Cross-Page Workflow Tests
  - **4.4.2** Add item from 'most popular' container → verify basket counter updates.
  - **4.4.3** Navigate to Basket page → verify added items are present.

## 5. Sweet Shop - Basket Page Test Cases
### 4.1 Basket Page – UI & Load Checks
  - **4.1.1** – Check page has **header**, **body**, and **footer**
  - **4.1.2** – Check page title is **“Your Basket”**
  - **4.1.3** – Check page has basket **description text**
  - **4.1.4** – Verify **Billing Address Form** includes input fields:
    - `First name`, `Last name`, `Email`, `Address`, `Address 2 (Optional)`, `Zip`
    - Dropdown/select fields: `Country`, `City`

  - **4.1.5** – Verify **Payment Form** contains input fields:
     - `Name on card`, `Credit card number`, `Expiration date`, `CVV`

  - **4.1.6** – Verify **"Your Basket" summary** shows:
  - Product counter (number of items)
  - `Total (GBP)` value, showing £0.00 or equivalent when basket is empty
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
  - **4.2.5** – Remove a product from the using 'empty basket'
  - **4.2.6** – Verify checkout summary matches basket contents  

### 4.3 Navigation and Menu
  - **4.3.1** Verify clicking each navigation link redirects to the correct page:
  - **Logo** → Home page.
  - **Sweets** → Browse Sweets page.
  - **About** → About page.
  - **Login** → Login page.
    





