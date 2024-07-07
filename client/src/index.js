import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { SearchProvider } from "./context/search";
import { CartProvider } from "./context/cart";
import "antd/dist/reset.css";
import { DataProvider } from "./context/data";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <CartProvider>
        <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </DataProvider>
    </CartProvider>
    </SearchProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
