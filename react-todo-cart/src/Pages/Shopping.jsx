import React, { useContext } from "react";

//import product context
import { ProductContext } from "../contexts/ProductContext";

import Header from "../Components/shopping/Header";
import Sidebar from "../Components/shopping/Sidebar";
import Products from "../Components/shopping/Products";

const Shopping = () => {
  /* Get Products from Product Context */
  const { products } = useContext(ProductContext);
  // console.log(products);

  //Get Only men's and women's and clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category == "women's clothing"
    );
  });
  // console.log(filteredProducts);

  return (
    <div>
      <Header />

      <section className="p-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-sm mx-auto md:max-w-none md:max-0">
            {filteredProducts.map((products) => {
              return (
                // <div className="w-full h-[300px] bg-pink-200" key={products.id}>
                //   {products.title}
                // </div>
                <Products products={products} key={products.id} />
              );
            })}
          </div>
        </div>
      </section>
      <Sidebar />
    </div>
  );
};

export default Shopping;
