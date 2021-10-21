import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginView from "./LoginView/LoginView";
import MainMenuView from "./MainMenuView/MainMenuView";
import CustomerServiceView from "./CustomerServiceView/CustomerServiceView";
import RepairsView from "./RepairsView/RepairsView";

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
          <Route path="/customer-service">
            <CustomerServiceView />
          </Route>
          <Route path="/repairs">
            <RepairsView />
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
