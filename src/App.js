import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Contect from "./Components/Contect/Contect";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Servises from "./Components/Servises/Servises";
import AuthProvider from "./Contexts/AuthProvider";
import Login from "./Login/Login/Login";
import Register from './Registers/Register';

function App() {
  return (
    <AuthProvider>
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
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
