# Polling App

A ReactJS based Polling App. The features include displaying polls, voting on specific poll and 
creating new questions.

## Requirements
1. Node v12+
2. NPM v6+ or Yarn v1+


## Setup

1. Clone this repository
2. copy `.env.example` to `.env`
3. run `yarn` or `npm install`


### Running the app

run `yarn start` or `npm start`

### Building the app

run `yarn run build` or `npm run build`

### Testing the app

run `yarn test` or `npm run test` to run the interactive test runner powered by Jest

### Additional Information

* The uses SWC for the normal build, PostCSS for global styling and react-scripts for running Jest
  tests. There was an issue between SWC and react-router-dom while running Jest tests which I'm still 
  trying to figure out.
* The app is a demonstration of the ability of Redux store to provide a stable and consistent 
state management. It uses middleware to provide Async API actions.  
* Different CSS techniques were used to demonstrate the flexibility of ReactJS to deal either with 
global CSS rules or scoped ones.  
* A plan to E2E tests using [Puppeteer](https://github.com/puppeteer/puppeteer) is planned (hopefully) 
