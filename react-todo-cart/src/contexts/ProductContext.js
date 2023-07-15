import React, { createContext, useEffect, useState } from "react";

// Create Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Products State
  const [products, setProducts] = useState([]);

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      // Fetch products data from an API
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      // Update the products state with fetched data
      setProducts(data);
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
