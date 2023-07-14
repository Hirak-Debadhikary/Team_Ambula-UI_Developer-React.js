import React, { useState } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: Date.now(), name: newItem }]);
      setNewItem("");
    }
  };

  const handleRemoveItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Add a new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>Total Items: {items.length}</div>
    </div>
  );
}

export default ShoppingCart;
