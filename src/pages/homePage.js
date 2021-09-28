import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "gray" }}>
        <Col fuid>
          <h1 className="text-center vh-100" style={{ backgroundColor: "blue" }}>
            Business Left Brain
          </h1>
        </Col>
        <Col>
          <h1 className="text-center vh-100">Center</h1>
        </Col>
        <Col>
          <h1 className="text-center vh-100" style={{ backgroundColor: "green" }}>
            Art Right Brain
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
