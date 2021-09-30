import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BusinessCard from "../components/businessCard";

const BusinessPage = () => {
  return (
    <Container fluid style={{ justifyContent: "center" }}>
      <Row style={{ backgroundColor: "black" }}>
        <h1 className="text-center">Business</h1>

        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </Row>
    </Container>
  );
};

export default BusinessPage;
