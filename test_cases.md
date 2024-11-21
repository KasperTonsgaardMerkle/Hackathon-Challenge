# How to run the tests

install dependencies:
```
npx install
```

Run the tests:
```
npx mocha tests/index_test.js
```

# Test 1
Given the user is on any page of the website
When the user looks at the top of the screen
Then the user should see a Navigation bar

# Test 2
Given the user is on any page of the website
When the user looks at the Naviation bar
Then the user should see a link to the Contact page

# Test 3
Given the user is on any page of the website
Whent the user clicks on the Contact link
Then the user should be directed to the Contact page

# Test 4
Given the user is on the Contact page
When the user looks at the page
Then the user sees a contact form

# Test 5 
Given the user is on any page of the website
When the user enters a url that does not exist
Then the user is redirected to a generic 404 page

# Test 6
Given the user is on the homepage
When the user looks at the form
Then the user sees a Username label next to the username text box

# Test 7
Given the user is on the homepage
When the user looks at the form
Then the user sees only one submit button

# Test 8
Given the user is on the homepage
When the user inputs text into the email field
Then the input is automatically validated

# Test 9
Given the user is on the homepage
When the user clicks on the submit button
Then the submit button is enabled and clickable

# Test 10
Given the user is on the homepage
When the user clicks on the submit button
Then the user gets a nice message