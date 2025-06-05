# Sweet Shop test cases https://sweetshop.netlify.app/

# 1. Sweet Shop - About Page Test Cases
## 1.1 Page Load and UI Tests
### TC 1.1.1 – Check the page has title 'Sweet Shop Project'

  Preconditions:
  - User is on the About page.

  Test Steps:
  1. Observe the page title and confirm it's visible.

  Expected Result:
  - The title should be "Sweet Shop Project".

  ---

### TC 1.1.2 – Check the page has the description

  **Preconditions:**
  - User is on the About page.

  **Test Steps:**
  1. Locate the description section below the page title.
  2. Observe the text content.

  **Expected Result:**
  - The page displays a relevant and visible description of the Sweet Shop.

  ---

### TC 1.1.3 – Check the page has the banner and it matches 2018

  **Preconditions:**
  - User is on the About page.

  **Test Steps:**
  1. Scroll to the banner section of the page.
  2. Compare the displayed banner with the 2018 design reference.

  **Expected Result:**
  - The banner is visible and matches the 2018 design/logo.

  ---

### TC 1.1.4 – Verify navbar elements are visible on the About page

  **Preconditions:**
  - User is on the About page.

  **Test Steps:**
  1. Inspect the navigation bar at the top of the page.
  2. Verify the presence and visibility of the following elements:
  3. Logo, "Sweet Shop", "Sweets", "About", "Login"  and "Basket" links
  4. basket index is visible number is show

  **Expected Result:**
  - All listed navbar elements are present and visible.

  ---
  
## 1.2 Navigation and Menu redirection
### TC 1.2.1 – Verify clicking each navigation link redirects to the correct page from the About page

**Preconditions:**
- User is on About page 

**Test Steps:**
1. Navigate from "About" page using each nav link.
2. Verify each redirect

**Expected Result:**
- Each navigation link from the "About" page successfully redirects to the correct page.

---

# 2. Sweet Shop - Login Page Test Cases
## 2.1 Page Load and UI Tests
### TC 2.1.1 – Check 'Login' page has title 'Login'

  **Preconditions:**
  - User is on the Login page.

  **Test Steps:**
  1. Observe the page title and confirm it's visible.

  **Expected Result:**
  - The page shows the title "Login"

  ---

### TC 2.1.2 – Check 'Login' page has the description

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Observe the description text content.

**Expected Result:**
- The page shows a relevant description (e.g., “login to your account”).

---

### TC 2.1.3 – Verify hover effect tooltip on "email address" and "password" in description

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate the page description text.
2. Identify the words "email address" and "password" within the description.
3. Hover the cursor over "email address" for 2s and observe tooltip popup text
4. Hover the cursor over "password" for 2s and observe tooltip popup text

**Expected Result:**
- Tooltips (question mark or popup box) appear when hovering over "email address" and "password"
- showig text 'test"user.com and qwerty after hovering for 2 seconds

---

### TC 2.1.4 – Confirm the presence of input fields

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate the input field labeled "Email address".
2. Verify that the placeholder text is you@example.com.
3. Locate the input field labeled "Password".
4. Verify that the placeholder text is Password.

**Expected Result:**
- Both input fields are visible, correctly labeled, and contain the expected placeholder text.

---

### TC 2.1.5 – Ensure the Login button is visible and correctly labeled

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate the 'Login' button below the input fields.
2. Read and verify the text on the button.

**Expected Result:**
- Login button is visible and displays the label "Login".

---

### TC 2.1.6 – Check navbar elements are visible

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Inspect the navigation bar at the top of the page.
2. Verify the presence and visibility of the following elements:
3. Logo, "Sweet Shop", "Sweets", "About", "Login"  and "Basket" links
4. basket index is visible number is show

**Expected Result:**
- All listed navbar elements are present and visible

---

### TC 2.1.7 – Verify all social media icons are visible

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Scroll to the bottom of the login form.
2. Identify three icons:
3. Twitter (now X)
4. Facebook
5. LinkedIn

**Expected Result:**
- All three icons are visible and match the expected platform branding.

---

### TC 1.1.8 – Check the page has the banner and it matches 2018

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Scroll to the banner section of the page.
2. Compare the displayed banner with the 2018 design reference.

**Expected Result:**
- The banner is visible and matches the 2018 design/logo.

---

## 2.2 Login Functionality Tests
### TC 2.2.1 – Password masking (should show •••• instead of plaintext)

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate the password input field.
2. Enter any characters into the password field.
3. Observe the characters as they are typed.

**Expected Result:**
- Typed characters are masked and appear as dots (••••); not displayed in plain text.

---

### TC 2.2.2 – Successful login with valid email credentials

**Preconditions:**
- User is on the Login page.
- User has valid login credentials.

**Test Steps:**
1. Enter a valid username.
2. Enter the correct password.
3. Click the Login button.
4. confirm user is redirected to Your Account page

**Expected Result:**
- User is successfully logged in and redirected to 'your Account' page.

