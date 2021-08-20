import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Logout from "./components/Logout";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to="/logout" data-testid="logoutButton" >logout</Link>
        </header>

      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/login">
        <Login />
      </Route>

      <PrivateRoute component={Logout} exact path="/logout" />

      <PrivateRoute component={BubblePage} exact path="/bubbles"/>

      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'. ✅
//2. Render BubblePage as a PrivateRoute ✅
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page. ✅