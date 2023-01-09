import React, { useRef } from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

function Collapsible() {
  const contentEl = useRef(null);

  const handleClick = () => {
    contentEl.current.classList.toggle("hidden");
  };

  return (
    <div>
      <button
        id="collapsible-button"
        type="button"
        className="collapsible"
        onClick={handleClick}
      >
        Open Collapsible
      </button>
      <div ref={contentEl} className="hidden">
        <Link href="/CleaningSupplies">
          <button className="ctgry">Cleaning Supplies</button>
        </Link>
        <button className="ctgry">Laundry Cleaning</button>
        <button className="ctgry">Tools</button>
        <button className="ctgry">Food</button>
      </div>
    </div>
  );
}

export default Collapsible;
