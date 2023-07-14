import React, { createContext, useEffect, useState } from "react";

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products State
  const [products, setProducts] = useState([]);

  //   Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      //   console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
