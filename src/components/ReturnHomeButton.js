import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HouseFill, ChevronLeft } from "react-bootstrap-icons";

const ReturnHomeButton = () => {
  return (
    <Container style={{ position: "sticky", top: "50px", marginLeft: "100px", marginTop: "-65px", zIndex: "100", backgroundColor: "transparent" }}>
      <Link to="/Home">
        <Button style={{ backgroundColor: "white", border: "none" }}>
          <ChevronLeft size={48} color={"black"} />
          <HouseFill size={48} color={"black"} />
        </Button>
      </Link>
    </Container>
  );
};

export default ReturnHomeButton;
