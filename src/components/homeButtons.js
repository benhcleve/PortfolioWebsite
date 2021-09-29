import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomeButtons = () => {
  return (
    <Container fluid>
      <Link to="/Business">
        <Button className=" text-center vh-100 col-3" style={{ backgroundColor: "blue", position: "absolute", left: 0 }}>
          Business Left Brain
        </Button>
      </Link>

      <Link to="/Entertainment">
        <Button className="text-center vh-100 col-3" style={{ backgroundColor: "green", position: "absolute", right: "0px" }}>
          Entertainment Right Brain
        </Button>
      </Link>
    </Container>
  );
};

export default HomeButtons;
