import React, { useContext } from "react";

// Import ProductContext
import { ProductContext } from "../contexts/ProductContext";

import Sidebar from "../Components/shopping/Sidebar";
import Products from "../Components/shopping/Products";

const Shopping = () => {
  // Get products from ProductContext
  const { products } = useContext(ProductContext);

  return (
    <div>
      {/* Render the products section */}
      <section className="p-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md:max-0">
            {/* Render each product */}
            {products.map((product) => {
              return <Products products={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>

      {/* Render the sidebar component */}
      <Sidebar />
    </div>
  );
};

export default Shopping;
