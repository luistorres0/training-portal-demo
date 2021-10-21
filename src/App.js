import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginView from "./LoginView/LoginView";
import MainMenuView from "./MainMenuView/MainMenuView";
import CustomerServiceView from "./CustomerServiceView/CustomerServiceView";
import RepairsView from "./RepairsView/RepairsView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
            <div style={{ width: "100%", textAlign: "center", position: "absolute", top: "45%" }}>
              <h1>Page Not found</h1>
              <h2>
                Please login <Link to="/">here</Link>
              </h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
