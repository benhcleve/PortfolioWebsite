import React from "react";
import { Container, Row } from "react-bootstrap";
import BusinessCard from "../components/businessCard";
import SideMenuMain from "../components/sideMenuMain";

const BusinessPage = () => {
  return (
    <>
      <SideMenuMain />
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
