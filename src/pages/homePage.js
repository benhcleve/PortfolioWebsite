import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeButtons from "../components/homeButtons";

const HomePage = () => {
  return (
    <>
      <HomeButtons />
      <Container fluid className="vh-100" style={{ backgroundColor: "black" }}>
        <Row className=" align-items-center">
          <div>
            <h1 style={{ textAlign: "center", backgroundColor: "white" }}>Home</h1>
          </div>
        </Row>
      </Container>
      ;
    </>
  );
};

export default HomePage;
