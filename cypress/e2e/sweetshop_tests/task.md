 
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





    
