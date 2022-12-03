import * as React from "react";
// import Home from "./components/home";
import Home from "./components/home";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { EditUser } from "./components/EmployeeForm/ediit";

export default function App() {
    return (
        <Router>
      <div>
        <Switch>
        <Route path="/edit-user">
        <EditUser />
      </Route></Switch>
        <Route path="/home">
           <Home/>
          </Route>
      </div>  </Router>
    );
}

