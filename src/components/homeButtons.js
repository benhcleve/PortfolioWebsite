import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Building, Controller, Diagram2, Facebook, JournalCheck, Palette } from "react-bootstrap-icons";

const ButtonIcon = (props) => {
  return (
    <Row style={{ backgroundColor: "rgba(0,0,0,0.5)", margin: "25px auto auto auto", padding: "25px", borderRadius: "128px", border: "solid", borderWidth: "10px", width: "100%" }}>
      <h3>{props.title}</h3>
      <br />
      {props.icon}
    </Row>
  );
};

const HomeButtons = () => {
  return (
    <Container fluid>
      <Link to="/Business">
        <Button className="vh-100 col-2" style={{ border: "none", background: "linear-gradient(90deg, rgba(25,75,100,1) 0%, rgba(0,155,184,1) 25%, rgba(0,155,184,1) 75%, rgba(25,75,100,1) 100%)", position: "absolute", left: 15, borderRadius: "100px" }}>
          <ButtonIcon title={"Business"} icon={<Building size={128} />} />
          <ButtonIcon title={"Databases"} icon={<Diagram2 size={128} />} />
          <ButtonIcon title={"Organization"} icon={<JournalCheck size={128} />} />
        </Button>
      </Link>

      <Link to="/Entertainment">
        <Button className="vh-100 col-2" style={{ border: "none", background: "linear-gradient(90deg, rgba(111,65,65,1) 0%, rgba(180,116,116,1) 25%, rgba(185,95,95,1) 75%, rgba(100,25,25,1) 100%)", position: "absolute", right: "15px", alignContent: "left", borderRadius: "100px" }}>
          <ButtonIcon title={"Entertainment"} icon={<Controller size={128} />} />
          <ButtonIcon title={"Social Media"} icon={<Facebook size={128} />} />
          <ButtonIcon title={"Visual Design"} icon={<Palette size={128} />} />
        </Button>
      </Link>
    </Container>
  );
};

export default HomeButtons;
