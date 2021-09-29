import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
      <Header/>
        <Switch>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          {/* This is default route.Make sure its always written all these at end . */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
