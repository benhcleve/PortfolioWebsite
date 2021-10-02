import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideMenuMain from "../components/sideMenuMain";

const EntertainmentPage = () => {
  return (
    <>
      <SideMenuMain />
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col></Col>
          <Col>
            <h1 className="text-center vh-100">Entertainment</h1>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default EntertainmentPage;
