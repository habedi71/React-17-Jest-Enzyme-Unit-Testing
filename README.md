# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `installing Enzyme Adapter for React 17`

For React 17 you need to install @wojtekmaj/enzyme-adapter-react-17 package.
Enzyme's dependencies have not yet been updated to declare React 17 in peerDependencies. You need to add --legacy-peer-deps to the install command for it to work correctly:

> npm install --save-dev --legacy-peer-deps @wojtekmaj/enzyme-adapter-react-17
