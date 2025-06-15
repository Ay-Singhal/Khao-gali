import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

function About() {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About Us</h1>
      <h2>{loggedInUser}</h2>
    </div>
  );
}

export default About;
