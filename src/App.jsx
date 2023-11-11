import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, Error, Login, PrivateRoute } from "./pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact={true}>
          <Dashboard />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
