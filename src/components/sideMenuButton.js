import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

let SideMenuButton = (props) => {
  let [hoveredOver, setHoveredOver] = useState(false);
  const toggleHoverOver = () => {
    setHoveredOver(!hoveredOver);
  };

  const { x } = useSpring({
    from: { x: 0 },
    x: hoveredOver ? 1 : 0,
    config: { duration: 200 },
  });

  return (
    <Link to={props.buttonLink}>
      <animated.div style={{ opacity: x.to({ range: [0, 1], output: [0.5, 1] }) }}>
        <Button style={{ backgroundColor: "white", border: "none" }} onMouseEnter={toggleHoverOver} onMouseLeave={toggleHoverOver}>
          {props.icons}
        </Button>
      </animated.div>
    </Link>
  );
};

export default SideMenuButton;
