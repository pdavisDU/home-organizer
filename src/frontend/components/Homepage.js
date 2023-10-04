import React from "react";
import "../components/Homepage.css";
import Nav from "./Nav";
import StartBox from "./StartBox";
import Register from "./Register";

function Homepage() {
  return (
    <div className="home">
      <Nav />
      <Register />
      {/* <StartBox /> */}
    </div>
  );
}

export default Homepage;
