import React from "react";
import Home from "./component/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/header";
import Rarity from "./component/rarity";
import Mint from "./component/mint";
function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Rarity />
          </Route>

          <Route exact path="/rarity">
            <Home />
          </Route>

          <Route exact path="/mint">
            <Mint />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