---

### TC 2.2.3 – Unsuccessful login with invalid email format (user@)

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Enter an invalid email format user@
2. Enter a valid password.
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is shown: "Please enter a valid email address" or equivalent.

**Status:  FAIL**

---

### TC 2.2.4. – Unsuccessful login with invalid email format (user.com)

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Enter an invalid email format user.com
2. Enter a valid password.
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is shown: "Please enter a valid email address" or equivalent.

**Status: PASS**

---

### TC 2.2.5. – Unsuccessful login with invalid email format (user@.com)

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Enter an invalid email format user@.com
2. Enter a valid password.
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is shown: "Please enter a valid email address" or equivalent.

**Status: FAIL**

---

### TC 2.2.6 – Unsuccessful login with empty email field

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Leave the email field empty.
2. Enter a valid password.
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is displayed: "Please enter a valid email address. "

---

### TC 2.2.7 – Unsuccessful login with empty password field

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Enter a valid email address.
2. Leave the password field empty.
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is displayed: "Please enter a valid password."

---

### TC 2.2.8 – Unsuccessful login with both email and password fields empty

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Leave both email and password fields empty.
2. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- Error messages are shown for both fields, 'Please enter a valid email address' and 'Please enter a valid password'.

---

### TC 2.2.9 – Unsuccessful login scenario password to short (7 symobls)

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Enter a valid email address.
2. Enter a password with fewer than 5 characters (e.g., 1234).
3. Click the "Login" button.

**Expected Result:**
- User is not logged in.
- An error message is displayed: "Please enter a valid password. " or equivalent.

**Status: FAIL**

---

### TC 2.2.10 – Confirm 'X' icon redirects to X.com/Login

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate and click the Twitter/X icon.
2. Observe the redirection behavior.

**Expected Result:**
- User is redirected to x.com/i/flow/login

**Status FAIL**

---

### TC 2.2.11 – Confirm 'FB' icon redirects to facebook.com/Login

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate and click the Facebook icon.
2. Observe the redirection behavior.

**Expected Result:**
- User is redirected to https://www.facebook.com/login

**Status FAIL**

---

### TC 2.2.12 – Confirm 'Li' icon redirects to linkedin.com/Login

**Preconditions:**
- User is on the Login page.

**Test Steps:**
1. Locate and click the LinkedIn icon.
2. Observe the redirection behavior.

**Expected Result:**
- User is redirected to https://www.linkedin.com/login

**Status FAIL**

---

## 2.3 Menu Navigation
### TC 2.3.1 – Verify clicking each navigation link redirects to the correct page from the Login page

**Preconditions:**
- User is on Login page

**Test Steps:**
1. Navigate from "Login" page using each nav link. 
2. Verify each redirect
   
**Expected Result:**
- Each navigation link from the "Login" page successfully redirects to the correct page.

---

# 3. Sweet Shop - Your Account Page Test Cases

## 3.1 Page Load and UI Tests
### TC 3.1.1 – Verify navbar elements are visible on the Your Account page

**Preconditions:**
- User is logged in and on the "Your Account" page.

**Test Steps:**
1. Inspect the navigation bar at the top of the page.
2. Verify the presence and visibility of the following elements:
3. Logo, "Sweet Shop", "Sweets", "About", "Login"  and "Basket" links
4. basket index is visible number is show

**Expected Result:**
- All listed navbar elements are present and visible.

---

### TC 3.1.2 – Verify the page title is "Your Account"

**Preconditions:**
- User is logged in and on the "Your Account" page.

**Test Steps:**
1. Check the title at the top of the content area.
2. Confirm it reads "Your Account".

**Expected Result:**
- The page displays the title "Your Account".

---

### TC 3.1.3 – Verify the welcome message displays the user’s email

**Preconditions:**
- User is logged in and on the "Your Account" page.

**Test Steps:**
1. Look for a message that starts with "Welcome back".
2. Verify that the message includes the logged-in user’s email (e.g., test@user.com).

**Expected Result:**
- The welcome message is visible and displays the correct user email.

---

### TC 3.1.4 – Verify the "Previous Orders Table" title is visible

**Preconditions:**
- User is on the "Your Account" page.

**Test Steps:**
1. Locate the previous orders section.
2. Confirm the presence and visibility of the title "Previous Orders Table".

**Expected Result:**
- The title "Previous Orders Table" is present and visible.

---

### TC 3.1.5 – Confirm table columns are present

**Preconditions:**
- User is on the "Your Account" page.

**Test Steps:**
1. Locate the orders table.
2. Confirm the table headers include:
3. Order Number
4. Date Ordered
5. Order Description
6. Order Total

**Expected Result:**
- All expected columns are present in the orders table.

---

### TC 3.1.6 – Validate specific order data

**Preconditions:**
- User has order history displayed on the "Your Account" page.

