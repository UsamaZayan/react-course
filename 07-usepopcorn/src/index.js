//import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import StarRating from "./StarRatig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </React.StrictMode>
);

// function Test() {
//   const [movieRating, setMoveRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMoveRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }
