import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./LoginView/LoginView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>
          <Route path="/menu">
            <h1>Main Menu</h1>
          </Route>
          <Route>
            <h1>Not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
