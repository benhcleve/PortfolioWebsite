import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import BusinessPage from "./pages/businessPage";
import EntertainmentPage from "./pages/entertainmentPage";
import HomePage from "./pages/homePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/business" component={BusinessPage} />
        <Route path="/entertainment" component={EntertainmentPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