**Test Steps:**
1. Check for the following rows in the orders table:
2. Order #1: "Swansea Mixture x 1", Total = £1.50
3. Order #2: "Sherbert Straws x 1", Total = £0.75
4. Order #3: "Chocolate Cups + Swansea Mixture", Total = £8.00

**Expected Result:**
- All three orders are displayed with correct descriptions and totals.

---

### TC 3.1.7 – Verify order dates are in readable format

**Preconditions:**
- User is on the "Your Account" page.

**Test Steps:**
1. Locate the "Date Ordered" column.
2. Confirm the format follows the readable structure, e.g., "11th Feb 2019".

**Expected Result:**
- Dates are displayed in a consistent and readable format.

---

### TC 3.1.8 – Verify "Item Order Breakdown" title is visible

Test Summary:
Ensure the section title for the order breakdown chart is present and clearly displayed.
**Preconditions:**
- User is on the "Your Account" page.

**Test Steps:**
1. Scroll to the order breakdown chart section.
2. Confirm the title "Item Order Breakdown" is visible above the chart.

**Expected Result:**
- The title "Item Order Breakdown" is clearly visible above the chart.

---

### TC 3.1.9 – 'Item Order Breakdown' Chart canvas renders

**Preconditions:**
- User is on the "Your Account" page.

**Test Steps:**
1. Locate the chart canvas element with the ID transactionChart on the page.
2. Verify that the chart canvas is visible.
3. Verify that the canvas element has a valid 2D rendering context.

**Expected Result:**
- The chart canvas element is present and visible on the page.
- The canvas element has a valid 2D rendering context (optional).

---


### TC 3.1.10 – Check the page has the banner and it matches 2018

**Preconditions:**
- User is on the Yout account page.

**Test Steps:**
1. Scroll to the banner section of the page.
2. Compare the displayed banner with the 2018 design reference.

**Expected Result:**
- The banner is visible and matches the 2018 design/logo.

---

## 3.2 Your Account Functionality Tests

### TC 3.2.1 – Verify sorting by "Order Number" (descending)

**Preconditions:**
- User is on the "Your Account" page with multiple orders listed.

**Test Steps:**
1. Click on the "Order Number" column header.
2. Observe the order of rows.

