import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlusSquareDotted, BsEye } from "react-icons/bs";
const Products = ({ products }) => {
  //   console.log(products);
  //Destructure products
  const { id, image, category, title, price } = products;
  return (
    <div>
      <div className="border border-[#000000] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="mx-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="absolute top-6 -right-5 group-hover:right-5  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-10 h-10 bg-green-500">
              <BsPlusSquareDotted className="text-2xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center drop-shadow-xl text-black"
          >
            <BsEye className="text-2xl" />
          </Link>
        </div>
      </div>
      {/*category, title, price  */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <div className="font-semibold">{`$${price}`}</div>
      </div>
    </div>
  );
};

export default Products;
