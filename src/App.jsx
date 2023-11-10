import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Login } from "./pages";

const App = () => {
  return (
    <Router>
      <Route path="/" exact={true}>
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
};

export default App;