**Expected Result:**
- Orders are sorted from highest to lowest number (e.g., #3 → #1).

**Status Fail // single click does not change order numbers order**

---

### TC 3.2.2 – Verify sorting by "Date Ordered" (descending)

Test Summary:
Ensure clicking the "Date Ordered" column header sorts orders from most recent to oldest.
**Preconditions:**
- User is on the "Your Account" page with multiple orders listed.

**Test Steps:**
1. Click the "Date Ordered" column header.
2. Observe the sorting order of dates.

**Expected Result:**
- Orders are sorted by most recent date first.

---

### TC 3.2.3 – Verify sorting by "Order Description" (Z → A)

**Preconditions:**
- User is on the "Your Account" page with multiple orders listed.

**Test Steps:**
1. Click on the "Order Description" column header.
2. Check the order of product descriptions.

**Expected Result:**
- Orders are sorted alphabetically in descending (Z → A) order.

**Status FAIL bug: incorest sorting swansea mixture before sherber straws**

---

### TC 3.2.4 – Verify sorting by "Order Total" (high → low)

**Preconditions:**
- User is on the "Your Account" page with multiple orders listed.

**Test Steps:**
1. Click on the "Order Total" column header.
2. Observe the order of rows.

**Expected Result:**
- Orders are sorted by highest total to lowest.

---

### TC 3.2.5 – Verify "Delete Item" functionality updates count and retains remaining items

**Preconditions:**
- Basket is empty

**Test Steps:**
1. from Sweets apage add 3 items to the basket
2. Click 'Login' and login with valid user details
3. Observe basket item counter in navigation and confirm 3 is shown
4. Click on the "Delete Item" button next to one product.
5. Observe basket count and product list.

**Expected Result:**
- Item is removed, basket count is updated, and remaining items stay unaffected.

---

## 3.3 Menu Navigation

### TC 3.3.1 – Verify clicking each navigation link redirects to the correct page from the Your account page

**Preconditions:**
- User has a valid account (email & password).

**Test Steps:**
1. Log in.
2. Navigates from "Your Account" page using each nav link.
3. Verifies each redirect + title.
4. Logs in again after each navigation (to simulate session reset).

**Expected Result:**
- Each navigation link from the "Your Account" page successfully redirects to the correct page.
- 4. Home page Functionality

---


# 4. Sweet Shop - Home Page Test Cases

## 4.1 Page Load and UI Tests
### TC 4.1.1 – Verify the page title is exactly "Welcome to the sweet shop!"

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Locate the page title and confirm text is shown.

**Expected Result:**
- The title text should be exactly "Welcome to the sweet shop!".`

---

### TC 4.1.2 – Verify the page contains the correct description text

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Locate the description text under the main title.
2. Make sure th description is relevant to page

**Expected Result:**
- A clearly visible and relevant description of the sweet shop is displayed.

---

### TC 4.1.3 – Check the page has the banner and it matches 2018

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Scroll to the banner section of the page.
2. Compare the displayed banner with the 2018 design reference.

**Expected Result:**
- The banner is visible and matches the 2018 design/logo.

---

### TC 4.1.4 – Verify advertising elements are visible on the page

Test Summary:
Ensure promotional or advertising elements are displayed on the Home page.
**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Look for banner ad and confirm it is visible.

**Expected Result:**
- Advertising elements are visible and clearly distinguishable from regular content.

---

### TC 4.1.5 – Verify 'Browse sweets' button is visible

**Preconditions:**
- User is on the Home page

**Test Steps:**
1. Locate the 'Browse sweets' button
2. Verify the button:
3. Is clearly visible on the page
4. Has text ("Browse sweets")

**Expected Result:**
- Button is present and visible on page load
- Button text is readable (proper color contrast)

---

### TC 4.1.6 – Verify the 'Most popular' container has a Title

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Observe 'most popular' section.
2. Check for a visible Title 'Most Popular'

**Expected Result:**
- Title is visible and includes text 'Most popular'

---

### TC 4.1.6 – Verify the 'Most popular' container has a Title

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Observe 'most popular' section.
2. Check for a visible Title 'Most Popular'

**Expected Result:**
- Title is visible and includes text 'Most popular'
- ---report bug title is not shown

---

### TC 4.1.7 – Verify the 'most popular' container has a description

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Observe 'most popular' section.
2. Check for a visible heading or text that describes the section.

**Expected Result:**
- The section includes a clear heading or description (e.g., "most popular choice").

---

### TC 4.1.8 – Verify that all 4 product cards are displayed in 'most popular' category

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Observe 'most popular' section.
2. Confirm that items are displayed.

**Expected Result:**
- At least one product item is visible in the 'most popular' section.

---

### TC 4.1.9 – Verify product cards display correct information

**Preconditions:**
- User is on the Home page.
- 'Most popular' section is loaded.

**Test Steps:**
1. Locate the 'most popular' section.
2. Identify all product cards (Sherbert Straws, Sherbert Discs, Chocolate Cups, Bon Bons).
3. For each card, verify:
4. Product name is displayed.
5. Description text is present.
6. Price is visible and formatted correctly (£ symbol, decimal places).

**Expected Result:**
- All 4 product cards are displayed.
- Each card shows:
- Name (e.g., "Sherbert Straws").
- Description (e.g., "UFO's Sherbert Filled Flying Saucers").
- Price (e.g., "£0.75", "£1.00").

---

### TC 4.1.10 – Verify 'Add to Basket' buttons are displayed

**Preconditions:**
- User is on the homepage.

**Test Steps:**
1. Check that all 4 'Add to Basket' buttons are displayed.

**Expected Result:**
- All buttons are visible

---

### TC 4.1.11 – Verify navbar elements are visible on the About page

**Preconditions:**
- User is logged in and on the "Home" page.

**Test Steps:**
1. Inspect the navigation bar at the top of the page.
2. Verify the presence and visibility of the following elements:
3. Logo, "Sweet Shop", "Sweets", "About", "Login"  and "Basket" links

**Expected Result:**
- All listed navbar elements are present and visible.

---

## 4.2 Navigation and Menu

### TC 4.2.1 – Verify clicking each navigation link redirects to the correct page
**Preconditions:**
- User is on Home page

**Test Steps:**
1. Navigate from "Home" page using each nav link. 
2. Verify each redirect
   
**Expected Result:**
- Each navigation link from the "Home" page successfully redirects to the correct page.


---

### TC 2.3.1 – Verify clicking each navigation link redirects to the correct page from the Login page

**Preconditions:**
- User is on Login page

**Test Steps:**
1. Navigate from "Login" page using each nav link. 
2. Verify each redirect
   
**Expected Result:**
- Each navigation link from the "Login" page successfully redirects to the correct page.

## 4.3 Functional testing

### TC 4.3.1 – Verify the 'Browse sweets' button is visible and redirects user to sweets page.

**Preconditions:**
- User is on the Home page.

**Test Steps:**
1. Locate the 'Browse sweets' button.
2. Check if the button is visible and not disabled.
3. Attempt to click the button.
4. Observe change verify that user got redirected to browse sweets

**Expected Result:**
- The 'Browse sweets' button is visible and redirects user to the Browse Sweets page.

---

### TC 4.3.2 – Verify 'Add to Basket' buttons functionality

**Preconditions:**
- User is on the Home page.
- basket is empty

**Test Steps:**
1. attempt to click on 'Add to basket' button for 2 items
2. Observe change verify that basket counter updates
3. Go to the basket page
4. Check items are in the basket

**Expected Result:**
- basket counter updated 2 items added to basket

---

### TC 4.4.1 – From Home page, navigate to Login page → perform successful login → confirm redirection back to Home

Test Summary:
Verify the login workflow from the Home page redirects back to Home upon successful authentication.
**Preconditions:**
- User is on the Home page and has valid login credentials.

**Test Steps:**
1. Click on the “Login” link in the navbar.
2. On the Login page, enter valid credentials and submit the form.
3. Observe the redirection behavior after login.

**Expected Result:**
- User is successfully logged in and redirected back to the Home page.

---

### TC 4.4.2 – Add item from 'most popular' container → verify basket counter updates

Test Summary:
Ensure that adding a product from the 'most popular' section updates the basket counter.
**Preconditions:**
- User is on the Home page with at least one item listed under 'most popular'.

**Test Steps:**
1. Scroll to the 'most popular' section.
2. Click on “Add to Basket” for any product.
3. Observe the basket counter in the header.

**Expected Result:**
- The basket counter increments by 1.

---

### TC 4.4.3 – Navigate to Basket page → verify added items are present

Test Summary:
Verify that items added from the Home page appear correctly in the Basket page.
**Preconditions:**
- User has added one or more items to the basket.

**Test Steps:**
1. Click on the “Basket” link in the header.
2. On the Basket page, review the list of items.

**Expected Result:**
- Previously added items are displayed in the basket with correct quantity and details.

---

### TC 4.4.1 – Add item from 'most popular'and verify basket counter updates.

**Preconditions:**
- User is on the homepage
- Cart is empty (counter shows "0")

**Test Steps:**
1. Click "Add to Basket" for "Sherbert Straws" (£0.75)
2. Immediately verify:
3. Cart counter updates from "0" → "1"
4. Click "Add to Basket" for "Bon Bons" (£1.00) twice
5. Verify:
6. Cart counter updates to "3"

**Expected Result:**
- Counter increments instantly on each click
- No page reload required

---

### TC 4.4.2 – Verify Basket page displays added items correctly

**Preconditions:**

---

# 5. Sweet Shop - Sweets Page Test Cases

## 5.1 Page Load and UI Tests
### TC 5.1.1 – Verify the page title is exactly "Browse sweets"

**Preconditions:**
- User is on the Browse Sweets page.

**Test Steps:**
1. Locate the title element and confirm it's visible

**Expected Result:**
- The element contains exactly the text: "Browse sweets

---

### TC 5.1.2 – Verify the page contains the correct description text

**Preconditions:**
- User is on the Browse Sweets page.

**Test Steps:**
1. Locate the dectiption for browse sweets page
2. Make sure th description is relevant to page

**Expected Result:**
- The element contains the text: "Browse our delicious choice of retro sweets."

---

### TC 5.1.3 – Verify navbar elements are visible on the Browse Sweets page

**Preconditions:**
- User is on the Browse sweets page.

**Test Steps:**
1. Inspect the navigation bar at the top of the page.
2. Verify the presence and visibility of the following elements:
3. Logo, "Sweet Shop", "Sweets", "About", "Login"  and "Basket" links
4. basket index is visible number is show

**Expected Result:**
- All listed navbar elements are present and visible.e.

---

### TC 5.1.4 – Check the page has the footer and it mentions 2018

**Preconditions:**
- User is on the Browse Sweets page.

**Test Steps:**
1. Scroll to the bottom of the page.
2. Check for the footer conatins "2018".

**Expected Result:**
- The footer text is visible and contains "2018".

---

### TC 5.1.5 – Check the page contains 16 product items

**Preconditions:**
- User is on the Browse Sweets page.

**Test Steps:**
1. Locate all elements with the class .card (representing products).
2. Count visible items

**Expected Result:**
- Exactly 16 product cards are visible.

---

### TC 5.1.6 – Check each product displays correct information

**Preconditions:**
- User is on the Browse Sweets page. Product list is available.

**Test Steps:**
1. For each product:
2. Locate its product name using .card-title.
3. Confirm product description appears via .card-text.
4. Verify the price appears using .text-muted, in the format £x.xx.
5. Check the product image loads correctly and is visible.

**Expected Result:**
- Each product displays:
- Valid name.
- Correct description.
- Correct price (with £ and two decimal places).
- Image is loaded and displayed.

---

### TC 5.1.7 – Verify each product has a corresponding "Add to Basket" button

**Preconditions:**
- User is on the Browse Sweets page. Product data (name and ID) is known.

**Test Steps:**
1. For each product:
2. Locate the .card that contains the product's title.
3. Within that card, locate the "Add to Basket" button.
4. Check that the button contains the correct data-id attribute matching the product's ID.

**Expected Result:**
- Each product card has a corresponding "Add to Basket" button.
- The button includes the correct data-id.

---

## 5.2 Functional testing

### TC 5.2.1 – Verify 'Add to Basket' buttons functionality

**Preconditions:**
* User is on the Browse sweets page.
* Basket is empty

**Test Steps:**
1. Attempt to click on 'Add to Basket' button for 2 items.
2. Observe change and verify that basket counter updates.
3. Go to the basket page.
4. Check that the items are in the basket.

**Expected Result:**
* Basket counter is updated.
* 2 items are added to the basket.

---


## 5.3 Navigation and Menu
### TC 5.3.1 – Verify clicking each navigation link redirects to the correct page from the Your account page

**Preconditions:**
- User is on Sweets page 

**Test Steps:**
1. Navigate from "Sweets" page using each nav link.
2. Verify each redirect

**Expected Result:**
- Each navigation link from the "sweets" page successfully redirects to the correct page.

# 6. Sweet Shop - Basket Page Test Cases

## 6.1 Basket Page – UI & Load Checks
### TC 6.1.1 – Check page title is “Your Basket”

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Look at the main heading at the top of the page.
2. Verify that it says “Your Basket”.

**Expected Result:**
* Page title is “Your Basket”.

---

### TC 6.1.2 – Check page has basket description text

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Read and verify that it provides a helpful description of what to do next.

**Expected Result:**
* The description text is visible (e.g., 'enter your payment and delivery details').

---

### TC 6.1.3 – Verify "Billing address" section title is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Billing address" section title and confirm it's visible.

**Expected Result:**
* "Billing address" section has corresponding title.

---

### TC 6.1.4 – Verify all billing address fields with their labels are visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Check the following field pairs exist in order:

   * Label "First name" → Text input
   * Label "Last name" → Text input
   * Label "Email" → Input (pre-filled with "[you@example.com](mailto:you@example.com)")
   * Label "Address" → Text input
   * Label "Address 2 (Optional)" → Optional text input
   * Label "Country" → Dropdown (default "Choose...")
   * Label "City" → Dropdown (default "Choose...")
   * Label "Zip" → Text input

**Expected Result:**
* All labels appear immediately before their corresponding input fields.

---

### TC 6.1.5 – Verify "Payment" section title is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Payment" section title and confirm it's visible.

**Expected Result:**
* "Payment" section has corresponding title.

---

### TC 6.1.6 – Verify Payment Form fields

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Confirm these labeled fields exist:
   * "Name on card" → Text input
   * "Credit card number" → Text input
   * "Expiration" → Date input (MM/YY format)
   * "CVV" → Numeric input (3–4 digits)

**Expected Result:**
* All payment fields have visible labels positioned correctly.

---

### TC 6.1.7 – Verify "Your Basket" section title is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Your Basket" section title and confirm it's visible.

**Expected Result:**
* "Your Basket" section has corresponding title.

---

### TC 6.1.8 – Verify Product Counter

**Preconditions:**
* Basket is empty
* User is on the Basket page

**Test Steps:**
1. Locate the product count indicator.
2. Observe product indicator is visible and contains '0'.

**Expected Result:**
* Product indicator is visible and shows '0'.

---

### TC 6.1.9 – Verify Total Amount field is visible and displays correct information

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Find the "Total (GBP)" label and confirm it's visible.
2. Check the adjacent value.

**Expected Result:**
* Field shows exactly "£0.00" when empty.

---

### TC 6.1.10 – Verify "Delivery" section title is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Delivery" section title and confirm it's visible.

**Expected Result:**
* "Delivery" section has corresponding title.

---

### TC 6.1.11 – Check Promo code textbox is visible
**Preconditions:**

* User is on the Basket page.

**Test Steps:**
1. Check for:
   * "Promo code" label
   * Text input box

**Expected Result:**
* Input field is visible, empty, and enabled.

---

### TC 6.1.12 – Check “Redeem” button is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Redeem" button and make sure it's visible.

**Expected Result:**
* Button is visible and enabled.

---

### TC 6.1.13 – Check “Empty basket” button is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Empty basket" button and confirm it's visible.

**Expected Result:**
* Button is visible and enabled.

---

### TC 6.1.14 – Check “Continue to Checkout” button is visible

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Locate the "Continue to Checkout" button and confirm it's visible.

**Expected Result:**
* Button is visible.
* Displays exact text "Continue to Checkout".
* In enabled state (clickable).

---

### TC 6.1.15 – Check the page has the banner and it matches 2018

**Preconditions:**
* User is on the Basket page.

**Test Steps:**
1. Scroll to the banner section of the page.
2. Compare the displayed banner with the 2018 design reference.

**Expected Result:**
* The banner is visible and matches the 2018 design/logo.

---


## 6.2 Basket Functionality

### TC 6.2.1 – Add Single Product to Empty Basket

**Preconditions:**
* User is on Browse sweets page
* Basket is empty (counter shows "0")

**Test Steps:**
1. Click "Add to Basket" on any product.
2. Navigate to basket page.
3. Confirm the exact product was added and counter shows 1.

**Expected Result:**
* Basket counter updates to "1".
* Added product appears in basket list with:
  * Correct product name
  * Quantity "x1"
  * Correct unit price
  * Total equals product price

---

### TC 6.2.2 – Add Multiple Quantities of Same Product

**Preconditions:**
* User is on Browse sweets page
* Basket is empty (counter shows "0")

**Test Steps:**
1. Click "Add to Basket" twice on the same product.
2. Navigate to basket page.
3. Confirm the exact product was added and counter shows 2.

**Expected Result:**
* Basket counter updates to "2".
* Added product appears in basket list with:
  * Correct product name
  * Quantity "x2"
  * Correct unit price
  * Total matches line total

---

### TC 6.2.3 – Add Multiple Different Products

**Preconditions:**
* User is on Browse sweets page
* Basket is empty (counter shows "0")

**Test Steps:**
1. Add Product A to basket.
2. Add Product B to basket.
3. Navigate to basket page.

**Expected Result:**
* Basket counter updates to "2".
* Added products appear in basket list with:

  * Correct product names
  * Correct quantities
  * Correct unit prices
  * Total matches line total

---

### TC 6.2.4 – Confirm Dynamic Price Updates

**Preconditions:**
* Basket contains:
  * 2× Product A (£1.00)
  * 1× Product B (£0.75)

**Test Steps:**
1. Click "Delete" on Product A (removes one quantity).
2. Observe change in basket items counter.
3. Click "Empty Basket".
4. Observe change in basket items counter and total price.

**Expected Result:**
* After deletion:
  * Product A shows '1'
  * Basket counter shows '2'
  * Total reduces by £1.00
* After emptying:
  * Basket counter shows '0'
  * Total shows £0.00

**Report Bug:**
* Delete item removes all items instead of just reducing quantity.




### TC 6.2.5 – Check Shipping Cost Addition with even prices

**Preconditions:**
* Basket contains items totaling £1.00

**Test Steps:**
1. Select "Standard Shipping (£1.99)" radio button.

**Expected Result:**
* Total updates to £2.99.
* Selection persists on page refresh.

**Observed:**
* Total shows £11.99

**Issue:**
* Total price is incorrectly calculated. Possibly due to a multiplication or string concatenation bug.

---

### TC 6.2.6 – Check Shipping Cost Addition with Prices Containing Decimal (e.g., £1.50)

**Preconditions:**
* Basket contains items totaling £1.50

**Test Steps:**
1. Select "Standard Shipping (£1.99)" radio button.

**Expected Result:**
* Total updates to £3.49.
* Selection persists on page refresh.

**Observed:**
* Total becomes £NaN

**Issue:**
* Likely a parsing bug — price strings with commas or currency symbols might not be properly converted to numbers.

---

### TC 6.2.7 – Remove Single Item via Delete Button

**Preconditions:**
* Basket contains 2 different products

**Test Steps:**
1. Click "Delete" next to Product A.

**Expected Result:**
* Product A disappears from list.
* Basket counter decrements by 1.
* Total reduces by Product A's price.

---

### TC 6.2.8 – Empty basket via "Empty Basket" link

**Preconditions:**
* Basket contains 2 different products

**Test Steps:**
1. Click "Empty Basket" link.
2. Confirm basket is emptied.

**Expected Result:**
* All items removed from list.
* Total shows £0.00.
* Counter resets to "0".

---

### TC 6.2.9 – Verify Basket Persistence

**Preconditions:**
* Basket contains 2 different products

**Test Steps:**
1. Refresh page.
2. Navigate out of basket to Home page.
3. Return back to the basket page.

**Expected Result:**
* All items remain in basket.
* Quantities and prices remain unchanged.
* Total persists correctly.

---

### TC 6.2.10 – Validate Promo Code Field Input Types

**Preconditions:**
* User has at least 1 item in basket
* User is on the Basket page and promo code input is visible

**Test Steps:**
1. Clear the promo code input field.
2. Enter each of the following values and attempt to apply:
   * Emojis (e.g., 🎁🔥)
   * Special characters (e.g., @#!\$%^)
   * Mixed symbols and letters (e.g., SAVE\@10, 123\$)
   * Too long string (e.g., more than 20 characters)
   * Blank/space input
3. Enter a valid promo code like SWEET10 or DISCOUNT25.

**Expected Result:**
* Invalid entries should be rejected or ignored.
* Valid promo codes should be accepted and apply the correct discount.
* Error message should appear for invalid codes.

**Bug Reported:**
* Invalid promo message is not shown.

---

## 6.3 Navigation and Menu

### TC 6.3.1 – Verify clicking each navigation link redirects to the correct page from the Your account page

**Preconditions:**
- User is on Basket page

**Test Steps:**
1. Navigate from "Basket" page using each nav link.
2. Verify each redirect

**Expected Result:**
- Each navigation link from the "Basket" page successfully redirects to the correct page.

## 6.4 Billing address and Payment form validation

### TC 6.4.1 – Validate First Name Field Input Types

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear the first #name input.
2. Iterate over the following inputs: \['😀😃😄', '@#!\$', '12345', 'John']
3. For each input:
   * Type the input.
   * Assert whether the invalid feedback is shown.

**Expected Result:**
* Only alphabetic input should be accepted without validation error.
* Others should trigger invalid feedback.

---

### TC 6.4.2 – Validate Last Name Field Input Types

**Preconditions:**
* User is on Basket page
* Checkout form is visible

**Test Steps:**
1. Clear the last #name input (use .last()).
2. Repeat test inputs from TC 6.4.1: \['😀😃😄', '@#!\$', '12345', 'John']

**Expected Result:**
* Only alphabetic input should be accepted without validation error.
* Others should trigger invalid feedback.

---

### TC 6.4.3 – Validate Email Field Input Format

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #email.
2. Iterate over the following inputs:
   \['john.doe', 'john@', '@gmail.com', 'john@@gmail.com', 'john.doe\@.com', 'john.doe\@com', 'john.doe@ gmail.com', '😊@gmail.com']
3. For each:
   * Type into the email field.
   * Verify validation message appears.

**Expected Result:**
* Only valid email format (e.g., [test@example.com](mailto:test@example.com)) should pass.

---

### TC 6.4.4 – Validate Address Field Input Types

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #address.
2. Test inputs:
   \['🏡 123 St', '123 St 🚀', '!@#\$%^']
3. For each:
   * Type input.
   * Verify validation message appears.

**Expected Result:**
* Special characters should be accepted.
* Emojis should not pass (if validation exists).
* Field must not be empty.

---

### TC 6.4.5 – Validate Address 2 (Optional) Field Input Types

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #address2.
2. Test input examples:
   \['🌆🏢', '@#!\$%^&\*()', '56', 'Suite B', 'Apt 3B – 5th Floor']
3. For each:
   * Type input.
   * Verify validation message appears.

**Expected Result:**
* This field is optional — no validation error on empty.
* Should accept alphanumeric + special characters.

---

### TC 6.4.6 – Validate Zip Field Format

**Preconditions:**
* User is on Basket page

**Test Steps:**

1. Clear #zip.
2. Iterate:
   \['ABC123', '123AB', '😊123', '!@#\$', '12 345']
3. For each:
   * Type value.
   * Assert validation result.

**Expected Result:**

* Only 5-digit numeric values should be valid.

---

### TC 6.4.7 – Validate Cardholder Name Field

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #cc-name.
2. Test with:
   \['Jane123', '👑Jane', 'Jane\$', '123456']
3. For each:
   * Type value.
   * Assert validation result.

**Expected Result:**
* Only alphabetic name should be valid.

---

### TC 6.4.8 – Validate Card Number Field

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #cc-number.
2. Test with:
   \['4111-1111-1111-1111', 'abcd efgh', '😊😊😊😊', '4111 1111 1111 1111', '4111!1111!1111!1111']
3. For each:
   * Type value.
   * Assert validation result.

**Expected Result:**
* Only numeric 16-digit string should pass.

---

### TC 6.4.9 – Validate Expiry Date Format

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #cc-expiration.
2. Try inputs:
   \['13/25', '00/23', '01-25', '1/2025', 'Jan 2025', '😊']
3. For each:

   * Type value.
   * Assert validation result.

**Expected Result:**
* Accept MM/YY format only.

---

### TC 6.4.10 – Validate CVV Field

**Preconditions:**
* User is on Basket page

**Test Steps:**
1. Clear #cc-cvv.
2. Test with:
   \['12', '12345', 'abc', '!@#', '😊']
3. For each:
   * Type value.
   * Assert validation result.

**Expected Result:**
* Only 3-digit number should be valid.

---

## 6.5 checkout flow tests

### TC 6.5.1 – Valid Checkout Flow

Precondition:
User has at least one product in the basket.

**Test Steps:**
1. Add a product to the basket.
2. Navigate to checkout.
3. Fill in all billing and payment fields with valid data.
4. Submit the form.

**Expected Result:**
- Checkout is completed successfully. Basket is empty.
- Report bug BASKET DOES NOT CLEAR itself afyer successful scheckout

---

### TC 6.5.2 – Attempt Checkout with Empty Basket

Precondition:
Basket is empty.
Billing and adress form is filled with valid details

**Test Steps:**
1. Navigate to checkout without adding any products.
2. Attempt to submit the form.

**Expected Result:**
- Checkout should not proceed. A warning like “Basket is empty” or disabled checkout button should be shown.
- report bug payment passes with empty basket;

---

### TC 6.5.3 – Attempt Checkout with Partially Completed Form

Precondition:
User has alteast 1 item in the basket.

**Test Steps:**
1. Go to checkout page.
2. Leave required fields (e.g., first name, card number) blank.
3. Try to submit the form.

**Expected Result:**
- Form should not submit. Inline validation errors should appear for incomplete/invalid fields.

---

### TC 6.5.4 – Attempt Checkout with Invalid Form Inputs

Precondition:
User has items in the basket.

**Test Steps:**
1. Fill forms with valid data except for 1 field (e.g., “---” for cvv).
2. Submit the form.

**Expected Result:**
- Form should not submit. Proper error messages should be shown.

---
















