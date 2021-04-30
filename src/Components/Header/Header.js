import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <Container>
      <Row className="header">
        <Col md={6}>
          <h1> Valantine-Roses</h1>
          <p>pick your rose in cheap rate.</p>
        </Col>

        <Col md={6}>
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/orders">Orders</a>
              </li>
              <li>
                <a href="/admin">Admin</a>
              </li>
              <li>
                <a href="/login">LogIn</a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
