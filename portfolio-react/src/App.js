import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import News from "./components/News";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserInfo from "./components/UserInfo";
import SetGoal from "./components/SetGoal";
import Dashboard from "./components/Dashboard";
import FourZeroFour from "./components/FourZeroFour";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    fetch ("/account")
    .then(res => res.json())
    .then(data => {
      if (data.name) {
        console.log(data);
        setUser(data);
        setIsLoggedin(true);
      } else {
        setUser(null);
        setIsLoggedin(false);
      }
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Switch>
        <div className="App">
            <NavBar user={user} isLoggedin={isLoggedin} />
            <Route exact path="/">
              <Home />
              <News />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/login">
              <Login setUser={setUser} setIsLoggedin={setIsLoggedin} />
            </Route>
            <Route exact path="/signup">
              <Signup setUser={setUser} setIsLoggedin={setIsLoggedin} />
            </Route>
            <Route exact path="/user-info">
              <UserInfo user={user} setUser={setUser} isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
            </Route>
            <Route exact path="/set-goal">
              <SetGoal user={user} setUser={setUser} />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard user={user} setUser={setUser} />
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
