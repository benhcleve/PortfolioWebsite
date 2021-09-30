import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeButtons from "../components/homeButtons";
import construction1024 from "../Images/construction1024.png";

const HomePage = () => {
  return (
    <>
      <HomeButtons />
      <Container fluid className="vh-100 " style={{ backgroundColor: "black" }}>
        <Row className=" align-items-center">
          <Carousel fade fluid style={{ width: "50%", margin: "auto" }} nextLabel="" prevLabel="">
            <Carousel.Item>
              <img className="d-block w-100" src={construction1024} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={construction1024} alt="Second slide" />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={construction1024} alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
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
