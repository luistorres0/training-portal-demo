import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginView from "./LoginView/LoginView";
import MainMenuView from "./MainMenuView/MainMenuView";
import CustomerServiceView from "./CustomerServiceView/CustomerServiceView";
import RepairsView from "./RepairsView/RepairsView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginView setIsLoggedIn={setIsLoggedIn} />
          </Route>

          {isLoggedIn && (
            <Switch>
              <Route path="/menu">
                <MainMenuView />
              </Route>
              <Route path="/customer-service">
                <CustomerServiceView />
              </Route>
              <Route path="/repairs">
                <RepairsView />
              </Route>
            </Switch>
          )}

          <Route>
            <h1>Not found</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
