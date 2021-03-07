import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron>
      <h1>Breaking News!</h1>
      <p>
        This is a modified jumbotron that occupies the entire horizontal space
        of its parent.
      </p>
      <Button variant="primary">Read More</Button>
    </Jumbotron>
  );
};

export default Header;
