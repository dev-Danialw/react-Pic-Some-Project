import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import {CartContextProvider} from "./CartContext"

import App from "./App";

ReactDOM.render(
  // <CartContextProvider>
  <Router>
    <App />
  </Router>,
  // </CartContextProvider>,
  document.getElementById("root")
);
