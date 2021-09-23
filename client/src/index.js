import React from "react";
import ReactDOM from "react-dom";
import { ProductsProvider } from "../components/ProductsContext.jsx";
import App from "../components/App.jsx";

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);
