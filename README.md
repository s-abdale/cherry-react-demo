# React app exploration

Hello Weekend Sprinters! This repo has some notes on what we covered in our call today, specifically React router dom and Links. To see more, check out the new pages.

Quick note on what broke during the demo, react-router-dom hadn't been installed so I fixed it by running the following command in my terminal:
  ```npm i react-router-dom```

## React notes
How to connect node backend to react frontend:
  - https://www.geeksforgeeks.org/how-to-connect-node-js-with-react-js/


Commands example:
```
  npx create-react-app cherry
  npx express-generator cherry-api
```

How to create react app:
  (_you'll need to install node first_)
1. npx create-react-app projectNameHere
    - there are multiple ways to start. the ```create-react-app``` command uses webpack and babel
2. cd into the folder
3. npm start
4. clear out react boilerplate stuff and add in your code

App structure:
- top level: index.js
    - we don't really code in this page
- next: app.js
    - this is where you plug in your pages/components
- finally: everything in the ./components folder

React router:
- Top level: Router
    - this is where you put shared components that you want to see all the time (headers, footers, navigation etc.)
    - this also contains the list of Routes ...
- Second level: Routes
    - this contains the list of different pages
- Last level: Route
    - this is each individual route/page
    - each Route contains a path and an element. 
        - path = the actual url path that you see in the browser
        - element = the code that gets loaded up when you go to that path