import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { WishlistContext } from "./context/wishlist-context";



// Call make Server
makeServer();

ReactDOM.render(
  <WishlistContext.Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WishlistContext.Provider>,
  document.getElementById("root")
);
