import React from "react";
import { Container, Row } from "react-bootstrap";
import SideMenuButton from "../components/sideMenuButton";

import { HouseFill, Building, Controller } from "react-bootstrap-icons";

let SideMenuMain = () => {
  return (
    <Container style={{ position: "sticky", top: "150px", marginLeft: "100px", marginTop: "-180px", zIndex: "100", backgroundColor: "transparent" }}>
      <SideMenuButton buttonLink={"/home"} icons={<HouseFill size={48} color={"black"} />} />
      <SideMenuButton buttonLink={"/business"} icons={<Building size={48} color={"black"} />} />
      <SideMenuButton buttonLink={"/entertainment"} icons={<Controller size={48} color={"black"} />} />
    </Container>
  );
};

export default SideMenuMain;
