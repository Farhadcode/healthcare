import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import Contect from "./Components/Contect/Contect";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import Servises from "./Components/Servises/Servises";
import AuthProvider from "./Contexts/AuthProvider";
import Login from "./Login/Login/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar></NavBar>
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
          <Route path="/details/:serviceId">
            <Details></Details>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
