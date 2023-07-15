import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  // Accessing cart context and required functions
  const { removeFromCart, incrementAmount, decrementAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      {/* Image */}
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* <Link to={`/products/${id}`}> */}
        <img className="max-w-[80px]" src={image} alt="" />
        {/* </Link> */}

        <div className="w-full flex flex-col">
          {/* Title and Remove Icon */}
          <div className="flex justify-between mb-2">
            {/* Title with link to product details */}
            <Link
              to={"/product/:id"}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* Remove Icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-600 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              {/* Decrease quantity */}
              <div
                onClick={() => decrementAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* Amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* Increase quantity */}
              <div
                onClick={() => incrementAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* Item price */}
            <div className="flex-1 flex justify-center items-center text-primary">
              {`$ ${price}`}
            </div>
            {/* Final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
