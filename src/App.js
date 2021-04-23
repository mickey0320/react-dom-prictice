import React from "react";
import { BrowserRouter as Router, Route } from "../react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/profile/:id" component={Profile} />
    </Router>
  );
};

export default App;
