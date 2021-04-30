import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const RoseDetails = () => {
  const [roses, setRoses] = useState([]);
  const { rose_id } = useParams();
  useEffect(() => {
    //fetch("http://localhost:5000/roses")
    fetch("https://pumpkin-pudding-22933.herokuapp.com/roses")
      .then((response) => response.json())
      .then((data) => setRoses(data));
  }, []);

  const rose = roses.find((rose) => rose._id === rose_id);
  console.log(rose);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h2> the rose id is:{rose_id}</h2>
          {/*<h2 style={{ color: "red" }}> rose name:{rose.name}</h2>
          <img src={rose.imageUrl} alt="rose-img"></img>
          <p>price is: {rose.rosePrice}</p>
  */}
        </Col>
      </Row>
    </Container>
  );
};

export default RoseDetails;
