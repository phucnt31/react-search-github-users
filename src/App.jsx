import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Error, Login, PrivateRoute, AuthWrapper } from "./pages";

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
};

export default App;
