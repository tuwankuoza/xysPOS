import React from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarApp from "./components/NavbarApp";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Subscription from "./views/Subscription";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  return (
  <div>
    <NavbarApp />
    <LoginModal />
    <RegisterModal />
    <Switch>

      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>

      <Route path="/subs" exact>
        <Subscription />
      </Route>

      <Route path="/"exact>
        <Home />
      </Route>   
      
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
