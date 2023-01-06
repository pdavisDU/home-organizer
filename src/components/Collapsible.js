import React, { useRef } from "react";
function App() {
  const contentEl = useRef(null);

  const handleClick = () => {
    console.log("Button was clicked");
    console.log(
      `content is currently ${
        contentEl.current.classList.contains("hidden") ? "hidden" : "visible"
      }`
    );
    contentEl.current.classList.toggle("hidden");
    console.log(
      `Content is now ${
        contentEl.current.classList.contains("hidden") ? "hidden" : "visible"
      }`
    );
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
        <button className="ctgry">Tools</button>
        <button className="ctgry">Food</button>
      </div>
    </div>
  );
}

export default App;
