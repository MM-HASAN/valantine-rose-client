import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Home.css";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const [roses, setRoses] = useState([]);
  useEffect(() => {
    //fetch("http://localhost:5000/roses")
    fetch("https://pumpkin-pudding-22933.herokuapp.com/roses")
      .then((response) => response.json())
      .then((data) => setRoses(data));
  });

  return (
    <Container>
      <Row>
        {roses.map((rose) => (
          <div className="rose-style col-md-4">
            <h1>name:{rose.name}</h1>
            <p> price= {rose.rosePrice}</p>
            <img src={rose.imageUrl} alt="roseImg" />
            <Button className="btn">
              <Link to={"/rose_id/" + rose._id}>pick your rose</Link>
            </Button>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
