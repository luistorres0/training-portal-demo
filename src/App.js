import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./LoginView/LoginView";
import MainMenuView from "./MainMenuView/MainMenuView";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginView />
          </Route>
          <Route path="/menu">
            <MainMenuView />
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
