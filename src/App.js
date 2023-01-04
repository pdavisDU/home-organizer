// import "./App.css";
// import React, { useRef } from "react";
// function App() {
//   const contentEl = useRef(null);
//   const subContentEl = useRef(null);

//   const handleClick = () => {
//     console.log("Button was clicked");
//     console.log(
//       `content is currently ${
//         contentEl.current.classList.contains("hidden") ? "hidden" : "visible"
//       }`
//     );
//     contentEl.current.classList.toggle("hidden");
//     console.log(
//       `Content is now ${
//         contentEl.current.classList.contains("hidden") ? "hidden" : "visible"
//       }`
//     );
//   };

//   const handleSubClick = () => {
//     console.log("Sub Button was clicked");
//     console.log(
//       `subContent is currently ${
//         subContentEl.current.classList.contains("hidden") ? "hidden" : "visible"
//       }`
//     );
//     subContentEl.current.classList.toggle("hidden");
//     console.log(
//       `Sub content is now ${
//         subContentEl.current.classList.contains("hidden") ? "hidden" : "visible"
//       }`
//     );
//   };

//   return (
//     <div>
//       <button
//         id="collapsible-button"
//         type="button"
//         className="collapsible"
//         onClick={handleClick}
//       >
//         Open Collapsible
//       </button>
//       <div ref={contentEl} className="hidden">
//         <button className="ctgry" onClick={handleSubClick}>
//           Cleaning Supplies
//         </button>
//         <button className="ctgry">Tools</button>
//         <button className="ctgry">Food</button>
//         <div ref={subContentEl} className="sub-content hidden">
//           <button className="sub-ctgry">Paper Towels</button>
//           <button className="sub-ctgry">Soap</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useRef } from "react";
function App() {
  const contentEl = useRef(null);
  const subContentEl = useRef(null);

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

  const handleSubClick = () => {
    console.log("Sub button was clicked");
    console.log(
      `subContent is currently ${
        subContentEl.current.classList.contains("hidden") ? "hidden" : "visible"
      }`
    );
    subContentEl.current.classList.toggle("hidden");
    console.log(
      `subContent is now ${
        subContentEl.current.classList.contains("hidden") ? "hidden" : "visible"
      }`
    );
    subContentEl.current.style.top = `${
      contentEl.current.offsetTop + subContentEl.current.offsetTop
    }px`;
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
        <button className="ctgry" onClick={handleSubClick}>
          Cleaning Supplies
        </button>
        <button className="ctgry">Tools</button>
        <button className="ctgry">Food</button>
        <div ref={subContentEl} className="sub-content hidden">
          <button className="sub-ctgry">Paper Towels</button>
          <button className="sub-ctgry">Soap</button>
        </div>
      </div>
    </div>
  );
}

export default App;
