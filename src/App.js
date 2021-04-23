import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "../react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:id" component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
