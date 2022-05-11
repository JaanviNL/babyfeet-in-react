import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {  WishlistProvider } from "./context/wishlist-context";
import { ProductProvider } from "./context/product-context";
import { CartProvider } from "./context/cart-context";





// Call make Server
makeServer();

ReactDOM.render(
  
  <BrowserRouter>
  <ProductProvider><CartProvider>
  <WishlistProvider>
    
    <App />
   
    </WishlistProvider>
    </CartProvider>
    </ProductProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
