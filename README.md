# Atllas Software Engineering Take-Home Exercise

🌟 Welcome to the Atllas take-home coding exercise! 🌟

This full-stack exercise involves building a form component in React that also makes a request to the Node.js/Express.js backend. We imagine you should spend around _four hours at minimum_ to implement this feature, but want to emphasize that there is no specific deadline, or ticking clock for the implementation time. You can feel free to break the work up over multiple days. The entire point of this exercise is to get a good sense of how you build software.

Also, please keep in mind that you are not specifically limited to four hours. If you want to spend more time than that, using this as an opportunity to learn a new library or technology, or just generally making it more awesome, you are of course free to do so.

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) to be installed. We recommend using at least Node v14.

1. Start by downloading this project.

1. Initialize the git repository, run `git init` to do so.

1. In the root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/agents')` and it will automatically hit `localhost:3001/agents`.
- We have a linter installed but we understand you can't catch them all however, if you are able to minimize the number of linting errors that would be fantastic! Feel free to implement your own linting style if you wish.
- We provided you with some basic styling for the agents, feel free to change this to reflect the acceptance criteria and make it more appealing.
- Design the web application to be able a production amount of information.

## Versioning

- Node version: v14.18.3
- React version: 17.0.2

## Tech stack

The tech stack used to build the APP is:

1. React - a JavaScript library for building user interfaces
2. Formik- a popular form management library for React
3. React-Toastify - a JavaScript library to add toast notifications to your application with ease and can also be used to set notifications and alerts.
4. Material UI - an open-source React component library that implements Google's Material Design.
5. Axios - allows us to communicate with APIs easily in our React apps.
6. Express - to build a single page, multipage, and hybrid web application.
7. Redux - an open-source JavaScript library used to manage application state
8. React-spinner-loader - provides simple React.js spinner component which can be implemented for async wait operation before data load to the view
9. Yup - is a JavaScript schema builder for value parsing and validation.
10. Typescript - enables developers to add type safety to their projects.
11. MUI Paginator - enables the user to select a specific page from a range of pages.
12. SQLite - integrated with the application that accesses the database
13. Sequelize - a Node. js-based Object Relational Mapper
14. Joi - to create blueprints of Javascript objects that ensure that we process and ultimately accept accurate data

## Functionality

With the AgentApp, you can perform the following actions:

1. You can Add Agent from 'Join the Team' button
   - Opens a FORMIK form in a modal
   - Validates fields (Formik and Yup)
   - Can add profile_url (optional)
   - A toaster will notify the request success.
2. List all the agents
   - Can view all the agents in list
   - Search the agents by their names or license
   - Pagination at Backend
3. Add anonymous reviews for the agents
   - Can add reviews for the agents.
   - A toaster will notify the request success.
   - Validations are added to the form by using "yup"
4. Can View all reviews of the agents
   - By clicking on show button you can view the reviews associated with that agent.
