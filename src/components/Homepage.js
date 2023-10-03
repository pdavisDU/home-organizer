import React from "react";
import "../components/Homepage.css";
import Nav from "./Nav";
import StartBox from "./StartBox";

function Homepage() {
  return (
    <div className="home">
      <Nav />
      <StartBox />
    </div>
  );
}

export default Homepage;
