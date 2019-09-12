import React from "react";
import "./App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import History from "./Components/history";
import Home from "./Components/home";
import Navbar from "./Components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />,
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/history" component={History} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
