import React from "react";
import "../components/Homepage.css";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <h1>Home Organizer</h1>
    </div>
  );
}

export default Homepage;
