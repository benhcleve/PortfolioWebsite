import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BusinessPage = () => {
  return (
    <Container fluid>
      <Row style={{ backgroundColor: "black" }}>
        <Col></Col>
        <Col>
          <h1 className="text-center vh-100">Business</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default BusinessPage;