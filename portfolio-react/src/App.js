import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import News from "./components/News";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FourZeroFour from "./components/FourZeroFour";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
            <NavBar />
            <Route exact path="/">
              <Home />
              <News />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/404">
              <FourZeroFour />
            </Route>
            {/* <Footer /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
