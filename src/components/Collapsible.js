import React, { useRef } from "react";
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
        <button className="ctgry">Cleaning Supplies</button>
        <button className="ctgry">Laundry Cleaning</button>
        <button className="ctgry">Tools</button>
        <button className="ctgry">Food</button>
      </div>
    </div>
  );
}

export default Collapsible;
