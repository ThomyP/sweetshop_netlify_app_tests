# 🍬 Sweet Shop Automated Testing

Welcome to the Sweet Shop Test Suite!
This project contains beautifully crafted automated UI and functional tests for the 🍭 Sweet Shop web app.

🧪 These tests validate core behaviors such as layout structure, page navigation, user input validation, and basket interactions — ensuring the sweetest user experience!
📋 All test cases are meticulously documented in TestCases.md and mirrored in Jira for traceability, execution tracking, and bug management.

## ✅ Test Summary
| Metric                 | Count            |
| ------------------     | -----------------|
| 🎯 **Total Tests**    | 110               |
| ✅ **Passing**        |  86               |
| ❌ **Failing**        | 24                |
| 📄 **Spec File**      | `sweetshop.cy.js` 
  

## 🐞 Test Management & Bug Tracking

All test cases are maintained in the TestCases.md file and are also mirrored in Jira to track execution results and bug reports.

📋 A detailed explanation of the Jira process (test documentation + bug reporting) is available here:

🔗 [Jira Test & Bug Reporting Process](./JiraProcess.md)

✅ Functional test cases are written per page/module and linked below:
🔍 Full Test Case Index

- [1. About Page](cypress/e2e/TestCases.md#1-sweet-shop---about-page-test-cases)
- [2. Login Page](cypress/e2e/TestCases.md#2-sweet-shop---login-page-test-cases)
- [3. Your Account Page](cypress/e2e/TestCases.md#3-sweet-shop---your-account-page-test-cases)
- [4. Home Page](cypress/e2e/TestCases.md#4-sweet-shop---home-page-test-cases)
- [5. Sweets Page](cypress/e2e/TestCases.md#5-sweet-shop---sweets-page-test-cases)
- [6. Basket Page](cypress/e2e/TestCases.md#6-sweet-shop---basket-page-test-cases)  
   

📄 View the full test case documentation:
➡️ [here](cypress/e2e/TestCases.md).


## 📁 Project Structure

```
📁sweetshop_project
├──📁cypress                     – Cypress test framework folder
│   └── 📁e2e
│        ├── 🧾 `sweetshop.cy.js`– Main Cypress test specification
│        └── 📝 `TestCases.md`   – Fully detailed test cases
├── ⚙️ `cypress.config.js`       – Cypress configuration file
├── 📘 `README.md`               – Project documentation (this file)
└── 📦 `package.json`            – Project dependencies and npm scripts


```


## ✅✨ Setting Up the Sweet Shop Test Suite

Follow these magical steps to set up and run the automated tests for the **Sweet Shop** website. 🍬🔍

### 🧰 Tech Stack Requirements

- 🟢 [Node.js](https://nodejs.org/) (v14 or higher recommended)
- 📦 [npm](https://www.npmjs.com/) (comes with Node.js)
- 🧑‍💻 [Git](https://git-scm.com/) (optional, for cloning the repo)

---

### 📥 Installation

1. 🚀 Clone this repository (or download as ZIP and extract):

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. 📦 Install the dependencies:

    ```bash
    npm install
    ```

---

### 🧪 Running Tests

- 🖥️ Launch the Cypress Test Runner (interactive mode):

    ```bash
    npm run cyo
    ```

- ⚙️ Run all tests in headless mode:

    ```bash
    npm run cyr
    ```