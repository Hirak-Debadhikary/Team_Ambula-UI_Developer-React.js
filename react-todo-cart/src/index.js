import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Product provider
import ProductProvider from "./contexts/ProductContext";
// import { TodoProvider } from "./contexts/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <BrowserRouter>
        {/* <TodoProvider> */}
          <App />
        {/* </TodoProvider> */}
      </BrowserRouter>
    </React.StrictMode>
  </ProductProvider>
);

//   <TodoList />
// </TodoProvider>
