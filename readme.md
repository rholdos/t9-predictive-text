# T9 Predictive text

<br>

### Overview

- Solution implements [T9 Algorithm](https://en.wikipedia.org/wiki/T9_(predictive_text)) and [Trie data structure](https://stackfull.dev/trie-in-javascript-the-data-structure-behind-autocomplete)
- [ReactJS](https://reactjs.org/) SPA on frontend
- [NodeJS](https://nodejs.org/en/about/) on backend
- Bundled with [Vite](https://vitejs.dev/)

An app that simulates a modern-looking phone with an old 3×4 numeric keypad. User can interact with the keypad by using mouse or keyboard. Numeric input is sent to and processed on the NodeJS server, which uses a Trie populated with dictionary words. The server then traverses the Trie and finds the best matching words for given numeric input. The result is predictive text suggestions sent to the frontend and the user can compose a message with these suggestions.

<br>

### Getting started

```js
// Run the commands in root directory
$ npm install
// then
$ npm start
```

- Node.js server should start on http://localhost:3000
	- assuming the port is free
- React SPA should start on http://127.0.0.1:8000/
	- and automatically open in default browser

<br>

### Assignment

Implement a number to word list converter as a Node backend and React fronted.

The backend should provide a rest endpoint that converts a given numeric string into a list of corresponding words in the style of [T9](https://en.wikipedia.org/wiki/T9_(predictive_text)).

For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf
The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.

The solution should be shared with us in a git repository with real history included.

It's OK not to deliver 100%, but the more working parts the better.
For example if you struggle with the backend, focus on frontend and just mock the API calls.
Take this task as a chance to present your skills.
If you are good in UI, let us see that.
If you are more into the backend, it's OK to have simple FE.
If you know what tests are for, don't keep it for yourself, show it in the code.

Ways to go beyond the minimal solution could include for example:
- great project setup
- phone keyboard-like UI
- filtering to include only real words based on a suitable word list
- mobile app in React Native
