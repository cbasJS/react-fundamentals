import React from "react";
import ReactDOM from "react-dom";

import firebase from "firebase";

import App from "./Components/App";

import * as serviceWorker from "./serviceWorker";

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCejM0tiJhrNLg1OJlZ7DkCtZH7ASBLRKU",
  authDomain: "react-fundamentals-3996c.firebaseapp.com",
  databaseURL: "https://react-fundamentals-3996c.firebaseio.com",
  projectId: "react-fundamentals-3996c",
  storageBucket: "react-fundamentals-3996c.appspot.com",
  messagingSenderId: "173748084421"
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
