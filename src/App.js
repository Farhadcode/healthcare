import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Contect from "./Components/Contect/Contect";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Servises from "./Components/Servises/Servises";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Servises></Servises>
        </Route>
        <Route path="/contect">
          <Contect></Contect>
        </Route>


        <Route exact path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
