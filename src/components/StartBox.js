import React from "react";
import "../components/StartBox.css";
import { Link } from "react-router-dom";

function StartBox() {
  return (
    <div className="start-wrapper">
      <div className="start-container">
        <Link to="/categories">Go to app!</Link>
      </div>
    </div>
  );
}

export default StartBox;
