import React, { useState } from "react";
import Navigation from "./Navigation";

function Inventory() {
  const [inventory, setInventory] = useState([
    {
      itemName: "Jitomate",
      quantity: "10",
      quality: "2",
    },
  ]);

  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: 0,
    quality: 0,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addToInventory = (e) => {
    e.preventDefault();
    setInventory([...inventory, newItem]);
  };
  return (
    <div className="w-screen">
      <Navigation />
      <div className="flex flex-wrap justify-center items-center mt-2 gap-4">
        <h1 className="text-4xl text-center mt-8">Inventory</h1>
        <form className="w-fit gap-2 flex flex-col border px-4">
          <h2 className="text-center">Add to my inventory</h2>
          <div className="flex gap-2">
            <label>Item Name</label>
            <input
              type="text"
              name="itemName"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label>Quantity</label>
            <input
              type="text"
              name="quantity"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-2">
            <label>Quality</label>
            <input
              type="text"
              name="quality"
              className="text-input"
              onChange={handleChange}
            />
          </div>
          <button
            className="border bg-orange-400 rounded-md w-fit px-4 py-2 mx-auto"
            onClick={addToInventory}
          >
            Add
          </button>
        </form>
      </div>

      {inventory.map((item) => (
        <div
          key={item.itemName}
          className="border p-4 rounded-md mx-auto w-fit mt-4"
        >
          <h2>{item.itemName}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Quality: {item.quality}</p>
        </div>
      ))}
    </div>
  );
}

export default Inventory;
