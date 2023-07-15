import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Shopping Cart state
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate total price of items in the cart
    const calculatedTotal = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount;
    }, 0);
    setTotal(calculatedTotal);
  }, [cart]);

  useEffect(() => {
    // Calculate total amount of items in the cart
    const calculatedAmount = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.amount;
    }, 0);
    setItemAmount(calculatedAmount);
  }, [cart]);

  const addToCart = (products, id) => {
    const newItem = { ...products, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // If the item already exists in the cart, increase the amount
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    // Remove item from the cart
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    // Clear the entire cart
    setCart([]);
  };

  const incrementAmount = (id) => {
    // Increment the amount of an item in the cart
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decrementAmount = (id) => {
    // Decrement the amount of an item in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // Decrease the amount if it's more than 1
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      // If the amount becomes less than 2, remove the item from the cart
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        incrementAmount,
        decrementAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
