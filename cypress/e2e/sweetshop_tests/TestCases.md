# Sweet Shop test cases https://sweetshop.netlify.app/

## Sweet Shop - About Page Test Cases
  ### 1.1 Page Content Tests
  - **1.1.1** Check the page has title 'Sweet Shop Project'
  - **1.1.2** Check the page has the description
  - **1.1.3** Check the page has the banner and it matches 2018
  
## Sweet Shop - Login Page Test Cases
  ### 2.1 Page Load Tests
  - **2.1.1** Check 'Login' title and description
  - **2.1.2** Check the page has 'username' and 'password' textboxes

  ### 2.2 Login Functionality Tests
  - **2.2.1** Successful login scenario
  - **2.2.2** Unsuccessful login scenario
    
## Sweet Shop - Home Page Test Cases 
### 3.1 Page Load and UI Tests
   - **3.1.1** Verify the page has a **header**, **body**, and **footer** section.
   - **3.1.2** Verify the page title is exactly **"Welcome to the sweet shop!"**.
   - **3.1.3** Verify the page contains the correct description text.
   - **3.1.4** Verify the **banner** is visible and matches the **2018 design/logo**.
   - **3.1.5** Verify advertising elements are visible on the page.

### 3.2 Navigation and Menu
  - **3.2.1** Verify the header contains links labeled **“Sweets”**, **“About”**, **“Login”**, and **“Basket”**.
  - **3.2.2** Verify clicking each navigation link redirects to the correct page:
    - **“Sweets”** → Browse Sweets page.
    - **“About”** → About page.
    - **“Login”** → Login page.
    - **“Basket”** → Basket page.

### 3.3 Interactive Elements
  - **3.3.1** Verify the **'Browse sweets'** button is visible and clickable.
  - **3.3.2** Verify clicking the **'Browse sweets'** button navigates to the **Browse Sweets** page.
  - **3.3.3** Verify the **'most popular'** container has a descriptive heading or text.
  - **3.3.4** Verify the **'most popular'** container displays product items (at least one item).

### 3.4 Edge and Negative Cases
  - **3.4.1** Verify the navigation links show appropriate feedback (e.g., loading indicator) on slow network.
  - **3.4.2** Verify the page handles missing banner image gracefully (e.g., alt text or fallback).
  - **3.4.3** Verify the 'Browse sweets' button is disabled or hidden if there are no sweets available.
  - **3.4.4** Verify that clicking broken or disabled links does not cause page crashes.

### 3.5 Cross-Page Workflow Tests
  - **3.5.1** From Home page, navigate to Login page → perform successful login → confirm redirection back to Home.
  - **3.5.2** Add item from 'most popular' container → verify basket counter updates.
  - **3.5.3** Navigate to Basket page → verify added items are present.

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
  - **4.2.6** – Verify checkout summary matches basket contents  





    
