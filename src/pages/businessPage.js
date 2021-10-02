import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BusinessCard from "../components/businessCard";
import ReturnHomeButton from "../components/ReturnHomeButton";

const BusinessPage = () => {
  return (
    <>
      <ReturnHomeButton />
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <h1 className="text-center">Business</h1>

          <BusinessCard />
          <BusinessCard />
          <BusinessCard />
        </Row>
      </Container>
    </>
  );
};

export default BusinessPage;
