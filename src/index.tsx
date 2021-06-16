import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// if ((module as CommonObject).hot) {
//   (module as CommonObject).hot.accept();
// }

const root: Element | null = document.querySelector("#app");

ReactDOM.render(<App />, root);
