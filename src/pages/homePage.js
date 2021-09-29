import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeButtons from "../components/homeButtons";

const HomePage = () => {
  return (
    <>
      <HomeButtons />
      <Container fluid className="vh-100 " style={{ backgroundColor: "black" }}>
        <Row className=" align-items-center">
          <div>
            <h1 style={{ textAlign: "center", backgroundColor: "white" }}>Home</h1>
          </div>

          <Carousel fluid style={{ width: "50%", margin: "auto" }}>
            <Carousel.Item>
              <img className="d-block w-100" src=" " alt="First slide" />
              <Carousel.Caption>
                <h3>Header 1</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src=" " alt="Second slide" />

              <Carousel.Caption>
                <h3>Header 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src=" " alt="Third slide" />

              <Carousel.Caption>
                <h3>Header 3</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      ;
    </>
  );
};

export default HomePage;
