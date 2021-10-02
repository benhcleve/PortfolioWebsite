import React from "react";
import { Row, Button, Card } from "react-bootstrap";
import constructionCardWide from "../Images/constructionCardWide.png";

const BusinessCard = () => {
  return (
    <Row className="d-flex justify-content-center" style={{ marginLeft: "auto", marginRight: "auto", paddingBottom: "100px" }}>
      <Card style={{ width: "50%" }}>
        <Card.Img variant="top" src={constructionCardWide} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default BusinessCard;
