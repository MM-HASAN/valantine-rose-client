import React, { useContext } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { userContext } from "../../App";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import "./LogIn.css";

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const handelGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
          {" "}
          <h1> Please sign in first </h1>
        </Card.Header>
        <Card.Body>
          <Button className="btn" onClick={handelGoogleSignIn}>
            sign in with your google account{" "}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LogIn;
