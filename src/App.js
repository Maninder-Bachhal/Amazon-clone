import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
const promise = loadStripe(
  "pk_test_51Jhf5PSIjT45MCbFUWDVnWgAxlAYxqlhaaj7gtsmn1lYu9UIDFIzzidNdA0ow6RpcM2U7KSQwZvcN8Csv6ejkOuy001pzVmyuz"
);

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //it is like a listner
    // will only run once when the app component loads...
    //when someone create or signin it will be redirected to this page and this will run.
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in and just reloded it.
        //Add this user
        //This dispatch an object to data layer
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        //Remove this user
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* This is default route.Make sure its always written all these at end . */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
