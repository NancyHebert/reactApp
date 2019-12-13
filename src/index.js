import React, { Fragment } from 'react';
//import ReactDOM from 'react-dom';
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import MasterForm from './App.js';
import * as serviceWorker from './serviceWorker';

// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Contact from "./pages/Contact/ContactPage";
import Signup from "./pages/SignUp/SignUpPage"

import './index.css';

const App = () => (
  <Fragment>
    <Nav />
    <div className="container">
      <Route exact={true} path="/" component={Home} />
      <Route exaxt path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/signup" component={Signup}/>
    </div>
  </Fragment>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
