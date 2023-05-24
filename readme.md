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
