import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Home from "./Components/Home/Home";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";
import RoseDetails from "./Components/RoseDetails/RoseDetails";
import LogIn from "./Components/LogIn/LogIn";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <Container>
      <p>welcome,{loggedInUser.name}</p>

      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/rose_id/:rose_id">
              <RoseDetails />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </Container>
  );
}

export default App;
