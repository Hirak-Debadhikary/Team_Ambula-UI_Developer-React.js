import React from "react";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  return (
    <>
      <div className="hero min-h-screen">
        {/* <img
          src="https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg"
          className="w-full h-100vh rounded-lg shadow-2xl"
        /> */}
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">404</h1>
            <p className="mb-5 text-xl">Working on this page!</p>
            <Link to="/shopping">
              <button className="btn btn-primary">Back To Shopping</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
