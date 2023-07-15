import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Shopping from "../Pages/Shopping";
import ProductDetails from "../Pages/ProductDetails";
import TodoList from "./TodoList";
import { TodoProvider } from "../contexts/TodoContext";

const AllRoutes = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Home />} />

      {/* About Route */}
      <Route path="/about" element={<About />} />

      {/* Contact Route */}
      <Route path="/contact" element={<Contact />} />

      {/* Todo List Route */}
      <Route
        path="/todo"
        element={
          <TodoProvider>
            <TodoList />
          </TodoProvider>
        }
      />

      {/* Shopping Route */}
      <Route path="/shopping" element={<Shopping />} />

      {/* Product Details Route */}
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AllRoutes;
